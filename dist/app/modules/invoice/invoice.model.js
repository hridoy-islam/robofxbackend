"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
const mongoose_1 = require("mongoose");
const invoice_constant_1 = require("./invoice.constant");
const invoiceShema = new mongoose_1.Schema({
    category: {
        type: String,
        enum: {
            values: invoice_constant_1.InvoiceCategory,
            message: '{VALUE} is not a valid gender',
        },
        required: [true, 'Invoice Category is required'],
    },
    userid: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, 'User ID is required'],
    },
    information: [
        {
            item: { type: String },
            quantity: { type: Number },
            rate: { type: Number },
            tax: { type: Number },
            ammount: { type: Number },
            discount: { type: Number },
        },
    ],
}, { timestamps: true });
exports.Invoice = (0, mongoose_1.model)('Invoice', invoiceShema);
