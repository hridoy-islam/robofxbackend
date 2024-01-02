import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TInvoice } from './invoice.interface';
import { Invoice } from './invoice.model';
import QueryBuilder from '../../builder/QueryBuilder';

const createInvoiceIntoDB = async (payload: TInvoice) => {
  const result = await Invoice.create(payload);
  return result;
};

const getInvoiceFromDB = async (id: string) => {
  const result = await Invoice.findById(id);
  return result;
};

const updateInvoiceIntoDB = async (id: string, payload: Partial<TInvoice>) => {
  const invoice = await Invoice.findById(id);
  if (!invoice) {
    throw new AppError(httpStatus.NOT_FOUND, 'Invoice ID not valid');
  }
  const result = await Invoice.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const getAllInvoiceFromDB = async (query: Record<string, unknown>) => {
  const invoiceQuery = new QueryBuilder(Invoice.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await invoiceQuery.countTotal();
  const result = await invoiceQuery.modelQuery;

  return {
    meta,
    result,
  };
};

export const InvoiceServices = {
  createInvoiceIntoDB,
  getInvoiceFromDB,
  updateInvoiceIntoDB,
  getAllInvoiceFromDB,
};
