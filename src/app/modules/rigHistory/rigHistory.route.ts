import express from 'express';
import { RigHisotyControllers } from './rigHistoryController';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/pause/:rigid',
  auth('admin', 'user'),
  RigHisotyControllers.pauseRig,
);
router.post(
  '/start/:rigid',
  auth('admin', 'user'),
  RigHisotyControllers.startRig,
);

router.post(
  '/pauseall/:userid',
  auth('admin', 'user'),
  RigHisotyControllers.pauseall,
);
router.post(
  '/startall/:userid',
  auth('admin', 'user'),
  RigHisotyControllers.startall,
);

export const RigHistoryRoutes = router;
