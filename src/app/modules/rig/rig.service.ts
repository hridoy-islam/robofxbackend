import QueryBuilder from '../../builder/QueryBuilder';
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
  const result = await Rig.create(payload);
  return result;
};

const getSingleRigFromDB = async (id: string) => {
  const result = await Rig.findById(id);

  return result;
};

const updateRigIntoDB = async (id: string, payload: Partial<TRig>) => {
  const result = await Rig.findByIdAndUpdate(id, payload);
  return result;
};

export const RigServices = {
  createRigIntoDB,
  getSingleRigFromDB,
  updateRigIntoDB,
  getAllRigsFromDB,
};
