import express from 'express';
import { RigControllers } from './rig.controller';
import validateRequest from '../../middlewares/validateRequest';
import { rigValidationSchema } from './rig.validation';

const router = express.Router();

router.get("/", RigControllers.getAllRigs)
router.get('/:id', RigControllers.getSingleRig)
router.post('/', RigControllers.createRig)
router.patch('/:id', RigControllers.updateRig)


export const RigRoutes = router

