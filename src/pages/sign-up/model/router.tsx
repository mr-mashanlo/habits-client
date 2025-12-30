import { type RouteObject } from 'react-router';

import SignupPage from '../ui/page';

export const signUpRouter: RouteObject = {
  path: '/signup',
  element: <SignupPage />
};