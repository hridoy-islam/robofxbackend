/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { UserControllers } from './user.controller';
// import auth from '../../middlewares/auth';

const router = express.Router();
router.get('/',   UserControllers.getAllUser);
router.get('/:id',  UserControllers.getSingleUser);

router.patch('/:id',  UserControllers.updateUser);

export const UserRoutes = router;
