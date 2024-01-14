"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateInvoiceValidationSchema = exports.createInvoiceValidationSchema = void 0;
const zod_1 = require("zod");
const invoice_constant_1 = require("./invoice.constant");
const invoiceInformationSchema = zod_1.z.object({
    item: zod_1.z.string(),
    quantity: zod_1.z.number(),
    rate: zod_1.z.number(),
    tax: zod_1.z.number(),
    ammount: zod_1.z.number(),
});
exports.createInvoiceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        category: zod_1.z.enum([...invoice_constant_1.InvoiceCategory]),
        userid: zod_1.z.string({ required_error: 'User ID Required' }),
        information: zod_1.z.array(invoiceInformationSchema),
        discount: zod_1.z.number().optional(),
    }),
});
const updateInvoiceInformationSchema = zod_1.z.object({
    item: zod_1.z.string().optional(),
    quantity: zod_1.z.number().optional(),
    rate: zod_1.z.number().optional(),
    tax: zod_1.z.number().optional(),
    ammount: zod_1.z.number().optional(),
    discount: zod_1.z.number().optional(),
});
exports.updateInvoiceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        category: zod_1.z.enum([...invoice_constant_1.InvoiceCategory]).optional(),
        userid: zod_1.z.string({ required_error: 'User ID Required' }).optional(),
        information: zod_1.z.array(updateInvoiceInformationSchema),
    }),
});
