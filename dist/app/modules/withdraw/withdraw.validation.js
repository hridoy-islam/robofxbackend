"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withdrawValidationSchema = void 0;
const zod_1 = require("zod");
exports.withdrawValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        userid: zod_1.z.string(),
        btc: zod_1.z.string().optional(),
        ammount: zod_1.z.number(),
        bank: zod_1.z.string().optional(),
        speed: zod_1.z.string().optional(),
        requestDate: zod_1.z.string().optional(),
        status: zod_1.z.string().optional(),
        efficiency: zod_1.z.string().optional(),
        message: zod_1.z.string().optional()
    }),
});
