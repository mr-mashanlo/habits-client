import { kyInstance } from '@/shared/libs';
import { type HabitSearchParams } from '@/shared/types';

import { type Habit, type HabitDTO, type PaginatedHabit } from '../model/schema';

class HabitService {

  fetch = async ( params?: HabitSearchParams ): Promise<PaginatedHabit> => {
    const searchParams = new URLSearchParams( params );
    const response = await kyInstance( `habit?${searchParams}` );
    return await response.json();
  };

  create = async ( data: HabitDTO ): Promise<Habit> => {
    const response = await kyInstance( 'habit', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

  upgradeMany = async ( data: { data: Array<HabitDTO> } ): Promise<Habit> => {
    const response = await kyInstance( 'habit/many', { method: 'post', body: JSON.stringify( data ) } );
    return await response.json();
  };

}

export const habitService = new HabitService();