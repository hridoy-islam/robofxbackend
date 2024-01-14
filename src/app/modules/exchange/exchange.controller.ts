import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ExchangeServices } from './exchange.service';

const getAllExchanges = catchAsync(async (req, res) => {
  const result = await ExchangeServices.getAllExchangesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Exchanges Retrived succesfully',
    data: result,
  });
});

const getSingleExchanges = catchAsync(async (req, res) => {
  const {id} = req.params
  const result = await ExchangeServices.getSingleExchangesFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Exchanges Retrived succesfully',
    data: result,
  });
});

const createExchange = catchAsync(async (req, res) => {
  const result = await ExchangeServices.createExchangeIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Exchanges Created succesfully',
    data: result,
  });
});

const updateExchange = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExchangeServices.updateExchangeIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Exchanges Created succesfully',
    data: result,
  });
});

export const ExchangeControllers = {
  getAllExchanges,
  createExchange,
  updateExchange,
  getSingleExchanges
};
