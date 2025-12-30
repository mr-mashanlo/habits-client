import moment from 'moment';

interface Habit {
  _id: string,
  user: string,
  title: string,
  archived: boolean,
  created: number,
  startDate: number,
  endDate?: number
};

interface Entry {
  _id: string,
  user: string,
  habit: string,
  date: string,
  done: boolean,
  archived: boolean
};

interface Weekdays {
  [key: number]: {
    date: string
    humanDate: string
    data: Array<{ habit: Habit, entry: Entry }>
  }
}

export const mapCurrentWeekdays = ( habits: Array<Habit>, entries: Array<Entry> ): Weekdays => {
  const array = Array.from( { length: 7 } );
  const startOfWeek = moment().startOf( 'week' );

  return array.reduce( ( acc: Weekdays, _item, index ) => {
    const currentDay = moment( startOfWeek ).add( index, 'day' );
    const date = currentDay.format( 'YYYYMMDD' );
    const humanDate = currentDay.format( 'MMMM D' );
    const data = habits?.map( habit => ( { habit, entry: entries?.find( entry => entry.habit === habit._id && entry.date === date ) || { _id: '', user: '', habit: habit._id, date, done: false, archived: false } } ) );
    acc[index] = { date, humanDate, data };
    return acc;
  }, {} );
};