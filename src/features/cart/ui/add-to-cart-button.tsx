import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

interface AddToCartButtonProps {
  className?: string;
}

export const AddToCartButton: FC<AddToCartButtonProps> = ({ className }) => {
  return <div className={cn(className)}></div>;
};
