import { z } from 'zod';

export const rigHistoryValidationSchema = z.object({
  body: z.object({
    rigid: z.string(),
    userId: z.string(),
    pauseTime: z.date(),
    startTime: z.date(),
    duration: z.number(),
  }),
});
