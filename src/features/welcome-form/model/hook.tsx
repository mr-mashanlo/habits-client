import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { useUpgradeManyHabit } from '@/entities/habit';
import { mapServerErrors } from '@/shared/mappers';

interface Props {
  onSuccess?: () => void,
  onError?: () => void
}

const useWelcome = ( { onSuccess, onError }: Props = {} ) => {
  const { upgrade } = useUpgradeManyHabit();

  const form = useForm( {
    defaultValues: { habits: [] as Array<string> },

    onSubmit: async ( { value, formApi } ) => {
      try {
        await upgrade.mutateAsync( { data: value.habits.map( title => ( { title } ) ) } );
        onSuccess?.();
      } catch ( error ) {
        if ( error instanceof HTTPError ) {
          const errors = await error.response.json();
          formApi.setErrorMap( { onChange: { fields: mapServerErrors( errors.issues ) } } );
        }
        onError?.();
      }
    }
  } );

  return form;
};

export default useWelcome;