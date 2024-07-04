import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

interface ProductListLayout {
  columnsNumber?: 3 | 'auto';
  children: React.ReactNode;
}

export const ProductListLayout: FC<ProductListLayout> = ({
  columnsNumber = 'auto',
  children,
}) => {
  return (
    <div
      className={cn(
        `my-10 grid w-full justify-center gap-4`,
        {
          3: ['grid-cols-[repeat(3,288px)]'],
          auto: ['grid-cols-[repeat(auto-fill,288px)]'],
        }[columnsNumber],
      )}>
      {children}
    </div>
  );
};
