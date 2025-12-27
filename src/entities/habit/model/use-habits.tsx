import { useQuery } from '@tanstack/react-query';

import { type HabitSearchParams } from '@/shared/types';

import { habitService } from '../api/api';

const useHabits = ( params?: HabitSearchParams ) => {

  const habits = useQuery( {
    queryKey: [ 'habits' ],
    queryFn: () => habitService.fetch( params ),
    placeholderData: data => data
  } );

  return { habits };

};

export default useHabits;