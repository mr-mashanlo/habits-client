import { type RouteObject } from 'react-router';

import SigninPage from '../ui/page';

export const signInRouter: RouteObject = {
  path: '/signin',
  element: <SigninPage />
};