import httpStatus from 'http-status';
import QueryBuilder from '../../builder/QueryBuilder';
import AppError from '../../errors/AppError';
import { TRig } from './rig.interface';
import { Rig } from './rig.model';

const getAllRigsFromDB = async (query: Record<string, unknown>) => {
  const rigQuery = new QueryBuilder(Rig.find().populate('userid'), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await rigQuery.countTotal();
  const result = await rigQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const createRigIntoDB = async (payload: TRig) => {
  // const result = await Rig.create(payload);
  // return result;

  const {
    userid,
    rigName,
    gpu,
    temp,
    fan,
    load,
    power,
    efficiency,
    proficiency,
    quantity,
  } = payload;

  const generateRigName = (index: number) =>
    `${rigName}${index.toString().padStart(3, '0')}`;

  try {
    for (let i = 1; i <= quantity; i++) {
      const rig = new Rig({
        userid,
        rigName: generateRigName(i),
        gpu,
        temp,
        fan,
        load,
        power,
        efficiency,
        proficiency,
      });

      await rig.save();
    }

    const result = await Rig.find({ userid }).sort('-createdAt');

    return result;
  } catch (error) {
    throw new AppError(httpStatus.NOT_FOUND, 'Something Went Wrong!');
  }
};

const getSingleRigFromDB = async (id: string) => {
  const result = await Rig.findById(id);

  return result;
};

const updateRigIntoDB = async (id: string, payload: Partial<TRig>) => {
  const result = await Rig.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const RigServices = {
  createRigIntoDB,
  getSingleRigFromDB,
  updateRigIntoDB,
  getAllRigsFromDB,
};
