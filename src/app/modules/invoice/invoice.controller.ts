import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { InvoiceServices } from './invoice.service';
import sendResponse from '../../utils/sendResponse';

const createInvoice = catchAsync(async (req, res) => {
  const result = await InvoiceServices.createInvoiceIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is created succesfully',
    data: result,
  });
});

const getAllInvoice = catchAsync(async (req, res) => {
  const result = await InvoiceServices.getAllInvoiceFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products Retrived succesfully',
    data: result,
  });
});

const getSingleInvoice = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await InvoiceServices.getInvoiceFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product Retrived succesfully',
    data: result,
  });
});

const updateInvoice = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await InvoiceServices.updateInvoiceIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product updated succesfully',
    data: result,
  });
});

export const InvoiceControllers = {
  createInvoice,
  getAllInvoice,
  getSingleInvoice,
  updateInvoice,
};
