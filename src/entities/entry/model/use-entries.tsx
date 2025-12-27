import { useQuery } from '@tanstack/react-query';

import { type EntrySearchParams } from '@/shared/types';

import { entryService } from '../api/api';

const useEntries = ( params: EntrySearchParams ) => {

  const entries = useQuery( {
    queryKey: [ 'entries' ],
    queryFn: async () => await entryService.fetch( params ),
    placeholderData: data => data
  } );

  return { entries };

};

export default useEntries;