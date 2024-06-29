import { RouteObject } from 'react-router-dom';

import { PrivateLayout } from '@/app/layouts/private';

export const privateRoutes: RouteObject = {
  path: '',
  element: <PrivateLayout />,
  children: [
    {
      path: '/profile',
      lazy: async () => {
        const { ProfilePage } = await import('@/pages/profile-page');
        return { Component: ProfilePage };
      },
    },
  ],
};
