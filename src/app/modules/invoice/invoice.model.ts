import { Schema, model } from 'mongoose';
import { TInvoice } from './invoice.interface';
import { InvoiceCategory } from './invoice.constant';

const invoiceShema = new Schema<TInvoice>(
  {
    category: {
      type: String,
      enum: {
        values: InvoiceCategory,
        message: '{VALUE} is not a valid gender',
      },
      required: [true, 'Invoice Category is required'],
    },
    userid: {
      type: Schema.Types.ObjectId,
      required: [true, 'User ID is required'],
    },
    information: [
      {
        item: { type: String },
        quantity: { type: Number },
        rate: { type: Number },
        tax: { type: Number },
        ammount: { type: Number },
      },
    ],
  },
  { timestamps: true },
);

export const Invoice = model('Invoice', invoiceShema);
