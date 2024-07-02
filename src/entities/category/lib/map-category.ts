import { Category } from '../model/types';

interface CategoryDto {
  $id: string;
  name: string;
}

export function mapCategory(category: CategoryDto): Category {
  return {
    id: category.$id,
    name: category.name,
  };
}
