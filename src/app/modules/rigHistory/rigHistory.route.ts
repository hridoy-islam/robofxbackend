import express from 'express';
import { RigHisotyControllers } from './rigHistoryController';

const router = express.Router();

router.post('/pause/:rigid', RigHisotyControllers.pauseRig);
router.post('/start/:rigid', RigHisotyControllers.startRig);
router.get('/duration/:userid', RigHisotyControllers.getDurationForDay);

router.post('/pauseall/:userid', RigHisotyControllers.pauseall);
router.post('/startall/:userid', RigHisotyControllers.startall);

export const RigHistoryRoutes = router;
