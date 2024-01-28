import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { WithdrawServices } from './withdraw.service';

const createWithdraw = catchAsync(async (req, res) => {
  const result = await WithdrawServices.createWithDrawToDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Withdraw Requested succesfully',
    data: result,
  });
});

const getAllWithdraw = catchAsync(async (req, res) => {
  const result = await WithdrawServices.getAllWithDrawFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Withdraw Data Retrived succesfully',
    data: result,
  });
});

const getSingleWithdraw = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await WithdrawServices.getSingleWithDrawFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Withdraw Data Retrived succesfully',
    data: result,
  });
});

const updateWithdraw = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await WithdrawServices.updateWithdrawIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Withdraw Data Updated succesfully',
    data: result,
  });
});

const approveWithDraw = catchAsync(async (req, res) => {
  const { id, userid } = req.params;
  const result = await WithdrawServices.withdrawApprove(id, userid);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Withdraw Approved succesfully',
    data: result,
  });
});

export const WithdrawControllers = {
  createWithdraw,
  getAllWithdraw,
  getSingleWithdraw,
  updateWithdraw,
  approveWithDraw,
};
