import { z } from 'zod';

export const rigValidationSchema = z.object({
  body: z.object({
    userid: z.string(),
    rigName: z.string(),
    gpu: z.string(),
    status: z.string(),
    temp: z.string(),
    fan: z.string(),
    load: z.string(),
    power: z.string(),
    efficiency: z.number(),

    message: z.string(),
  }),
});
