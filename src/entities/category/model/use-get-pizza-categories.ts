import { useQuery } from '@tanstack/react-query';

import { mapCategory } from '../lib/map-category';
import { getPizzaCategoriesQuery } from '../queries';

export function useGetPizzaCategories() {
  return useQuery({
    ...getPizzaCategoriesQuery(),
    select: (data) => data.map(mapCategory),
    staleTime: 5 * 1000 * 60,
  });
}
