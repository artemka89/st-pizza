import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from '@/widgets/app-header';

export const PublicLayout: FC = () => {
  return (
    <div className='container flex min-h-screen grow flex-col'>
      <AppHeader variant='public' />
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};
