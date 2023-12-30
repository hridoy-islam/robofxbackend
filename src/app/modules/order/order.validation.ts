import { z } from "zod";

export const createOrderValidationSchema = z.object({
    body: z.object({
      productid: z.string(),
      userid : z.string(),
    }),
  });