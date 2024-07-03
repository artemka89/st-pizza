import { FC } from 'react';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';

import { PizzaCategory } from '../model/types';

interface CategoryButtonProps {
  category: PizzaCategory;
  activeCategoryId: string;
  setActiveCategoryId: (id: string) => void;
  className?: string;
}

export const CategoryButton: FC<CategoryButtonProps> = ({
  category,
  activeCategoryId,
  setActiveCategoryId,
  className,
}) => {
  const isActive = activeCategoryId === category.id;

  return (
    <Button
      onClick={() => setActiveCategoryId(category.id)}
      variant={isActive ? 'default' : 'outline'}
      className={cn(
        'min-w-[140px]',
        {
          ['cursor-default border border-transparent hover:bg-primary']:
            isActive,
        },

        className,
      )}>
      {category.name}
    </Button>
  );
};
