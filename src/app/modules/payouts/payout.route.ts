import express from 'express';
import auth from '../../middlewares/auth';

import { PayoutController } from './payout.controller';

const router = express.Router();

router.get('/', auth('user', 'admin'), PayoutController.getAllPayouts);

export const PayoutRoutes = router;
