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
exports.InvoiceServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const invoice_model_1 = require("./invoice.model");
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const createInvoiceIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield invoice_model_1.Invoice.create(payload);
    return result;
});
const getInvoiceFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield invoice_model_1.Invoice.findById(id);
    return result;
});
const updateInvoiceIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const invoice = yield invoice_model_1.Invoice.findById(id);
    if (!invoice) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Invoice ID not valid');
    }
    const result = yield invoice_model_1.Invoice.findByIdAndUpdate(id, payload, { new: true });
    return result;
});
const getAllInvoiceFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const invoiceQuery = new QueryBuilder_1.default(invoice_model_1.Invoice.find(), query)
        .filter()
        .sort()
        .paginate()
        .fields();
    const meta = yield invoiceQuery.countTotal();
    const result = yield invoiceQuery.modelQuery;
    return {
        meta,
        result,
    };
});
exports.InvoiceServices = {
    createInvoiceIntoDB,
    getInvoiceFromDB,
    updateInvoiceIntoDB,
    getAllInvoiceFromDB,
};
