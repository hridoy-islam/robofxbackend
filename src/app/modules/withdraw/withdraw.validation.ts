import { z } from "zod"

export const withdrawValidationSchema = z.object({
    body: z.object({
        userid : z.string(),
        btc : z.string().optional(),
        ammount: z.number(),
        bank: z.string().optional(),
        speed: z.string().optional(),
        requestDate : z.string().optional(),
        status: z.string().optional(),
        efficiency: z.string().optional(),
        message: z.string().optional()
    }),
  })