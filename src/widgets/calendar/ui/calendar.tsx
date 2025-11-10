import { type FC } from 'react';

import { useProgress } from '@/entities/progress';
import { useUpdateProgressTotal } from '@/features/update-progress';

import Chart from './chart';
import Skeleton from './skeleton';

const Calendar: FC = () => {
  const { progress } = useProgress( { limit: '30' } );
  useUpdateProgressTotal();

  return progress.isPending ? <Skeleton length={30} /> : <Chart progress={progress.data?.data || []} length={30} />;
};

export default Calendar;