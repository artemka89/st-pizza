import { RouteObject } from 'react-router-dom';

import { PublicLayout } from '@/app/layouts/public';
import { HomePage } from '@/pages/home-page';
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
      lazy: async () => {
        const { MenuPage } = await import('@/pages/menu-page');
        return { Component: MenuPage };
      },
    },
  ],
};
