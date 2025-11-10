import { type FC } from 'react';
import { twMerge } from 'tailwind-merge';

import { type Habit } from '@/entities/habit';
import { DeleteHabitButton } from '@/features/delete-habit-button';
import { UpdateHabitForm } from '@/features/update-habit-form';
import { CancelIcon } from '@/shared/icons';

interface Props {
  habits: Array<Habit>
}

const Table: FC<Props> = ( { habits } ) => {
  return (
    <ul className="grid gap-2">
      {habits.map( habit =>
        <li key={habit._id} className={twMerge( 'group py-2.5 flex items-center gap-4', habit.user === 'temporary' ? 'animate-pulse' : '' )}>
          <DeleteHabitButton id={habit._id} className="w-7 h-7 flex items-center justify-center bg-zinc-200/50 fill-zinc-300 rounded-full cursor-pointer hover:bg-red-400/10 hover:fill-red-400">
            <CancelIcon className="w-7 h-7" />
          </DeleteHabitButton>
          <UpdateHabitForm habit={habit} />
        </li>
      )}
    </ul>
  );
};

export default Table;