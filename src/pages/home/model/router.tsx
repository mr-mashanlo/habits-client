import { type RouteObject } from 'react-router';

import HomePage from '../ui/page';

export const homeRouter: RouteObject = {
  path: '/',
  element: <HomePage />
};