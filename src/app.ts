/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
import cron from 'node-cron';
import moment from 'moment';
import RigHistory from './app/modules/rigHistory/rigHistory.model';
import { Rig } from './app/modules/rig/rig.model';
import { User } from './app/modules/user/user.model';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());

app.use(cors());

// application routes
app.use('/api', router);

const test = async (req: Request, res: Response) => {
  return res.json({ message: 'working nicely' });
};

app.get('/', test);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

// cron.schedule('0 0 * * *', async () => {

// }

cron.schedule('3 * * * * *', async () => {
  console.log('Running a job at every ten second');
  const startToday = moment().startOf('day').toDate();
  const endToday = moment(startToday).endOf('day').toDate();

  const aggregatedData = await RigHistory.aggregate([
    {
      $match: {
        createdAt: { $gte: startToday, $lte: endToday },
      },
    },
    {
      $group: {
        _id: {
          rigid: '$rigid',
          userid: '$userid',
        },
        totalDuration: { $sum: '$duration' },
      },
    },
    {
      $project: {
        _id: 0, // Exclude the default _id field
        rigId: '$_id.rigid',
        userid: '$_id.userid',
        totalDuration: 1,
      },
    },
  ]);

  aggregatedData.forEach(async (rigData) => {
    const rigId = rigData._id;
    const totalInactiveTime = rigData.totalDuration;
    const userId = rigData.userid;

    // Update rig efficiency based on the total duration
    const totalActiveTime = 24 * 60 * 60 - totalInactiveTime;
    const efficiencyIncrement = totalActiveTime * 0.00008;
    const profit = totalActiveTime * 1.47;

    await Rig.updateOne(
      { _id: rigId },
      { $inc: { efficiency: efficiencyIncrement } },
    );
    // Update any other necessary data

    await User.updateOne(
      { _id: userId, status: 'active' },
      {
        $inc: {
          balance: profit,
          grossBalance: profit,
        },
      },
    );
  });
});

export default app;
