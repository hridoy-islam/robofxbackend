import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { TWithdraw } from './withdraw.interface';
import { Withdraw } from './withdraw.model';
import { User } from '../user/user.model';

const createWithDrawToDB = async (payload: TWithdraw) => {
  const result = await Withdraw.create(payload);
  return result;
};

const getAllWithDrawFromDB = async (query: Record<string, unknown>) => {
  const withdrawQuery = new QueryBuilder(
    Withdraw.find().populate('userid'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await withdrawQuery.countTotal();
  const result = await withdrawQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleWithDrawFromDB = async (id: string) => {
  const result = await Withdraw.findById(id).populate('userid');

  return result;
};

const updateWithdrawIntoDB = async (
  id: string,
  payload: Partial<TWithdraw>,
) => {
  const withdraw = await Withdraw.findById(id);
  if (!withdraw) {
    throw new AppError(httpStatus.NOT_FOUND, 'Withdraw Not Found');
  }
  const result = await Withdraw.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const withdrawApprove = async (id: string, userid: string) => {
  const withdraw = await Withdraw.findById(id);
  const user = await User.findById(userid);

  if (!withdraw) {
    throw new AppError(httpStatus.NOT_FOUND, 'Withdraw Not Found');
  }
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User Not Found');
  }
  let balance = Number(user?.balance);
  if (balance >= withdraw?.amount) {
    // Deduct the withdrawal amount from the user's balance
    balance -= withdraw?.amount;
    withdraw.status = 'approve';
    await withdraw.save();
    // Save the updated user data
    await user.save();
  } else {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'Insufficient balance for withdrawal',
    );
  }
  return balance;
};

export const WithdrawServices = {
  createWithDrawToDB,
  getAllWithDrawFromDB,
  getSingleWithDrawFromDB,
  updateWithdrawIntoDB,
  withdrawApprove,
};
