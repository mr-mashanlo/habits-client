import { Field, Input } from '@headlessui/react';
import { type DetailedHTMLProps, type FC, type FormEvent, type FormHTMLAttributes } from 'react';
import z from 'zod';

import { SquareIcon, WarningIcon } from '@/shared/icons';
import { debounce } from '@/shared/utils';

import useCreateHabits from '../model/hook';

type Props = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;

const CreateHabitsForm: FC<Props> = props => {
  const form = useCreateHabits();

  const throtleFormSubmit = debounce( () => form.handleSubmit(), 500 );

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    throtleFormSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit} {...props}>
      <form.Field name="title" validators={{ onChange: z.string().min( 3, 'Habit must be at least 3 characters long' ) }} children={ field =>
        <Field className="block relative">
          <Input type="text" name={field.name} value={field.state.value} onChange={e => field.handleChange( e.target.value )} data-error={field.state.meta.isValid ? false : true} placeholder="Create" className="w-full p-5 pl-14 rounded-2xl bg-zinc-100 placeholder:text-zinc-400/50 focus:bg-transparent data-[error=true]:outline-rose-500" />
          {!field.state.meta.isValid ? <WarningIcon className="w-5 h-5 fill-red-500 absolute top-1/2 left-5 -translate-y-1/2" aria-hidden="true" /> : <SquareIcon className="w-4 h-4 fill-zinc-400/50 peer-focus:fill-black absolute top-1/2 left-5 -translate-y-1/2" aria-hidden="true" />}
        </Field> }
      />
    </form>
  );
};

export default CreateHabitsForm;