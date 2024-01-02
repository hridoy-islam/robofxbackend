import { z } from 'zod';

export const exchangeValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Exchange name is required' }),
  }),
});
