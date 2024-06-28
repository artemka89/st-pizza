import { RouteObject } from 'react-router-dom';

import { AuthLayout } from '@/app/layouts/auth';

export const authRoutes: RouteObject = {
  path: '/',
  element: <AuthLayout />,
  children: [
    {
      path: '/auth/sign-in',
      lazy: async () => {
        const { SignInPage } = await import('@/pages/sign-in-page');
        return { Component: SignInPage };
      },
    },
  ],
};
