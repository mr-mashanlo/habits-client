import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { useAuth } from '@/entities/auth';
import { mapServerErrors } from '@/shared/mappers';

interface Props {
  onSuccess?: () => void,
  onError?: () => void
}

const useSignIn = ( { onSuccess, onError }: Props = {} ) => {
  const { signin } = useAuth();

  const form = useForm( {
    defaultValues: {
      email: 'one@company.com',
      password: 'one12345'
    },

    onSubmit: async ( { value, formApi } ) => {
      try {
        await signin( value );
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

export default useSignIn;