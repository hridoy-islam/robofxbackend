/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { UserControllers } from './user.controller';
// import { upload } from '../../utils/multer';
// import auth from '../../middlewares/auth';

const router = express.Router();
router.get('/', UserControllers.getAllUser);
router.get('/:id', UserControllers.getSingleUser);

router.patch('/:id', UserControllers.updateUser);
// router.patch(
//   '/:id/agreement',
//   upload.single('agreement'),
//   UserControllers.uploadAgreement,
// );

export const UserRoutes = router;
