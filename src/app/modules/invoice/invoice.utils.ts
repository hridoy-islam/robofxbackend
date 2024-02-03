import { Invoice } from './invoice.model';

export const findLastInvoiceId = async () => {
  const result = await Invoice.findOne()
    .select('invoiceId')
    .sort({ createdAt: -1 })
    .lean();
  return result?.invoiceId ? result?.invoiceId : undefined;
};

export const generateInvoiceId = async () => {
  let currentId = (0).toString();
  const lastInvoiceId = await findLastInvoiceId();

  if (lastInvoiceId) {
    currentId = lastInvoiceId?.substring(0, 4);
  }

  const incrementId = (Number(currentId) + 1).toString().padStart(4, '0');
  return incrementId;
};
