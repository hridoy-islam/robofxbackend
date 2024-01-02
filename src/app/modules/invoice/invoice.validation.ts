import { z } from "zod";
import { InvoiceCategory } from "./invoice.constant";

export const invoiceValidationSchema = z.object({
    body: z.object({
        category: z.enum([...InvoiceCategory] as [string, ...string[]])
    })
})