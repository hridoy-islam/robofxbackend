import express from "express";
import { AuthControllers } from "./authController";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidations } from "./auth.validation";
const router = express.Router()

router.post('/login', validateRequest(AuthValidations.loginValidationSchema), AuthControllers.login)
router.post('/create-user', AuthControllers.createUser);
router.post(
    '/forget-password',
    validateRequest(AuthValidations.forgetPasswordValidationSchema),
    AuthControllers.forgetPassword,
  );

router.post(
    '/reset',
    validateRequest(AuthValidations.forgetPasswordValidationSchema),
    AuthControllers.resetPassword,
);




export const AuthRoutes = router;