import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const AuthLayout: FC = () => {
  return (
    <div className='min-height container flex flex-col'>
      <header>Header</header>
      <main className='grow'>
        <Outlet />
      </main>
    </div>
  );
};
