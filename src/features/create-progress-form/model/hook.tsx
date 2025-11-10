import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';
import moment from 'moment';

import { useProgress, useTodayProgress } from '@/entities/progress';
import { mapServerErrors } from '@/shared/mappers';

const useCreateProgress = () => {
  const { create } = useProgress();
  const { data } = useTodayProgress();

  const form = useForm( {
    defaultValues: {
      habits: data?.habits || [],
      total: data?.total || 0
    },

    onSubmit: async ( { value, formApi } ) => {
      try {
        const date = moment().format( 'YYYYMMDD' );
        await create.mutate( { data: { date, ...value } } );
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

export default useCreateProgress;