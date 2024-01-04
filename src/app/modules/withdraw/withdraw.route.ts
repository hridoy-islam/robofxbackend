import express  from 'express';
import { WithdrawControllers } from './withdraw.controller';
import validateRequest from '../../middlewares/validateRequest';
import { withdrawValidationSchema } from './withdraw.validation';

const router = express.Router();

router.get('/', WithdrawControllers.getAllWithdraw)
router.get('/:id', WithdrawControllers.getSingleWithdraw)
router.post('/', validateRequest(withdrawValidationSchema), WithdrawControllers.createWithdraw)
router.patch('/:id', WithdrawControllers.updateWithdraw)


export const WithdrawRoutes = router