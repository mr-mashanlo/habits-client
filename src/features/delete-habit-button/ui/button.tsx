import { Button } from '@headlessui/react';
import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import { useHabit } from '@/entities/habit';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string,
  children: ReactNode
}

const DeleteHabitButton: FC<Props> = ( { id, children, ...others } ) => {
  const { remove } = useHabit();

  return (
    <Button onClick={() => remove.mutate( { id } )} {...others}>{children}</Button>
  );
};

export default DeleteHabitButton;