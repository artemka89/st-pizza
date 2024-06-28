import { RouteObject } from 'react-router-dom';

import { PublicLayout } from '@/app/layouts/public';
import { HomePage } from '@/pages/home-page';

export const publicRoutes: RouteObject = {
  path: '',
  element: <PublicLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
  ],
};
