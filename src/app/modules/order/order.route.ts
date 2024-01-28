import express from 'express';
import { OrderControllers } from './order.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createOrderValidationSchema } from './order.validation';
import auth from '../../middlewares/auth';
// import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', auth('admin', 'user'), OrderControllers.getAllOrder);
router.get('/:id', auth('admin', 'user'), OrderControllers.getSingleOrder);
router.post(
  '/',
  auth('admin', 'user'),
  validateRequest(createOrderValidationSchema),
  OrderControllers.createOrder,
);
router.patch('/:id', auth('admin'), OrderControllers.updateOrder);

export const OrderRoutes = router;
