import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { settingsValidationSchema } from './settings.validation';
import { SettingsControllers } from './settings.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.get('/', SettingsControllers.getSettings);
// router.post(
//   '/',
//   validateRequest(settingsValidationSchema),
//   SettingsControllers.createSettings,
// );

router.patch(
  '/:id',
  auth('admin'),
  validateRequest(settingsValidationSchema),
  SettingsControllers.updateSettings,
);

export const SettingsRoutes = router;
