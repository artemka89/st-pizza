import { RouteObject } from 'react-router-dom';

import { PrivateLayout } from '@/app/layouts/private';
import { profileLoader } from '@/entities/profile';
import { queryClient } from '@/shared/api/query-client';

export const privateRoutes: RouteObject = {
  path: '',
  element: <PrivateLayout />,
  children: [
    {
      path: '/profile',
      loader: profileLoader(queryClient),
      lazy: async () => {
        const { ProfilePage } = await import('@/pages/profile-page');
        return { Component: ProfilePage };
      },
    },
  ],
};
