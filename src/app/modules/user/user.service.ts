import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { TUser, TUserWallet } from './user.interface';
import { User } from './user.model';

const getAllUserFromDB = async (query: Record<string, unknown>) => {
  const userQuery = new QueryBuilder(User.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await userQuery.countTotal();
  const result = await userQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleUserFromDB = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

const updateUserIntoDB = async (id: string, payload: Partial<TUser>) => {
  const {
    billing_information,
    personal_information,
    contact_information,
    ...remainingStudentData
  } = payload;
  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (personal_information && Object.keys(personal_information).length) {
    for (const [key, value] of Object.entries(personal_information)) {
      modifiedUpdatedData[`personal_information.${key}`] = value;
    }
  }

  if (contact_information && Object.keys(contact_information).length) {
    for (const [key, value] of Object.entries(contact_information)) {
      modifiedUpdatedData[`contact_information.${key}`] = value;
    }
  }

  if (billing_information && Object.keys(billing_information).length) {
    for (const [key, value] of Object.entries(billing_information)) {
      modifiedUpdatedData[`billing_information.${key}`] = value;
    }
  }

  const result = await User.findByIdAndUpdate(id, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });

  return result;
};

const addNewWallet = async (id: string, payload: TUserWallet) => {
  try {
    const createdData = await User.findByIdAndUpdate(
      id,
      { $push: { wallets: payload } },
      { new: true, upsert: true },
    );
    if (createdData) {
      const updatedWallet = await User.findOne({ _id: id });
      return updatedWallet;
    } else throw new AppError(httpStatus.NOT_FOUND, 'Wallet Update Error.');
  } catch (error) {
    throw new AppError(httpStatus.NOT_FOUND, 'New Wallet Create Error.');
  }
};

const updateWallet = async () =>
  // id: string,
  // wallet_id: string,
  // payload: TUserWallet,
  {
    // try {
    // let entries = Object.keys(payload)
    // console.log(typeof payload)
    // const updateWalletList = await User.findByIdAndUpdate({
    //   _id: id,
    //   wallets?._id : wallet_id,
    // },
    // {
    //   $set: payload
    // });
    //   if (updateWalletList) {
    //     const updatedWallet = await User.findOne({ _id: id });
    //     return updatedWallet;
    //   } else throw new AppError(httpStatus.NOT_FOUND, 'Wallet Update Error.');
    // } catch (error) {
    //   throw new AppError(httpStatus.NOT_FOUND, 'Wallet Update Error.');
    // }
  };

export const UserServices = {
  getAllUserFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  updateWallet,
  addNewWallet,
};
