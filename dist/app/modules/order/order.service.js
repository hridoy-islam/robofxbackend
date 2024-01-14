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
exports.OrderServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const order_model_1 = require("./order.model");
const createOrderToDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newOrder = yield order_model_1.Order.create(payload);
    return newOrder;
});
const getAllOrdersFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const orderQuery = new QueryBuilder_1.default(order_model_1.Order.find().populate('userid').populate('productid'), query)
        .filter()
        .sort()
        .paginate()
        .fields();
    const meta = yield orderQuery.countTotal();
    const result = yield orderQuery.modelQuery;
    return {
        meta,
        result,
    };
});
const getSingleOrderFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findById(id)
        .populate('productid')
        .populate('userid');
    return result;
});
const updateOrderIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_model_1.Order.findById(id);
    if (!order) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Order Not Found');
    }
    const result = yield order_model_1.Order.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const deleteOrderFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.findById(id);
    return result;
});
exports.OrderServices = {
    createOrderToDB,
    getAllOrdersFromDB,
    getSingleOrderFromDB,
    updateOrderIntoDB,
    deleteOrderFromDB,
};
