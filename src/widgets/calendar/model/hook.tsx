import moment from 'moment';
import { useEffect, useState } from 'react';

import type { Progress } from '@/entities/progress';

const useChart = ( progress: Array<Progress>, length: number ) => {
  const [ charts, setCharts ] = useState<Array<Partial<Progress>>>( [] );

  useEffect( () => {
    if ( !progress ) return;

    const recent = Array.from( { length }, ( _, i ) => {
      const date = moment().subtract( i, 'days' ).format( 'YYYYMMDD' );
      const found = progress.find( item => item.date === date );
      return found || { date, weight: 0 };
    } );

    setCharts( recent.reverse() );
  }, [ progress, length ] );

  return { charts };
};

export default useChart;