import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router';

import { Loading } from '@/shared/ui';

const LazyHomePage = lazy( () => import( '../ui/page' ) );

export const homeRouter: RouteObject = {
  path: '/',
  element: <Suspense fallback={<Loading />}><LazyHomePage /></Suspense>
};