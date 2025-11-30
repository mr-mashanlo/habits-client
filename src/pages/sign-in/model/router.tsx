import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router';

const LazySignInPage = lazy( () => import( '../ui/page' ) );

export const signInRouter: RouteObject = {
  path: '/signin',
  element: <Suspense><LazySignInPage /></Suspense>
};