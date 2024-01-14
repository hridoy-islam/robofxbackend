"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingsValidationSchema = void 0;
const zod_1 = require("zod");
exports.settingsValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        usd: zod_1.z.number().optional(),
        inr: zod_1.z.number().optional(),
        btc: zod_1.z.number().optional(),
    }),
});
