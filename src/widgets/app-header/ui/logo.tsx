import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/shared/constants';
import { cn } from '@/shared/lib/cn';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn(className, 'text-2xl font-bold text-primary')}>
      <Link to={ROUTES.HOME}>ST PIZZA</Link>
    </div>
  );
};
