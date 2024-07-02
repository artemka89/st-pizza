import { RouteObject } from 'react-router-dom';

import { PrivateLayout } from '@/app/layouts/private';
import { ROUTES } from '@/shared/constants';

export const privateRoutes: RouteObject = {
  path: '',
  element: <PrivateLayout />,
  children: [
    {
      path: ROUTES.PROFILE,
      lazy: async () => {
        const { ProfilePage } = await import('@/pages/profile-page');
        return { Component: ProfilePage };
      },
    },
  ],
};
