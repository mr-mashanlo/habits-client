import { type FC } from 'react';

import { useHabit } from '@/entities/habit';

import Skeleton from './skeleton';
import Table from './table';

const Habits: FC = () => {
  const { habits } = useHabit();

  return habits.isPending ? <Skeleton /> : <Table habits={habits.data?.data || []} />;
};

export default Habits;