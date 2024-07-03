import { FC } from 'react';
import { CircleMinus, CirclePlus, Trash2 } from 'lucide-react';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';

import { CartItemType } from '../model/types';

interface CartItemControlProps {
  className?: string;
  item: CartItemType;
  increase: () => void;
  decrease: () => void;
  removeItem: () => void;
}

export const CartItemControl: FC<CartItemControlProps> = ({
  item,
  increase,
  decrease,
  removeItem,
  className,
}) => {
  const disabledMinus = item.amount <= 1;
  const disabledPlus = item.amount >= 99;

  return (
    <div className={cn('flex w-full justify-between', className)}>
      <div className='flex items-center gap-3'>
        <Button
          onClick={decrease}
          variant='icon'
          size='icon'
          disabled={disabledMinus}>
          <CircleMinus size={34} />
        </Button>
        <div className='text-3xl font-bold text-primary'>{item.amount}</div>
        <Button
          onClick={increase}
          variant='icon'
          size='icon'
          disabled={disabledPlus}>
          <CirclePlus size={34} />
        </Button>
      </div>
      <div className='w-full max-w-[200px] text-center text-3xl font-medium'>
        {item.price * item.amount} ₽
      </div>
      <div>
        <Button
          variant='icon'
          size='icon'
          onClick={removeItem}
          className='transition-colors hover:text-primary'>
          <Trash2 size={28} />
        </Button>
      </div>
    </div>
  );
};
