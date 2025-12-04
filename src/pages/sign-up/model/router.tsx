import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router';

import { Loading } from '@/shared/ui';

const LazySignUpPage = lazy( () => import( '../ui/page' ) );

export const signUpRouter: RouteObject = {
  path: '/signup',
  element: <Suspense fallback={<Loading />}><LazySignUpPage /></Suspense>
};