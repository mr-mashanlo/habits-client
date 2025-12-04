import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router';

import { Loading } from '@/shared/ui';

const LazyNotFoundPage = lazy( () => import( '../ui/page' ) );

export const notFoundRouter: RouteObject = {
  path: '*',
  element: <Suspense fallback={<Loading />}><LazyNotFoundPage /></Suspense>
};