"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletValidationSchema = void 0;
const zod_1 = require("zod");
exports.walletValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: 'Wallet name is required' }),
    }),
});
