import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

import { ROUTES } from '@/shared/constants';
import { cn } from '@/shared/lib/cn';

interface CartButtonProps {
  className?: string;
}

export const CartButton: FC<CartButtonProps> = ({ className }) => {
  return (
    <Link
      to={ROUTES.CART}
      className={cn(
        'relative mr-2 text-muted-foreground transition-colors hover:text-accent-foreground',
        className,
      )}>
      <ShoppingCart size={24} />
      <span className='absolute -right-2 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary px-1 py-1 text-xs leading-3 text-white'>
        {10}
      </span>
    </Link>
  );
};
