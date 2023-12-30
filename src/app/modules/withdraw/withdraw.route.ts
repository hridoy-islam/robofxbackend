import express  from 'express';
import { WithdrawControllers } from './withdraw.controller';

const router = express.Router();

router.get('/', WithdrawControllers.getAllWithdraw)
router.get('/:id', WithdrawControllers.getSingleWithdraw)
router.post('/', WithdrawControllers.createWithdraw)
router.patch('/:id', WithdrawControllers.updateWithdraw)


export const WithdrawRoutes = router