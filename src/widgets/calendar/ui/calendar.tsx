import { ResponsiveCalendar } from '@nivo/calendar';
import moment from 'moment';
import { type FC } from 'react';

import { useProgress } from '@/entities/progress';

const Calendar: FC = () => {
  const { progress } = useProgress( { limit: '7' } );

  const data = progress?.data?.data.map( item => ( { day: moment( item.date, 'YYYYMMDD' ).format( 'YYYY-MM-DD' ) || '', value: item.habits?.length || 0 } ) ) || [];
  const from = moment( progress.data?.data[0]?.date, 'YYYYMMDD' ).format( 'YYYY-MM-DD' );
  const to = moment( progress.data?.data[progress.data?.data.length - 1]?.date, 'YYYYMMDD' ).format( 'YYYY-MM-DD' );

  return (
    <div className="h-50">
      <ResponsiveCalendar
        data={data}
        from={from}
        to={to}
        dayBorderWidth={3}
        emptyColor="#F2F2F3"
        monthBorderColor="#FFFFFF"
        dayBorderColor="#FFFFFF"
        colors={[ '#F2F2F3', '#DBEAFE', '#BEDBFF', '#8EC5FF', '#51A2FF' ]}
        margin={{ top: 20, right: 0, bottom: 0, left: 0 }}
        isInteractive={false}
        align="top"
        maxValue={4}
      />
    </div>
  );
};

export default Calendar;