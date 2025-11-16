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

    const element = e.target.closest( 'form' );
    const formdata = new FormData( element || undefined );
    const data = Object.fromEntries( formdata.entries() );
    const array = Object.values( data ) as Array<string>;
    form.setFieldValue( 'habits', array );

    form.handleSubmit();
  };

  const updateHabit = debounce( ( e: ChangeEvent<HTMLFormElement> ) => handleFormSubmit( e ), 500 );

  const handleFormChange = ( e: ChangeEvent<HTMLFormElement> ) => { updateHabit( e ); };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCheckboxChange = ( field: any, habitId: string ) => ( e: ChangeEvent<HTMLInputElement> ) => {
    const checked = e.target.checked;
    const value = field.state.value;

    if ( checked ) {
      field.setValue( [ ...value, habitId ] );
    } else {
      field.setValue( value.filter( ( item: string ) => item !== habitId ) );
    }
  };

  return (
    <form onSubmit={handleFormSubmit} onChange={handleFormChange} className="grid gap-2">
      <form.Field name="habits" children={field =>
        habits.map( habit =>
          <Field key={habit._id} className="group flex items-center">
            <Label className="py-2.5 flex items-center gap-4 cursor-pointer">
              <Input type="checkbox" name={`habit-${habit._id}`} value={habit._id} checked={field.state.value.some( item => item === habit._id )} onChange={handleCheckboxChange( field, habit._id )} className="peer sr-only" />
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