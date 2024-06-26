import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from '@/widgets/app-header';

export const AuthLayout: FC = () => {
  return (
    <div className='container flex min-h-screen grow flex-col'>
      <AppHeader variant='auth' />
      <Outlet />
    </div>
  );
};
