import { useQuery } from '@tanstack/react-query';

import { mapPizzaCategory } from '../lib/map-pizza-category';
import { getPizzaCategoriesQuery } from '../queries';

export function useGetPizzaCategories() {
  return useQuery({
    ...getPizzaCategoriesQuery(),
    select: (data) => data.map(mapPizzaCategory),
    staleTime: 5 * 1000 * 60,
  });
}
