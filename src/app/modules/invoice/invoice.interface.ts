import { Types } from 'mongoose';

export type TInvoiceCategory = 'bill' | 'addon' | 'rigs';

export type TInvoiceInformation = [
  {
    item: string;
    quantity: number;
    rate: number;
    tax: number;
    amount: number;
  },
];

export type TInvoice = {
  category: TInvoiceCategory;
  userid: Types.ObjectId;
  information: TInvoiceInformation;
  discount: number;
  invoiceId: string;
};
