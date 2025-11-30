import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router';

const LazyHomePage = lazy( () => import( '../ui/page' ) );

export const homeRouter: RouteObject = {
  path: '/',
  element: <Suspense><LazyHomePage /></Suspense>
};