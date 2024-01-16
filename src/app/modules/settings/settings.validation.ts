import { z } from 'zod';

export const settingsValidationSchema = z.object({
  body: z.object({
    usd: z.number().optional(),
    inr: z.number().optional(),
    btc: z.number().optional(),
    euro: z.number().optional()
  }),
});
