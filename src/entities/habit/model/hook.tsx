import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { SearchParams } from '@/shared/types';

import { habitService } from '../api/api';
import type { Habit, HabitDTO, PaginatedHabit } from './schema';

const useHabit = ( params?: SearchParams ) => {

  const queryClient = useQueryClient();

  const habits = useQuery( {
    queryKey: [ 'habits' ],
    queryFn: async () => await habitService.fetch( params ),
    placeholderData: data => data
  } );

  const create = useMutation( {
    mutationFn: ( { data }: { data: HabitDTO } ) => habitService.create( data ),

    onMutate: async ( habit, context ) => {
      await queryClient.cancelQueries( { queryKey: [ 'habits' ] } );
      const previous = context.client.getQueryData<Array<Habit>>( [ 'habits' ] );
      queryClient.setQueryData<PaginatedHabit>( [ 'habits' ], old => ( old ? { ...old, data: [ ...old.data, { _id: '1', user: '', ...habit.data } ] } : { data: [], limit: 0, page: 0, total: 0 } ) );
      return { previous };
    },

    onSettled: ( _data, _error, _variables, _onMutateResult, context ) => {
      context.client.invalidateQueries( { queryKey: [ 'habits' ] } );
    },

    onError: ( _error, _habit, onMutateResult, context ) => {
      context.client.setQueryData( [ 'todos' ], onMutateResult?.previous );
    }
  } );

  const update = useMutation( {
    mutationFn: async ( { id, data }: { id: string, data: Partial<HabitDTO> } ) => await habitService.update( id, data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'habits' ] } )
  } );

  const remove = useMutation( {
    mutationFn: async ( { id }: { id: string } ) => await habitService.remove( id ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'habits' ] } )
  } );

  return {
    habits,
    create,
    update,
    remove
  };

};

export default useHabit;