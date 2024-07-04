import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

interface ProductListLayout {
  columns?: number;
  children: React.ReactNode;
}

export const ProductListLayout: FC<ProductListLayout> = ({
  columns,
  children,
}) => {
  return (
    <div
      className={cn(
        `my-10 grid w-full grid-cols-[repeat(${columns ? columns : 'auto-fill'},288px)] justify-center gap-4`,
      )}>
      {children}
    </div>
  );
};
