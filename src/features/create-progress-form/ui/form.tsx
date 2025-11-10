import { Field, Input, Label } from '@headlessui/react';
import { type ChangeEvent, type FC } from 'react';

import type { Habit } from '@/entities/habit';
import { CheckedIcon } from '@/shared/icons';
import { debounce } from '@/shared/utils';

import useCreateProgress from '../model/hook';

interface Props {
  habits: Array<Habit>
}

const CreateProgressForm: FC<Props> = ( { habits } ) => {
  const form = useCreateProgress();

  const handleFormSubmit = ( e: ChangeEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const updateHabit = debounce( ( e: ChangeEvent<HTMLFormElement> ) => handleFormSubmit( e ), 500 );

  const handleFormChange = ( e: ChangeEvent<HTMLFormElement> ) => {
    const { checked: completed, value: habit } = e.target;
    const cacheHabits = form.getFieldValue( 'habits' );
    const updatedHabits = completed ? [ ...cacheHabits, { completed, habit } ] : cacheHabits.filter( item => item.habit !== habit );
    form.setFieldValue( 'total', habits.length );
    form.setFieldValue( 'habits', updatedHabits );
    updateHabit( e );
  };

  return (
    <form onSubmit={handleFormSubmit} onChange={handleFormChange} className="grid gap-2">
      <form.Field name="habits" children={field =>
        habits.map( habit =>
          <Field key={habit._id} className="group flex items-center">
            <Label className="py-2.5 flex items-center gap-4 cursor-pointer">
              <Input type="checkbox" name={field.name} checked={field.state.value.some( item => item.habit === habit._id )} value={habit._id} className="peer sr-only" readOnly />
              <CheckedIcon className="w-7 h-7 flex items-center justify-center bg-zinc-200/50 fill-zinc-300 rounded-full peer-checked:bg-blue-400/10 peer-checked:fill-blue-400"/>
              <span>{habit.title}</span>
            </Label>
          </Field>
        )
      }
      />
    </form>
  );
};

export default CreateProgressForm;