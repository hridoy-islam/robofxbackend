import express  from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.get('/', OrderControllers.getAllOrder)
router.get('/:id', OrderControllers.getSingleOrder)
router.post('/', OrderControllers.createOrder)
router.patch('/:id', OrderControllers.updateOrder)
router.delete('/:id', OrderControllers.deleteOrder)


export const OrderRoutes = router