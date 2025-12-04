import { createBrowserRouter } from 'react-router';

import { homeRouter } from '@/pages/home';
import { notFoundRouter } from '@/pages/not-found';
import { signInRouter } from '@/pages/sign-in';
import { signUpRouter } from '@/pages/sign-up';
import { welcomeRouter } from '@/pages/welcome';

import MainLayout from './layouts/main';
import ProtectedLayout from './layouts/protected';
import PublicLayout from './layouts/public';

const router = createBrowserRouter( [
  {
    path: '/',
    children: [
      {
        element: <PublicLayout />,
        children: [
          {
            element: <MainLayout />,
            children: [ signInRouter, signUpRouter ]
          }
        ]
      },

      {
        element: <ProtectedLayout />,
        children: [
          {
            element: <MainLayout />,
            children: [ welcomeRouter ]
          }
        ]
      },

      {
        element: <MainLayout />,
        children: [ homeRouter, notFoundRouter ]
      }
    ]
  }
] );

export default router;