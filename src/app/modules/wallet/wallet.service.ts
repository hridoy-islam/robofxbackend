import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TWallet } from './wallet.interface';
import { Wallet } from './wallet.model';

const getAllWalletesFromDB = async () => {
  const result = await Wallet.find();
  return result;
};

const getSingleWalletFromDB = async(id: string)=> {
  const result = await Wallet.findById(id)
  return result;
}

const createWalletIntoDB = async (payload: TWallet) => {
  const isExists = await Wallet.findOne(payload);
  if (isExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Wallet already exists');
  }
  const result = await Wallet.create(payload);
  return result;
};

const updateWalletIntoDB = async (
  id: string,
  payload: Partial<TWallet>,
) => {
  const wallet = await Wallet.findById(id);
  if (!wallet) {
    throw new AppError(httpStatus.NOT_FOUND, 'Wallet not found');
  }
  const result = await Wallet.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteWalletIntoDB = async (
  id: string,
) => {
  const wallet = await Wallet.findById(id);
  if (!wallet) {
    throw new AppError(httpStatus.NOT_FOUND, 'Wallet not found');
  }
  const result = await Wallet.findByIdAndDelete(id);
  return result;
};

export const WalletServices = {
  getAllWalletesFromDB,
  createWalletIntoDB,
  updateWalletIntoDB,
  getSingleWalletFromDB,
  deleteWalletIntoDB
};
