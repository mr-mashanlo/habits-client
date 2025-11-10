import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { SearchParams } from '@/shared/types';

import { progressService } from '../api/api';
import type { ProgressDTO } from './schema';

const useProgress = ( params?: SearchParams ) => {

  const queryClient = useQueryClient();

  const progress = useQuery( {
    queryKey: [ 'progress' ],
    queryFn: async () => await progressService.fetch( params ),
    placeholderData: data => data
  } );

  const create = useMutation( {
    mutationFn: async ( { data }: { data: Partial<ProgressDTO> } ) => await progressService.create( data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'progress' ] } )
  } );

  const update = useMutation( {
    mutationFn: async ( { id, data }: { id: string, data: Partial<ProgressDTO> } ) => await progressService.update( id, data ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'progress' ] } )
  } );

  const remove = useMutation( {
    mutationFn: async ( { id }: { id: string } ) => await progressService.remove( id ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'progress' ] } )
  } );

  return {
    progress,
    create,
    update,
    remove
  };

};

export default useProgress;