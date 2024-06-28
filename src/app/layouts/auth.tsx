import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout: FC = () => {
  return (
    <div className='container flex min-h-screen grow flex-col'>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};
