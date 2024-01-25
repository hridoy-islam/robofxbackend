import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RigHistoryServices } from './rigHistory.service';

const pauseRig = catchAsync(async (req, res) => {
  const { rigid } = req.params;
  const result = await RigHistoryServices.pauseRigToDB(rigid);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rig Paused succesfully',
    data: result,
  });
});

const startRig = catchAsync(async (req, res) => {
  const { rigid } = req.params;
  const result = await RigHistoryServices.startRigIntoDB(rigid);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rig Paused succesfully',
    data: result,
  });
});

const pauseall = catchAsync(async (req, res) => {
  const { userid } = req.params;
  const result = await RigHistoryServices.pauseallrigs(userid);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Rigs Paused succesfully',
    data: result,
  });
});

const startall = catchAsync(async (req, res) => {
  const { userid } = req.params;
  const result = await RigHistoryServices.startallrigs(userid);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Rigs Started succesfully',
    data: result,
  });
});

export const RigHisotyControllers = {
  pauseRig,
  startRig,
  pauseall,
  startall,
};
