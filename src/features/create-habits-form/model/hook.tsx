import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { useCreateHabit } from '@/entities/habit';
import { mapServerErrors } from '@/shared/mappers';

const useCreateHabits = () => {
  const { create } = useCreateHabit();

  const form = useForm( {
    defaultValues: { title: '' },

    onSubmit: async ( { value, formApi } ) => {
      try {
        create.mutate( { data: value } );
        formApi.reset();
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

export default useCreateHabits;