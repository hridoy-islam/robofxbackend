/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { UserControllers } from './user.controller';
import auth from '../../middlewares/auth';
import { upload } from '../../utils/multer';
// import auth from '../../middlewares/auth';

const router = express.Router();
router.get('/', auth('admin'), UserControllers.getAllUser);
router.get('/:id', auth('admin', 'user'), UserControllers.getSingleUser);

router.patch('/:id', auth('admin', 'user'), UserControllers.updateUser);
router.post(
  '/upload/:id',
  upload.single('file'),
  auth('admin'),
  UserControllers.uploadAgreement,
);

export const UserRoutes = router;
