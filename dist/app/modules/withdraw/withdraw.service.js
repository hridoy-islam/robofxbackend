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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithdrawServices = void 0;
const withdraw_model_1 = require("./withdraw.model");
const createWithDrawToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield withdraw_model_1.Withdraw.create(payload);
    return result;
});
const getAllWithDrawFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield withdraw_model_1.Withdraw.find();
    return result;
});
const getSingleWithDrawFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield withdraw_model_1.Withdraw.findById(id);
    return result;
});
const updateWithdrawIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield withdraw_model_1.Withdraw.findByIdAndUpdate(id, payload);
    return result;
});
exports.WithdrawServices = {
    createWithDrawToDB,
    getAllWithDrawFromDB,
    getSingleWithDrawFromDB,
    updateWithdrawIntoDB
};
