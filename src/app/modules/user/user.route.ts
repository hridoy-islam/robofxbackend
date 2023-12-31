/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
// import auth from '../../middlewares/auth';
// import validateRequest from '../../middlewares/validateRequest';
// import { upload } from '../../utils/sendImageToCloudinary';
// import { createAdminValidationSchema } from '../Admin/admin.validation';
// import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
// import { createStudentValidationSchema } from '../student/student.validation';
// import { USER_ROLE } from './user.constant';
// import { UserControllers } from './user.controller';
// import { UserValidation } from './user.validation';

const router = express.Router();
router.get('/', UserControllers.getAllUser)
router.get('/:id', UserControllers.getSingleUser)

router.patch('/:id', UserControllers.updateUser)

// router.get('/me', auth('student', 'faculty', 'admin'), UserControllers.getMe);

export const UserRoutes = router;
