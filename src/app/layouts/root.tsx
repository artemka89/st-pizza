import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const RootLayout: FC = () => {
  return (
    <div className='w-full bg-background text-foreground'>
      <Outlet />
    </div>
  );
};
