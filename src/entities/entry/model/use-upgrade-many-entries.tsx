import { useMutation, useQueryClient } from '@tanstack/react-query';

import { entryService } from '../api/api';
import { type EntryDTO } from './schema';

const useUpgradeManyEntries = () => {

  const queryClient = useQueryClient();

  const upgrade = useMutation( {
    mutationFn: ( { data }: { data: Array<EntryDTO> } ) => entryService.upgradeMany( { data } ),
    onSuccess: () => queryClient.invalidateQueries( { queryKey: [ 'entries' ] } )
  } );

  return { upgrade };

};

export default useUpgradeManyEntries;