"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const settings_model_1 = require("./settings.model");
const createSettingsToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield settings_model_1.Setting.create(payload);
    return result;
});
const updateSettingsIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const settings = yield settings_model_1.Setting.findById(id);
    if (!settings) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Settings ID not found');
    }
    const result = yield settings_model_1.Setting.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const getSettingFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield settings_model_1.Setting.find();
    return result;
});
exports.settingServices = {
    createSettingsToDB,
    updateSettingsIntoDB,
    getSettingFromDB
};
