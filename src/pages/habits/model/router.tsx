import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router';

const LazyHabitsPage = lazy( () => import( '../ui/page' ) );

export const habitRouter: RouteObject = {
  path: '/habits',
  element: <Suspense><LazyHabitsPage /></Suspense>
};