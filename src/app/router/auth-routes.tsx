import { RouteObject } from 'react-router-dom';

import { AuthLayout } from '@/app/layouts/auth';
import { ROUTES } from '@/shared/constants';

export const authRoutes: RouteObject = {
  path: '',
  element: <AuthLayout />,
  children: [
    {
      path: ROUTES.SIGN_IN,
      lazy: async () => {
        const { SignInPage } = await import('@/pages/sign-in-page');
        return { Component: SignInPage };
      },
    },
    {
      path: ROUTES.VERIFY,
      element: <div>Verify</div>,
    },
  ],
};
