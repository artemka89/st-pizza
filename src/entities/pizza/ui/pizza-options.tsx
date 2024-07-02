import { FC, useState } from 'react';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';

import { PizzaOption } from '../model/types';

interface PizzaOptionsProps {
  options: PizzaOption[];
  className?: string;
  addToCart: (option: PizzaOption) => void;
}

export const PizzaOptions: FC<PizzaOptionsProps> = ({
  options,
  addToCart,
  className,
}) => {
  const [activeOption, setActiveOption] = useState(options[0]);

  return (
    <>
      <div className={cn('flex w-full gap-1', className)}>
        {options.map((option) => (
          <Button
            key={option.size}
            variant={option.id === activeOption.id ? 'default' : 'outline'}
            onClick={() => setActiveOption(option)}
            className={cn('flex-1', {
              ['cursor-default border border-transparent hover:bg-primary']:
                option.id === activeOption.id,
            })}>
            {option.size} см.
          </Button>
        ))}
      </div>
      <div className='flex w-full items-center justify-between font-medium'>
        <div className='text-start'>
          <div className='leading-snug text-muted-foreground'>
            {activeOption.weight} гр.
          </div>
          <div className='text-lg leading-snug'>{activeOption.price} ₽</div>
        </div>
        <Button
          onClick={() => addToCart(activeOption)}
          className='transition-transform active:translate-y-1'>
          Добавить
        </Button>
      </div>
    </>
  );
};
