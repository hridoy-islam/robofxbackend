import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TExchange } from './exchange.interface';
import { Exchange } from './exchange.model';

const getAllExchangesFromDB = async () => {
  const result = await Exchange.find();
  return result;
};

const getSingleExchangesFromDB =  async (id: string) => {
  const result = await Exchange.findById(id);
  return result;
};

const createExchangeIntoDB = async (payload: TExchange) => {
  const isExists = await Exchange.findOne(payload);
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

const deleteExchangeIntoDB =  async (
  id: string,
) => {
  const exchange = await Exchange.findById(id);
  if (!exchange) {
    throw new AppError(httpStatus.NOT_FOUND, 'Exchange not found');
  }
  const result = await Exchange.findByIdAndDelete(id);
  return result;
};

export const ExchangeServices = {
  getAllExchangesFromDB,
  createExchangeIntoDB,
  updateExchangeIntoDB,
  getSingleExchangesFromDB,
  deleteExchangeIntoDB
};
