import { Field, Fieldset, Input, Label } from '@headlessui/react';
import { type ChangeEvent, type DetailedHTMLProps, type FC, type FocusEvent, type FormHTMLAttributes } from 'react';

import { type Entry } from '@/entities/entry';
import { type Habit } from '@/entities/habit';
import { CheckedIcon, SquareIcon } from '@/shared/icons';
import { debounce } from '@/shared/utils';

import useUpgradeHabits from '../model/hook';

interface Props extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
  habits: Array<{ habit: Habit, entry: Entry }>
}

const UpgradeHabitsForm: FC<Props> = ( { habits, ...others } ) => {
  const form = useUpgradeHabits( habits );

  const throtleFormSubmit = debounce( () => form.handleSubmit(), 1000 );

  const handleFormChange = ( e: ChangeEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    throtleFormSubmit();
  };

  const handleCheckboxChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    const id = e.target.value;
    const habit = e.target.getAttribute( 'data-habit' );
    const habits = form.getFieldValue( 'habits' );
    const updatedHabits = habits.map( item => ( { ...item, entry: ( item.entry._id || item.entry.habit ) === ( id || habit ) ? { ...item.entry, done: e.target.checked } : item.entry } ) );
    form.setFieldValue( 'habits', updatedHabits );
  };

  const handleCheckboxBlur = ( e: FocusEvent<HTMLInputElement> ) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleInputChange = ( e: ChangeEvent<HTMLInputElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    const id = e.target.getAttribute( 'data-id' );
    const habits = form.getFieldValue( 'habits' );
    const updatedHabits = habits.map( item => ( { ...item, habit: item.habit._id === id ? { ...item.habit, title: e.target.value } : item.habit } ) );
    form.setFieldValue( 'habits', updatedHabits );
  };

  return (
    <form onChange={handleFormChange} onBlur={handleFormChange} {...others}>
      <form.Field name="habits" children={ field =>
        <Fieldset className="grid gap-6">
          {field.state.value.map( ( { habit, entry }, index ) =>
            <Field key={habit._id} className="group flex items-center gap-5">
              <Input type="checkbox" name="done" id={entry._id || `${habit._id}-${index}`} data-habit={entry.habit} value={entry._id} checked={entry.done} onChange={handleCheckboxChange} onBlur={handleCheckboxBlur} className="sr-only" />
              <Label htmlFor={entry._id || `${habit._id}-${index}`} className="cursor-pointer">{entry?.done ? <CheckedIcon className="w-4 h-4 fill-zinc-500 shrink-0" /> : <SquareIcon className="w-4 h-4 fill-zinc-300 shrink-0" />}</Label>
              <Input type="text" name="title" data-id={habit._id} value={habit.title} onChange={handleInputChange}  className="outline-0" />
            </Field>
          )}
        </Fieldset> }
      />
    </form>
  );
};

export default UpgradeHabitsForm;