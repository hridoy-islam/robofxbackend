import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { settingServices } from "./settings.service";

const createSettings = catchAsync(async(req, res)=> {
    const result = await settingServices.createSettingsToDB(req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Settings Created succesfully',
        data: result,
      });
})

const updateSettings = catchAsync(async(req, res)=> {
    const {id} = req.params
    const result = await settingServices.updateSettingsIntoDB(id, req.body)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Settings Updated succesfully',
        data: result,
      });
})

const getSettings = catchAsync(async(req, res)=> { 
    const result = await settingServices.getSettingFromDB()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Settings Retrived succesfully',
        data: result,
      });
})

export const SettingsControllers = {
    createSettings,
    updateSettings,
    getSettings
}