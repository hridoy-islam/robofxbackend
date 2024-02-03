import { z } from 'zod';

export const rigValidationSchema = z.object({
  body: z.object({
    userid: z.string(),
    rigName: z.string(),
    gpu: z.string(),
    status: z.enum(['pause', 'mining']).optional(),
    temp: z.string(),
    fan: z.string(),
    load: z.string(),
    power: z.string(),
    efficiency: z.number(),
    proficiency: z.number(),
    message: z.string().optional(),
    isDeleted: z.boolean().optional(),
    quantity: z.number().optional(),
  }),
});

export const updateRigValidationSchema = z.object({
  body: z.object({
    userid: z.string().optional(),
    rigName: z.string().optional(),
    gpu: z.string().optional(),
    temp: z.string().optional(),
    fan: z.string().optional(),
    load: z.string().optional(),
    power: z.string().optional(),
    efficiency: z.number().optional(),
    proficiency: z.number().optional(),
  }),
});
