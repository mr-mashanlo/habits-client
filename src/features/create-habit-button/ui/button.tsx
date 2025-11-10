import { Button } from '@headlessui/react';
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { useHabit } from '@/entities/habit';
import { debounce } from '@/shared/utils';

import { titles } from '../model/config';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const CreateHabitButton: FC<Props> = ( { children, ...others } ) => {
  const { create } = useHabit();

  const createHabit = debounce( ( title: string, days: Array<string> ) => create.mutate( { data: { title, days } } ), 500 );

  const handleButtonClick = () => {
    const days = [ String( new Date().getDay() ) ];
    const title = titles[ Math.floor( Math.random() * titles.length ) ];
    createHabit( title, days );
  };

  return (
    <Button onClick={handleButtonClick} {...others}>{children}</Button>
  );
};

export default CreateHabitButton;