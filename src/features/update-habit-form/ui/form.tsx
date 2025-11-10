import { Description, Field, Fieldset, Input, Label } from '@headlessui/react';
import { type ChangeEvent, type FC } from 'react';
import z from 'zod';

import type { Habit } from '@/entities/habit';
import { debounce } from '@/shared/utils/debounce';

import { week } from '../model/config';
import useUpdateHabit from '../model/hook';

interface Props {
  habit: Habit
}

const UpdateHabitForm: FC<Props> = ( { habit } ) => {
  const form = useUpdateHabit( habit );

  const handleFormSubmit = ( e: ChangeEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const updateHabit = debounce( ( e: ChangeEvent<HTMLFormElement> ) => handleFormSubmit( e ), 1000 );

  const handleFormChange = ( e: ChangeEvent<HTMLFormElement> ) => {
    const { checked: completed, value: day } = e.target;
    const cacheDays = form.getFieldValue( 'days' );
    const updatedDays = completed ? [ ...cacheDays, day ] : cacheDays.filter( item => item !== day );
    form.setFieldValue( 'days', updatedDays ) ;
    updateHabit( e );
  };

  return (
    <form onSubmit={handleFormSubmit} onChange={handleFormChange} className="w-full grid grid-cols-5 gap-2 items-center">
      <form.Field name="title" validators={{ onChange: z.string().min( 3, 'Must be at least 3 characters long' ) }} children={field =>
        <Field className="col-span-3 line-clamp-1 relative">
          <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} className="w-full outline-none" />
          {!field.state.meta.isValid && <Description className="text-rose-500 absolute top-0 right-0">{field.state.meta.errors.map( error => error?.message ).join( ', ' )}</Description>}
        </Field>}
      />
      <form.Field name="days" children={field =>
        <Fieldset className="grid grid-cols-7 col-span-2">
          {week.map( day =>
            <Field key={day.number}>
              <Input type="checkbox" name={field.name} checked={field.state.value.includes( day.number )} value={day.number} className="peer sr-only" readOnly />
              <Label className="flex items-center justify-center cursor-pointer text-zinc-300 peer-checked:text-black peer-focus-visible:outline-2 peer-focus-visible:outline-black">{day.name}</Label>
            </Field>
          )}
        </Fieldset>
      }
      />
    </form>
  );
};

export default UpdateHabitForm;