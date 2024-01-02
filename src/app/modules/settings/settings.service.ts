import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TSettings } from "./settings.interface";
import { Setting } from "./settings.model";

const createSettingsToDB = async(payload: Partial<TSettings>) =>{
    const result = await Setting.create(payload)
    return result;
}

const updateSettingsIntoDB = async(id: string, payload: Partial<TSettings>) =>{
    const settings = await Setting.findById(id);

    if(!settings){
        throw new AppError(httpStatus.NOT_FOUND, 'Settings ID not found');
    }
    const result = await Setting.findByIdAndUpdate(id, payload, {new: true})
    return result;
}
const getSettingFromDB = async() =>{
    const result = await Setting.find();
    return result;
}

export const settingServices = {
    createSettingsToDB,
    updateSettingsIntoDB,
    getSettingFromDB
}