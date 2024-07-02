import { FC } from 'react';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';

import { PizzaCategory } from '../model/types';

interface CategoryButtonProps {
  category: PizzaCategory;
  activeCategory: PizzaCategory;
  setActiveCategory: (category: PizzaCategory) => void;
  className?: string;
}

export const CategoryButton: FC<CategoryButtonProps> = ({
  category,
  activeCategory,
  setActiveCategory,
  className,
}) => {
  const isActive = category.id === activeCategory.id;

  return (
    <Button
      onClick={() => setActiveCategory(category)}
      variant={isActive ? 'default' : 'outline'}
      className={cn(
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
