import express from 'express';
import { RigHisotyControllers } from './rigHistoryController';
import RigHistory from './rigHistory.model';

const router = express.Router();

router.post('/pause/:rigid', RigHisotyControllers.pauseRig);
router.post('/start/:rigid', RigHisotyControllers.startRig);

router.post('/pauseall/:userid', RigHisotyControllers.pauseall);
router.post('/startall/:userid', RigHisotyControllers.startall);

router.get('/test', async(req, res)=> {
    const result = await RigHistory.find()
    return res.json({result});
})

export const RigHistoryRoutes = router;
