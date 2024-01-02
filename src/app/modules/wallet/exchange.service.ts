import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TExchange } from './wallet.interface';
import { Exchange } from './wallet.model';

const getAllExchangesFromDB = async () => {
  const result = await Exchange.find();
  return result;
};

const createExchangeIntoDB = async (payload: TExchange) => {
  const isExists = await Exchange.find(payload);
  if (isExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Exchange already exists');
  }
  const result = await Exchange.create(payload);
  return result;
};

const updateExchangeIntoDB = async (
  id: string,
  payload: Partial<TExchange>,
) => {
  const exchange = await Exchange.findById(id);
  if (!exchange) {
    throw new AppError(httpStatus.NOT_FOUND, 'Exchange not found');
  }
  const result = await Exchange.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const ExchangeServices = {
  getAllExchangesFromDB,
  createExchangeIntoDB,
  updateExchangeIntoDB,
};
