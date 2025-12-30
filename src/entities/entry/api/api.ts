import { kyInstance } from '@/shared/libs';
import { type EntrySearchParams } from '@/shared/types';

import { type Entry, type EntryDTO, type PaginatedEntry } from '../model/schema';

class EntryService {

  fetch = async ( params: EntrySearchParams ): Promise<PaginatedEntry> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `entry?${searchParams}` );
    return await response.json();
  };

  upgradeMany = async ( data: { data: Array<EntryDTO>} ): Promise<Entry> => {
    const response = await kyInstance( 'entry/many', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

}

export const entryService = new EntryService();