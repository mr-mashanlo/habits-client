import moment from 'moment';
import { useEffect } from 'react';

import { useTodayHabit } from '@/entities/habit';
import { useProgress, useTodayProgress } from '@/entities/progress';

const useUpdateProgressTotal = () => {
  const { data: habit, isPending: isHabitPending } = useTodayHabit();
  const { data: progress, isPending: isProgressPending } = useTodayProgress();
  const { create: updateProgress } = useProgress();

  useEffect( () => {
    if ( isHabitPending || isProgressPending ) return;
    if ( !habit || !progress ) return;
    if ( habit.total === progress.total ) return;

    const date = moment().format( 'YYYYMMDD' );
    updateProgress.mutate( { data: { date, total: habit.total } } );
  }, [ habit, progress, isHabitPending, isProgressPending, updateProgress ] );

};

export default useUpdateProgressTotal;