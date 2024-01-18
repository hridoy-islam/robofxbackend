import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { UserServices } from './user.service';

const getAllUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUserFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users retrived succesfully',
    data: result,
  });
});
const getSingleUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.getSingleUserFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is retrieved succesfully',
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.updateUserIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is retrieved succesfully',
    data: result,
  });
});

const updateWallet = catchAsync(async (req, res) => {
  const { id, wallet_id } = req.params;
  const result = await UserServices.updateWallet(id, wallet_id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wallet is Updated succesfully',
    data: result,
  });
});

const createWallet = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.addNewWallet(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wallet is created succesfully',
    data: result,
  });
});

export const UserControllers = {
  getAllUser,
  getSingleUser,
  updateUser,
  updateWallet,
  createWallet
};
