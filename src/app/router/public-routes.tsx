import { RouteObject } from 'react-router-dom';

import { PublicLayout } from '@/app/layouts/public';
import { HomePage } from '@/pages/home-page';
import { MenuPage } from '@/pages/menu-page';
import { ROUTES } from '@/shared/constants';

export const publicRoutes: RouteObject = {
  path: '',
  element: <PublicLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: ROUTES.MENU,
      element: <MenuPage />,
    },
  ],
};
