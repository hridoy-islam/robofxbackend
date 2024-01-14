"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exchangeValidationSchema = void 0;
const zod_1 = require("zod");
exports.exchangeValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Exchange name is required' }),
    }),
});
