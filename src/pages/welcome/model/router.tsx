import { type RouteObject } from 'react-router';

import WelcomePage from '../ui/page';

export const welcomeRouter: RouteObject = {
  path: '/welcome',
  element: <WelcomePage />
};