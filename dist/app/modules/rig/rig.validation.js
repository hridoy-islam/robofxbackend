"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const rigValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        userid: zod_1.z.string(),
        gpu: zod_1.z.string(),
        status: zod_1.z.string(),
        temp: zod_1.z.string(),
        speed: zod_1.z.string(),
        load: zod_1.z.string(),
        power: zod_1.z.string(),
        efficiency: zod_1.z.string(),
        message: zod_1.z.string()
    })
});
