import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

interface HeaderProps {
  logo?: React.ReactNode;
  nav?: React.ReactNode;
  actions?: React.ReactNode;
  profile?: React.ReactNode;
  className?: string;
}

export const HeaderLayout: FC<HeaderProps> = ({
  logo,
  nav,
  actions,
  profile,
  className,
}) => {
  return (
    <header className={cn('py-4', className)}>
      <div className='hidden items-center justify-between md:flex'>
        <div className='flex items-center gap-10'>
          {logo}
          {nav}
        </div>
        <div className='flex items-center gap-4 font-semibold text-gray-500'>
          {profile}
          {actions}
        </div>
      </div>
    </header>
  );
};
