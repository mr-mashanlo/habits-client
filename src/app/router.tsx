import { createBrowserRouter } from 'react-router';

import { homeRouter } from '@/pages/home';
import { notFoundRouter } from '@/pages/not-found';
import { signInRouter } from '@/pages/sign-in';
import { signUpRouter } from '@/pages/sign-up';
import { welcomeRouter } from '@/pages/welcome';

import MainLayout from './layouts/main';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        element: <MainLayout />,
        children: [ signInRouter, signUpRouter, homeRouter, welcomeRouter, notFoundRouter ]
      }
    ]
  }
] );

export default router;