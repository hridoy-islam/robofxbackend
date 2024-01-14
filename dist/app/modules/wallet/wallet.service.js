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
exports.WalletServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const wallet_model_1 = require("./wallet.model");
const getAllWalletesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wallet_model_1.Wallet.find();
    return result;
});
const getSingleWalletFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wallet_model_1.Wallet.findById(id);
    return result;
});
const createWalletIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExists = yield wallet_model_1.Wallet.findOne(payload);
    if (isExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Wallet already exists');
    }
    const result = yield wallet_model_1.Wallet.create(payload);
    return result;
});
const updateWalletIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const wallet = yield wallet_model_1.Wallet.findById(id);
    if (!wallet) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Wallet not found');
    }
    const result = yield wallet_model_1.Wallet.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
exports.WalletServices = {
    getAllWalletesFromDB,
    createWalletIntoDB,
    updateWalletIntoDB,
    getSingleWalletFromDB
};
