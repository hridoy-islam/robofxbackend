import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { settingsValidationSchema } from './settings.validation';
import { SettingsControllers } from './settings.controller';

const router = express.Router();

router.get('/', SettingsControllers.getSettings);
// router.post(
//   '/',
//   validateRequest(settingsValidationSchema),
//   SettingsControllers.createSettings,
// );

router.patch(
  '/:id',
  validateRequest(settingsValidationSchema),
  SettingsControllers.updateSettings,
);

export const SettingsRoutes = router;
