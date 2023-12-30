import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { WithdrawServices } from "./withdraw.service";

const createWithdraw = catchAsync(async (req, res) => {
    const result = WithdrawServices.createWithDrawToDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Withdraw Requested succesfully',
        data: result,
    });
})

const getAllWithdraw = catchAsync(async (req, res) => {
    const result = WithdrawServices.getAllWithDrawFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Withdraw Data Retrived succesfully',
        data: result,
    });
})

const getSingleWithdraw = catchAsync(async (req, res) => {
    const {id} = req.params;
    const result = WithdrawServices.getSingleWithDrawFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Withdraw Data Retrived succesfully',
        data: result,
    });
})

const updateWithdraw = catchAsync(async (req, res) => {
    const {id} = req.params;
    const {payload} = req.body
    const result = WithdrawServices.updateWithdrawIntoDB(id, payload)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Withdraw Data Updated succesfully',
        data: result,
    });
})

export const WithdrawControllers = {
    createWithdraw,
    getAllWithdraw,
    getSingleWithdraw,
    updateWithdraw
}