import { FC } from 'react';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';

interface ClearCartButtonProps {
  className?: string;
}

export const ClearCartButton: FC<ClearCartButtonProps> = ({ className }) => {
  return (
    <div className={cn('flex justify-end', className)}>
      <Button variant='link' className='text-lg' onClick={() => {}}>
        Очистить корзину
      </Button>
    </div>
  );
};
