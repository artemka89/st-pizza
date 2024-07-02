import { PizzaCategory } from '../model/types';

interface CategoryDto {
  $id: string;
  name: string;
}

export function mapPizzaCategory(category: CategoryDto): PizzaCategory {
  return {
    id: category.$id,
    name: category.name,
  };
}
