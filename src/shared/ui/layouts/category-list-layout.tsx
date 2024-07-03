import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

interface CategoryListLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const CategoryList: FC<CategoryListLayoutProps> = ({
  children,
  className,
}) => {
  return (
    <ul className={cn('my-6 flex w-full justify-center gap-6', className)}>
      {children}
    </ul>
  );
};
