"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = void 0;
const zod_1 = require("zod");
const createProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        powerdby: zod_1.z.string(),
        motherboard: zod_1.z.string(),
        processor: zod_1.z.string(),
        ram: zod_1.z.string(),
        smps: zod_1.z.string(),
        graphicscard: zod_1.z.string(),
        photo: zod_1.z.string().optional(),
        price: zod_1.z.number(),
    }),
});
const updateProductValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        powerdby: zod_1.z.string().optional(),
        motherboard: zod_1.z.string().optional(),
        processor: zod_1.z.string().optional(),
        ram: zod_1.z.string().optional(),
        smps: zod_1.z.string().optional(),
        graphicscard: zod_1.z.string().optional(),
        photo: zod_1.z.string().optional(),
        price: zod_1.z.string().optional(),
    }),
});
exports.productValidation = {
    createProductValidationSchema,
    updateProductValidationSchema,
};
