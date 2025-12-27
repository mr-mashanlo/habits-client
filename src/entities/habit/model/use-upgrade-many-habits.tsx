import { useMutation, useQueryClient } from '@tanstack/react-query';

import { habitService } from '../api/api';
import { type HabitDTO } from './schema';

const useUpgradeManyHabit = () => {

  const queryClient = useQueryClient();

  const upgrade = useMutation( {
    mutationFn: ( { data }: { data: Array<HabitDTO> } ) => habitService.upgradeMany( { data } ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'habits' ] } )
  } );

  return { upgrade };

};

export default useUpgradeManyHabit;