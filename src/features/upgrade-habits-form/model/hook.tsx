import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { type Entry, useUpgradeManyEntries } from '@/entities/entry';
import { type Habit, useUpgradeManyHabit } from '@/entities/habit';
import { mapServerErrors } from '@/shared/mappers';

const useUpgradeHabits = ( habits: Array<{ habit: Habit, entry: Entry }> ) => {
  const { upgrade: upgradeHabits } = useUpgradeManyHabit();
  const { upgrade: upgradeEntries } = useUpgradeManyEntries();

  const form = useForm( {
    defaultValues: { habits },

    onSubmit: async ( { value, formApi } ) => {
      try {
        const habitDTO = value.habits.map( item => ( { _id: item.habit._id, title: item.habit.title } ) );
        const entryDTO = value.habits.map( item => ( { _id: item.entry._id, habit: item.entry.habit, date: item.entry.date, done: item.entry.done } ) );
        await upgradeEntries.mutate( { data: entryDTO } );
        await upgradeHabits.mutate( { data: habitDTO } );
      } catch ( error ) {
        if ( error instanceof HTTPError ) {
          const errors = await error.response.json();
          formApi.setErrorMap( { onChange: { fields: mapServerErrors( errors.issues ) } } );
        }
      }
    }
  } );

  return form;
};

export default useUpgradeHabits;