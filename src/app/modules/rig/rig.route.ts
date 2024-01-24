import express from 'express';
import { RigControllers } from './rig.controller';

const router = express.Router();

router.get('/', RigControllers.getAllRigs);
router.get('/:id', RigControllers.getSingleRig);
router.post('/', RigControllers.createRig);
router.patch('/:id', RigControllers.updateRig);

export const RigRoutes = router;

/*
duration - 1 hours

route - /userid/rigs_pause
      - /userid/rigs_start

schema 
history:
[
    {
        rigid,
        userid,
        pausetime,
        starttime,
        duration,
        timestamp: true
    }
]

*/
