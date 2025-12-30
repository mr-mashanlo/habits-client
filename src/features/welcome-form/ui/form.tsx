import { Button, Field, Fieldset, Input, Label, Legend } from '@headlessui/react';
import { useStore } from '@tanstack/react-form';
import { AnimatePresence, motion } from 'motion/react';
import { type ChangeEvent, type FC, type FormEvent } from 'react';
import { useNavigate } from 'react-router';
import z from 'zod';

import useWelcome from '../model/hook';

const variants = {
  initial: { opacity: 0, filter: 'blur(.5rem)' },
  whileInView: { opacity: 1, filter: 'blur(0)' },
  exit: { opacity: 0, filter: 'blur(.5rem)' }
};

const WelcomeForm: FC = () => {
  const navigate = useNavigate();
  const form = useWelcome( { onSuccess: () => navigate( '/', { replace: true } ) } );
  const canSubmit = useStore( form.store, state => state.canSubmit );
  const metaData = useStore( form.store, state => state.fieldMeta );

  const handleFormSubmit = ( e: FormEvent<HTMLFormElement> ) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };

  const handleFormChange = ( e: ChangeEvent<HTMLFormElement> ) => {
    const formdata = new FormData( e.currentTarget );
    const habits = formdata.getAll( 'habits' ) as Array<string>;
    form.setFieldValue( 'habits', habits );
  };

  const getErrorMessages = () => {
    return Object.values( metaData ).filter( field => field.errors.length ).map( field => field.errors.map( item => item.message ) );
  };

  return (
    <form onSubmit={handleFormSubmit} onChange={handleFormChange} className="w-full sm:w-[21rem] relative">
      <Fieldset>
        <Legend className="text-3xl text-center font-bold">Choose Habits</Legend>
        <form.Field name="habits" validators={{ onChange: z.array( z.string() ).min( 3, 'Select at least 3 items' ) }} children={field =>
          <div className="mt-8 flex gap-[.69rem] flex-wrap justify-between">
            <Field className="group">
              <Input name={field.name} value="Running" type="checkbox" className="sr-only" />
              <Label className="inline-block p-[.5938rem] px-3 rounded-2xl bg-zinc-100 cursor-pointer active:scale-110 transition group-has-checked:text-white group-has-checked:bg-black">Running</Label>
            </Field>
            <Field className="group">
              <Input name={field.name} value="Yoga" type="checkbox" className="sr-only" />
              <Label className="inline-block p-[.5938rem] px-3 rounded-2xl bg-zinc-100 cursor-pointer active:scale-110 transition group-has-checked:text-white group-has-checked:bg-black">Yoga</Label>
            </Field>
            <Field className="group">
              <Input name={field.name} value="Strengthtraining" type="checkbox" className="sr-only" />
              <Label className="inline-block p-[.5938rem] px-3 rounded-2xl bg-zinc-100 cursor-pointer active:scale-110 transition group-has-checked:text-white group-has-checked:bg-black">Strengthtraining</Label>
            </Field>
            <Field className="group">
              <Input name={field.name} value="Meditating" type="checkbox" className="sr-only" />
              <Label className="inline-block p-[.5938rem] px-3 rounded-2xl bg-zinc-100 cursor-pointer active:scale-110 transition group-has-checked:text-white group-has-checked:bg-black">Meditating</Label>
            </Field>
            <Field className="group">
              <Input name={field.name} value="Crafting" type="checkbox" className="sr-only" />
              <Label className="inline-block p-[.5938rem] px-3 rounded-2xl bg-zinc-100 cursor-pointer active:scale-110 transition group-has-checked:text-white group-has-checked:bg-black">Crafting</Label>
            </Field>
            <Field className="group">
              <Input name={field.name} value="Gardening" type="checkbox" className="sr-only" />
              <Label className="inline-block p-[.5938rem] px-3 rounded-2xl bg-zinc-100 cursor-pointer active:scale-110 transition group-has-checked:text-white group-has-checked:bg-black">Gardening</Label>
            </Field>
            <Field className="group">
              <Input name={field.name} value="Hydrating" type="checkbox" className="sr-only" />
              <Label className="inline-block p-[.5938rem] px-3 rounded-2xl bg-zinc-100 cursor-pointer active:scale-110 transition group-has-checked:text-white group-has-checked:bg-black">Hydrating</Label>
            </Field>
            <Field className="group">
              <Input name={field.name} value="Painting" type="checkbox" className="sr-only" />
              <Label className="inline-block p-[.5938rem] px-3 rounded-2xl bg-zinc-100 cursor-pointer active:scale-110 transition group-has-checked:text-white group-has-checked:bg-black">Painting</Label>
            </Field>
            <Field className="group">
              <Input name={field.name} value="Stretching" type="checkbox" className="sr-only" />
              <Label className="inline-block p-[.5938rem] px-3 rounded-2xl bg-zinc-100 cursor-pointer active:scale-110 transition group-has-checked:text-white group-has-checked:bg-black">Stretching</Label>
            </Field>
          </div> }
        />
        <form.Subscribe selector={state => [ state.canSubmit, state.isSubmitting ]} children={( [ canSubmit, isSubmitting ] ) =>
          <Button disabled={!canSubmit} type="submit" className="w-full mt-5 p-5 rounded-2xl bg-black text-white cursor-pointer outline-offset-3 disabled:cursor-default disabled:opacity-70">{isSubmitting ? '•••' : 'Next'}</Button> }
        />
      </Fieldset>
      <p className="mt-5 text-center leading-6">Select a few habits to get started</p>
      <AnimatePresence>
        {!canSubmit && <motion.p key={getErrorMessages().length} variants={variants} initial="initial" whileInView="whileInView" exit="exit" className="w-full mt-3 px-3 text-center text-red-600 absolute top-full">{getErrorMessages().join( ', ' )}</motion.p>}
      </AnimatePresence>
    </form>
  );
};

export default WelcomeForm;