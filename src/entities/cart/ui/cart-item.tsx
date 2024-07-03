import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

import { CartItemType } from '../model/types';

interface CartItemProps {
  className?: string;
  item: CartItemType;
  imageUrl: string;
  actions?: React.ReactNode;
}

export const CartItem: FC<CartItemProps> = ({
  item,
  imageUrl,
  actions,
  className,
}) => {
  return (
    <div
      className={cn('my-10 flex items-center justify-between', cn(className))}>
      <div className='flex items-center gap-4'>
        <div className='f-24 w-24'>
          <img src={imageUrl} alt={item.name} className='h-full w-full' />
        </div>
        <div className='min-w-[350px]'>
          <h3 className='text-2xl'>{item.name}</h3>
          <div className='text-muted-foreground'>
            Размер: <span className='font-semibold'>{item.size} см</span>, вес:{' '}
            <span className='font-semibold'>{item.weight} гр</span>
          </div>
        </div>
      </div>
      {actions}
    </div>
  );
};
