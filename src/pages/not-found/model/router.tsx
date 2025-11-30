import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router';

const LazyNotFoundPage = lazy( () => import( '../ui/page' ) );

export const notFoundRouter: RouteObject = {
  path: '*',
  element: <Suspense><LazyNotFoundPage /></Suspense>
};