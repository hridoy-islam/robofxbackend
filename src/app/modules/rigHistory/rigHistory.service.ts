import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Rig } from '../rig/rig.model';
import RigHistory from './rigHistory.model';
import moment from 'moment'
import mongoose from 'mongoose';

const pauseRigToDB = async (rigid: string) => {
  try {
    const rig = await Rig.findById(rigid);
    if (!rig) {
      throw new AppError(httpStatus.NOT_FOUND, 'Rig not found');
    }

    const rigStatusUpdate = await Rig.findByIdAndUpdate(rigid, { status: 'pause' })

    if (!rigStatusUpdate) {
      throw new AppError(httpStatus.NOT_FOUND, 'Rig not found');
    }

    const pauseTime = new Date();
    const historyEntry = await RigHistory.create({
      rigid: rig._id,
      userid: rig.userid,
      pauseTime,
    });
    return historyEntry;
  } catch (error) {
    throw new AppError(httpStatus.NOT_FOUND, 'Rig not found');
  }
};

const startRigIntoDB = async (rigid: string) => {
  try {
    const rig = await Rig.findById(rigid);
    if (!rig) {
      throw new AppError(httpStatus.NOT_FOUND, 'Rig not found');
    }

    const rigStatusUpdate = await Rig.findByIdAndUpdate(rigid, { status: 'mining' })

    if (!rigStatusUpdate) {
      throw new AppError(httpStatus.NOT_FOUND, 'Rig status update not found');
    }

    const historyEntry = await RigHistory.findOne({
      rigid: rig._id,
      startTime: { $exists: false },
    });
    if (!historyEntry) {
      throw new AppError(httpStatus.NOT_FOUND, 'Rig is not paused');
    }

    historyEntry.startTime = new Date();
    historyEntry.duration =
      (historyEntry.startTime.getTime() - historyEntry.pauseTime.getTime()) /
      1000;
    await historyEntry.save();

    return historyEntry;
  } catch (error) {
    throw new AppError(httpStatus.NOT_FOUND, 'Rig not found');
  }
};

const rigDurationFromDB = async (userid: string) => {
  const startToday = moment().startOf('day').toDate()
  const endToday = moment(startToday).endOf('day').toDate()

  const d =  await RigHistory.aggregate([{ $match: { userid, startTime : {$exists: true}}}]).
  exec();

  

  return d;

  // try {
  //   const rigs = await Rig.find({userid}).select('rigid');
  //   console.log(rigs);
  //   const totalDuration = (await RigHistory.find({userid, createdAt: { $gte: startToday, $lte: endToday },}).select('duration'));
  //   // Using reduce to calculate the total amount spent
  //   const totalAmount = totalDuration?.reduce((accumulator, totalDuration) => {
  //     return accumulator + totalDuration?.duration;
  //   }, 0);

  //   return  totalAmount;
  // } catch (error) {
  //   throw new AppError(httpStatus.NOT_FOUND, 'Rig not found');
  // }
};

const pauseallrigs = async (userid: string) => {
  try {
    const pauseTime = new Date();
    const rigs = await Rig.find({ userid });

    const updateStatus = await Rig.updateMany({ userid }, { status: 'pause' })

    if (!updateStatus) {
      throw new AppError(httpStatus.NOT_FOUND, 'Rig update Status issue');
    }

    const historyEntries = await Promise.all(
      rigs.map(async (rig) => {
        return await RigHistory.create({
          rigid: rig._id,
          userid: rig.userid,
          pauseTime,
        });
      }),
    );

    return historyEntries;
  } catch (error) {
    throw new AppError(httpStatus.NOT_FOUND, 'Rig not found');
  }
};

const startallrigs = async (userid: string) => {
  try {
    const startTime = new Date();
    const rigs = await Rig.find({ userid });

    const updateStatus = await Rig.updateMany({ userid }, { status: 'mining' })

    if (!updateStatus) {
      throw new AppError(httpStatus.NOT_FOUND, 'Rig update Status issue');
    }

    const historyEntries = await Promise.all(
      rigs.map(async (rig) => {
        const historyEntry = await RigHistory.findOne({
          rigid: rig._id,
          startTime: { $exists: false },
        });
        if (historyEntry) {
          historyEntry.startTime = startTime;
          historyEntry.duration = (historyEntry.startTime.getTime() - historyEntry.pauseTime.getTime()) /
            1000;
          await historyEntry.save();
        }
        return historyEntry;
      }),
    );

    return historyEntries;
  } catch (error) {
    throw new AppError(httpStatus.NOT_FOUND, 'Rig not found');
  }
};

export const RigHistoryServices = {
  pauseRigToDB,
  startRigIntoDB,
  rigDurationFromDB,
  pauseallrigs,
  startallrigs,
};
