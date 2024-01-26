import express from 'express';
import { RigControllers } from './rig.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import {
  rigValidationSchema,
  updateRigValidationSchema,
} from './rig.validation';

const router = express.Router();

router.get('/', auth('user', 'admin'), RigControllers.getAllRigs);
router.get('/:id', auth('user', 'admin'), RigControllers.getSingleRig);
router.post(
  '/',
  auth('admin'),
  validateRequest(rigValidationSchema),
  RigControllers.createRig,
);
router.patch(
  '/:id',
  auth('admin'),
  validateRequest(updateRigValidationSchema),
  RigControllers.updateRig,
);

export const RigRoutes = router;
