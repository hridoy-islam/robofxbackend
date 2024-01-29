import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { RigServices } from './rig.service';

const getAllRigs = catchAsync(async (req, res) => {
  const result = await RigServices.getAllRigsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rig Retrived Successfully',
    data: result,
  });
});

const createRig = catchAsync(async (req, res) => {
  const result = await RigServices.createRigIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rig Created succesfully',
    data: result,
  });
});

const getSingleRig = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await RigServices.getSingleRigFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rig Retrived succesfully',
    data: result,
  });
});

const updateRig = catchAsync(async (req, res) => {
  const { id } = req.params;

  const result = await RigServices.updateRigIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Rig Updated succesfully',
    data: result,
  });
});

export const RigControllers = {
  createRig,
  getSingleRig,
  updateRig,
  getAllRigs,
};
