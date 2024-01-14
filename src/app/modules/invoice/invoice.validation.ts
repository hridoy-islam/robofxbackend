import { z } from 'zod';
import { InvoiceCategory } from './invoice.constant';

const invoiceInformationSchema = z.object({
  item: z.string(),
  quantity: z.number(),
  rate: z.number(),
  tax: z.number(),
  ammount: z.number(),
});

export const createInvoiceValidationSchema = z.object({
  body: z.object({
    category: z.enum([...InvoiceCategory] as [string, ...string[]]),
    userid: z.string({ required_error: 'User ID Required' }),
    information: z.array(invoiceInformationSchema),
    discount: z.number().optional(),
  }),
});

const updateInvoiceInformationSchema = z.object({
  item: z.string().optional(),
  quantity: z.number().optional(),
  rate: z.number().optional(),
  tax: z.number().optional(),
  ammount: z.number().optional(),
  discount: z.number().optional(),
});

export const updateInvoiceValidationSchema = z.object({
  body: z.object({
    category: z.enum([...InvoiceCategory] as [string, ...string[]]).optional(),
    userid: z.string({ required_error: 'User ID Required' }).optional(),
    information: z.array(updateInvoiceInformationSchema),
  }),
});
