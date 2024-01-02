import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { WalletServices } from './wallet.service';

const getAllWalletes = catchAsync(async (req, res) => {
  const result = await WalletServices.getAllWalletesFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wallet Retrived succesfully',
    data: result,
  });
});

const getSingleWallet = catchAsync(async (req, res) => {
  const {id} = req.params
  const result = await WalletServices.getSingleWalletFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wallet Retrived succesfully',
    data: result,
  });
});

const createWallet = catchAsync(async (req, res) => {
  console.log(req.body)
  const result = await WalletServices.createWalletIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wallet Created succesfully',
    data: result,
  });
});

const updateWallet = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await WalletServices.updateWalletIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Wallet Created succesfully',
    data: result,
  });
});

export const WalletControllers = {
  getAllWalletes,
  createWallet,
  updateWallet,
  getSingleWallet
};
