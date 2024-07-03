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
        `grid w-full grid-cols-[repeat(${columns ?? 'auto-fill'},288px)] my-10 justify-center gap-4`,
      )}>
      {children}
    </div>
  );
};
