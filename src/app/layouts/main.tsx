import { type FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router';

import { UnauthorizedError } from '@/shared/libs';

import { queryClient } from '../main';

const MainLayout: FC = () => {
  const navigate = useNavigate();

  useEffect( () => {
    const unsubscribe = queryClient.getQueryCache().subscribe( event => {
      // @ts-expect-error action
      if ( event?.action?.error instanceof UnauthorizedError ) {
        navigate( '/signin', { replace: true } );
      }
    } );

    return unsubscribe;
  }, [ navigate ] );

  return <Outlet />;
};

export default MainLayout;