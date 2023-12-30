import { z } from "zod"

export const withdrawValidationSchema = z.object({
    body: z.object({
        userid : z.string(),
        btc : z.string(),
        ammount: z.number(),
        bank: z.string(),
        speed: z.string(),
        requestDate : z.string(),
        status: z.string(),
        efficiency: z.string(),
        message: z.string()
    }),
  })