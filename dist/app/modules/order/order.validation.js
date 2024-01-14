"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderValidationSchema = void 0;
const zod_1 = require("zod");
exports.createOrderValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        productid: zod_1.z.string(),
        userid: zod_1.z.string(),
    }),
});
