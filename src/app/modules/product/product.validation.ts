import { z } from "zod";

const createProductValidationSchema = z.object({
    body: z.object({
        title : z.string(),
        powerdby: z.string(),
        motherboard: z.string(),
        processor: z.string(),
        ram: z.string(),
        smps : z.string(),
        graphicscard: z.string(),
        photo: z.string()
    }),
})

const updateProductValidationSchema = z.object({
    body: z.object({
        title : z.string().optional(),
        powerdby: z.string().optional(),
        motherboard: z.string().optional(),
        processor: z.string().optional(),
        ram: z.string().optional(),
        smps : z.string().optional(),
        graphicscard: z.string().optional(),
        photo: z.string().optional()
    })
})

export const productValidation = {
    createProductValidationSchema,
    updateProductValidationSchema
}