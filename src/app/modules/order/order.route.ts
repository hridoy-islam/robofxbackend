import express  from 'express';
import { OrderControllers } from './order.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createOrderValidationSchema } from './order.validation';

const router = express.Router();

router.get('/', OrderControllers.getAllOrder)
router.get('/:id', OrderControllers.getSingleOrder)
router.post('/', validateRequest(createOrderValidationSchema), OrderControllers.createOrder)
router.patch('/:id', OrderControllers.updateOrder)
router.delete('/:id', OrderControllers.deleteOrder)


export const OrderRoutes = router