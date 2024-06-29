import { RouteObject } from 'react-router-dom';

import { PrivateLayout } from '@/app/layouts/private';
import { PageLayout } from '@/shared/ui/layouts/page-layout';

export const privateRoutes: RouteObject = {
  path: '',
  element: <PrivateLayout />,
  children: [
    {
      path: '/profile',
      element: (
        <PageLayout>
          <div>Профиль</div>
        </PageLayout>
      ),
    },
  ],
};
