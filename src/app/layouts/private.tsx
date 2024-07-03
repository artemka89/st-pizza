import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthorizedGuard } from '@/features/auth';
import { AppFooter } from '@/widgets/app-footer';
import { AppHeader } from '@/widgets/app-header';

export const PrivateLayout: FC = () => {
  return (
    <div className='min-height container flex flex-col'>
      <AppHeader variant='private' />
      <AuthorizedGuard>
        <Outlet />
      </AuthorizedGuard>
      <AppFooter />
    </div>
  );
};
