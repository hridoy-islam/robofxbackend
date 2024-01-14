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
exports.ExchangeServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const exchange_model_1 = require("./exchange.model");
const getAllExchangesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exchange_model_1.Exchange.find();
    return result;
});
const getSingleExchangesFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield exchange_model_1.Exchange.findById(id);
    return result;
});
const createExchangeIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isExists = yield exchange_model_1.Exchange.findOne(payload);
    if (isExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Exchange already exists');
    }
    const result = yield exchange_model_1.Exchange.create(payload);
    return result;
});
const updateExchangeIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const exchange = yield exchange_model_1.Exchange.findById(id);
    if (!exchange) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Exchange not found');
    }
    const result = yield exchange_model_1.Exchange.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
exports.ExchangeServices = {
    getAllExchangesFromDB,
    createExchangeIntoDB,
    updateExchangeIntoDB,
    getSingleExchangesFromDB
};
