import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const RootLayout: FC = () => {
  return (
    <div className='flex w-full flex-col bg-background text-foreground'>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};
