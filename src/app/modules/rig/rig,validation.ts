import { z } from "zod";

const rigValidationSchema = z.object({
    body: z.object({
        userid: z.string(),
        gpu: z.string(),
        status: z.string(),
        temp: z.string(),
        speed: z.string(),
        load: z.string(),
        power: z.string(),
        efficiency: z.string(),
        message: z.string()
    })
})