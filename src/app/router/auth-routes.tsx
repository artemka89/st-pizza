import { RouteObject } from 'react-router-dom';

import { AuthLayout } from '@/app/layouts/auth';
import { ConfirmEmailPage } from '@/pages/confirm-email-page';
import { VerifyRequestPage } from '@/pages/verify-request-page';
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
      element: <VerifyRequestPage />,
    },
    {
      path: ROUTES.CONFIRM,
      element: <ConfirmEmailPage />,
    },
  ],
};
