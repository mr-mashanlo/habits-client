import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router';

import { Loading } from '@/shared/ui';

const LazySignInPage = lazy( () => import( '../ui/page' ) );

export const signInRouter: RouteObject = {
  path: '/signin',
  element: <Suspense fallback={<Loading />}><LazySignInPage /></Suspense>
};