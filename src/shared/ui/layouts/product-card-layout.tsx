import { FC } from 'react';
import { Link } from 'react-router-dom';

import { cn } from '@/shared/lib/cn';

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
};

interface ProductCardLayoutProps {
  productItem: Product;
  imageUrl: string;
  actions?: React.ReactNode;
  className?: string;
}

export const ProductCardLayout: FC<ProductCardLayoutProps> = ({
  productItem,
  imageUrl,
  actions,
  className,
}) => {
  const pathToProduct = `${productItem.category}/${productItem.id}`;

  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-4 rounded-lg border border-transparent p-4 transition hover:border-accent',
        className,
      )}>
      <div className='flex size-52 items-center justify-center'>
        <img src={imageUrl} className='size-full' alt={productItem.name} />
      </div>
      <Link
        to={pathToProduct}
        className='relative text-xl font-semibold text-card-foreground before:absolute before:-bottom-[2px] before:left-0 before:right-0 before:h-[2px] before:bg-primary before:opacity-0 hover:before:opacity-100'>
        {productItem.name}
      </Link>

      <p className='line-clamp-3 flex-1 text-center text-sm text-muted-foreground'>
        {productItem.description}
      </p>
      {actions}
    </div>
  );
};
