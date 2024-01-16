/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import auth from '../../middlewares/auth';

const router = express.Router();
router.get('/', auth('user', 'admin'), UserControllers.getAllUser);
router.get('/:id', auth('user', 'admin'), UserControllers.getSingleUser);

router.patch('/:id', auth('user', 'admin'), UserControllers.updateUser);

export const UserRoutes = router;
