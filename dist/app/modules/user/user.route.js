"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
// import auth from '../../middlewares/auth';
// import validateRequest from '../../middlewares/validateRequest';
// import { upload } from '../../utils/sendImageToCloudinary';
// import { createAdminValidationSchema } from '../Admin/admin.validation';
// import { createFacultyValidationSchema } from '../Faculty/faculty.validation';
// import { createStudentValidationSchema } from '../student/student.validation';
// import { USER_ROLE } from './user.constant';
// import { UserControllers } from './user.controller';
// import { UserValidation } from './user.validation';
const router = express_1.default.Router();
router.get('/', user_controller_1.UserControllers.getAllUser);
router.get('/:id', user_controller_1.UserControllers.getSingleUser);
router.patch('/:id', user_controller_1.UserControllers.updateUser);
// router.get('/me', auth('student', 'faculty', 'admin'), UserControllers.getMe);
exports.UserRoutes = router;
