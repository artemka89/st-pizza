import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

interface CartItemListProps {
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export const CartItemList: FC<CartItemListProps> = ({
  children,
  actions,
  className,
}) => {
  return (
    <div className='mx-auto my-10 w-full max-w-[800px]'>
      {actions && <div className='w-full'>{actions}</div>}
      <div
        className={cn(
          'flex w-full flex-col items-center gap-6 border-y py-10',
          className,
        )}>
        {children}
      </div>
    </div>
  );
};
