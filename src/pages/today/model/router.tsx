import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router';

const LazyTodayPage = lazy( () => import( '../ui/page' ) );

export const todayRouter: RouteObject = {
  path: '/today',
  element: <Suspense><LazyTodayPage /></Suspense>
};