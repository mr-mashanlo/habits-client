import { useMutation, useQueryClient } from '@tanstack/react-query';

import { habitService } from '../api/api';
import { type HabitDTO } from './schema';

const useCreateHabit = () => {

  const queryClient = useQueryClient();

  const create = useMutation( {
    mutationFn: ( { data }: { data: HabitDTO } ) => habitService.create( data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'habits' ] } )
  } );

  return { create };

};

export default useCreateHabit;