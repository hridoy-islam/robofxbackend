import QueryBuilder from '../../builder/QueryBuilder';
import { Payout } from './payout.model';

const getAllPayoutsFromDB = async (query: Record<string, unknown>) => {
  const payoutQuery = new QueryBuilder(
    Payout.find().populate('rigid', 'rigName'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await payoutQuery.countTotal();
  const result = await payoutQuery.modelQuery;

  return {
    meta,
    result,
  };
};

export const PayoutServices = {
  getAllPayoutsFromDB,
};
