import express  from 'express';
import { RigControllers } from './rig.controller';

const router = express.Router();


router.get('/:id', RigControllers.getSingleRig)
router.post('/', RigControllers.createRig)
router.patch('/:id', RigControllers.updateRig)


export const RigRoutes = router