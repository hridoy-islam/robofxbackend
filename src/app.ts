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
import mongoose from 'mongoose';
import AppError from './app/errors/AppError';
import httpStatus from 'http-status';
import { Payout } from './app/modules/payouts/payout.model';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     credentials: true,
//   }),
// );

app.use(
  cors({
    origin: 'https://mining.robofxtrader.com',
    credentials: true,
  }),
);

// application routes
app.use('/api', router);

const test = async (req: Request, res: Response) => {
  return res.json({ message: 'working nicely' });
};

app.get('/', test);

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

// corn in 2 min
cron.schedule('*/2 * * * *', async () => {
  const startToday = moment().startOf('day').toDate();
  const endToday = moment(startToday).endOf('day').toDate();

  const aggregatedData = await RigHistory.aggregate([
    {
      $match: {
        startTime: { $gte: startToday, $lte: endToday },
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
        rigid: '$_id.rigid',
        userid: '$_id.userid',
        totalDuration: 1,
      },
    },
  ]);

  aggregatedData.forEach(async (rigData) => {
    const rigid = rigData.rigid;
    const totalInactiveTime = rigData.totalDuration;
    const userid = rigData.userid;

    const user = await User.findById(userid, { status: 'active' })
      .select('profit')
      .select('balance')
      .select('grossBalance');

    const userProfit = Number(user?.profit);
    const profitInSec = userProfit / 86400;

    // Update rig efficiency based on the total duration
    const totalActiveTime = 86400 - totalInactiveTime / 1000;
    const profit = totalActiveTime * profitInSec;

    // const rigdb = await Rig.updateOne(
    //   { _id: new mongoose.Types.ObjectId(rigid) },
    //   { $inc: { efficiency: efficiencyIncrement } },
    // );

    // Update any other necessary data

    const userBalance = Number(user?.balance) + profit || 0;
    const userGrossBalance = Number(user?.grossBalance) + profit || 0;

    const userData = await User.findByIdAndUpdate(
      { _id: new mongoose.Types.ObjectId(userid), status: 'active' },
      {
        balance: userBalance,
        grossBalance: userGrossBalance,
      },
    );

    // const userdb = await User.updateOne(
    //   { _id: new mongoose.Types.ObjectId(userid), status: 'active' },
    //   {
    //     $inc: {
    //       balance: profit,
    //       grossBalance: profit,
    //     },
    //   },
    // );
    const payoutsData = {
      rigid,
      userid,
      amount: profit,
    };
    await Payout.create(payoutsData);
  });
});

export default app;
