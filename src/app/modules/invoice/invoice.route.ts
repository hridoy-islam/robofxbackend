import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { InvoiceControllers } from './invoice.controller';
import {
  createInvoiceValidationSchema,
  updateInvoiceValidationSchema,
} from './invoice.validation';
// import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', InvoiceControllers.getAllInvoice);
router.get('/:id', InvoiceControllers.getSingleInvoice);
router.post(
  '/',
  validateRequest(createInvoiceValidationSchema),
  InvoiceControllers.createInvoice,
);
router.patch(
  '/:id',
  validateRequest(updateInvoiceValidationSchema),
  InvoiceControllers.updateInvoice,
);

// router.get('/', auth('admin', 'user'), InvoiceControllers.getAllInvoice);
// router.get('/:id', auth('admin', 'user'), InvoiceControllers.getSingleInvoice);
// router.post(
//   '/',
//   auth('admin'),
//   validateRequest(createInvoiceValidationSchema),
//   InvoiceControllers.createInvoice,
// );
// router.patch(
//   '/:id',
//   auth('admin'),
//   validateRequest(updateInvoiceValidationSchema),
//   InvoiceControllers.updateInvoice,
// );

export const InvoiceRoutes = router;
