import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { Rig } from '../rig/rig.model';
import RigHistory from './rigHistory.model';
import moment from 'moment';

const pauseRigToDB = async (rigid: string) => {
  try {
    const rig = await Rig.findById(rigid);
    if (!rig) {
      throw new AppError(httpStatus.NOT_FOUND, 'Rig not found');
    }

    const rigStatusUpdate = await Rig.findByIdAndUpdate(rigid, {
      status: 'pause',
    });

    if (!rigStatusUpdate) {
      throw new AppError(httpStatus.NOT_FOUND, 'Rig not found');
    }

    const pauseTime = moment().unix();
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

    const rigStatusUpdate = await Rig.findByIdAndUpdate(rigid, {
      status: 'mining',
    });

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

    historyEntry.startTime = moment().unix();
    historyEntry.duration = moment(historyEntry.startTime).diff(
      historyEntry.pauseTime,
    );
    await historyEntry.save();

    return historyEntry;
  } catch (error) {
    throw new AppError(httpStatus.NOT_FOUND, 'Rig not found');
  }
};

const pauseallrigs = async (userid: string) => {
  try {
    const pauseTime = moment().unix();
    const rigs = await Rig.find({ userid });

    const updateStatus = await Rig.updateMany({ userid }, { status: 'pause' });

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
    const startTime = moment().unix();
    const rigs = await Rig.find({ userid });

    const updateStatus = await Rig.updateMany({ userid }, { status: 'mining' });

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
          historyEntry.duration = moment(historyEntry.startTime).diff(
            historyEntry.pauseTime,
          );

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
  pauseallrigs,
  startallrigs,
};
