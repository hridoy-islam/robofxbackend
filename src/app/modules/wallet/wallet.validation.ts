import { z } from 'zod';

export const walletValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Wallet name is required' }),
  }),
});
