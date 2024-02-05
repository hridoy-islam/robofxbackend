import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TCreateUser, TLogin } from './auth.interface';
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../../config';
import { createToken } from './auth.utils';
import { sendEmail } from '../../utils/sendEmail';

const checkLogin = async (payload: TLogin) => {
  try {
    const foundUser = await User.isUserExists(payload.email);
    if (!foundUser) {
      throw new AppError(httpStatus.NOT_FOUND, 'Name of user is not correct');
    }

    if (foundUser.isDeleted) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        'This Account Has Been Deleted.',
      );
    }

    if (!(await User.isPasswordMatched(payload?.password, foundUser?.password)))
      throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

    // const jwtPayload = {
    //   id: foundUser?._id,
    //   email: foundUser.email,
    //   role: foundUser.role,
    // };
    // const accessToken = createToken(
    //   jwtPayload,
    //   config.jwt_access_secret as string,
    //   config.jwt_access_expires_in as string,
    // );
    // const refreshToken = createToken(
    //   jwtPayload,
    //   config.jwt_refresh_secret as string,
    //   config.jwt_refresh_expires_in as string,
    // );

    const accessToken = jwt.sign(
      {
        _id: foundUser._id?.toString(),
        email: foundUser?.email,
        role: foundUser?.role,
      },
      `${config.jwt_access_secret}`,
      {
        expiresIn: '2 days',
      },
    );

    return {
      accessToken,
    };
  } catch (error) {
    throw new AppError(httpStatus.NOT_FOUND, 'Email Or Password doesnt match');
  }
};
const createUserIntoDB = async (payload: TCreateUser) => {
  const user = await User.isUserExists(payload.email);
  if (user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This email is already exits!');
  }
  const result = await User.create(payload);
  return result;
};

const forgetPassword = async (email: string) => {
  const user = await User.isUserExists(email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };
  const resetToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    '10m',
  );
  const resetUILink = `${config.reset_pass_ui_link}?id=${user.email}&token=${resetToken} `;
  sendEmail(user.email, resetUILink);
};

const resetPassword = async (
  payload: { email: string; newPassword: string },
  token: string,
) => {
  const user = await User.isUserExists(payload?.email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  const decoded = jwt.verify(
    token,
    config.jwt_access_secret as string,
  ) as JwtPayload;

  if (payload.email !== decoded.email) {
    throw new AppError(httpStatus.FORBIDDEN, 'You are forbidden!');
  }

  const newHashedPassword = await bcrypt.hash(
    payload.newPassword,
    Number(config.bcrypt_salt_rounds),
  );

  await User.findOneAndUpdate(
    { email: decoded.email, role: decoded.role },
    {
      password: newHashedPassword,
    },
  );
};

export const AuthServices = {
  checkLogin,
  createUserIntoDB,
  resetPassword,
  forgetPassword,
};
