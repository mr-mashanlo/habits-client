import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router';

const LazySignUpPage = lazy( () => import( '../ui/page' ) );

export const signUpRouter: RouteObject = {
  path: '/signup',
  element: <Suspense><LazySignUpPage /></Suspense>
};