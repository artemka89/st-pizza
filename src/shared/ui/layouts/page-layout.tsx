import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const PageLayout: FC<PageLayoutProps> = ({ children, className }) => {
  return <main className={cn(className, 'grow')}>{children}</main>;
};
