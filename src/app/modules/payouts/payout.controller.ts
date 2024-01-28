import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { PayoutServices } from './payout.service';
import sendResponse from '../../utils/sendResponse';

const getAllPayouts = catchAsync(async (req, res) => {
  const result = await PayoutServices.getAllPayoutsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rig Retrived Successfully',
    data: result,
  });
});

export const PayoutController = {
  getAllPayouts,
};
