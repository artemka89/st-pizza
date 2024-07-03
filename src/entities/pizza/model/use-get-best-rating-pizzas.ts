import { useQuery } from '@tanstack/react-query';

import { mapPizza } from '../lib/map-pizza';
import { getBeatRatingPizzasQuery } from '../queries';

export function useGetBestRatingPizzasMutation(amount = 3) {
  return useQuery({
    ...getBeatRatingPizzasQuery(amount),
    select: (data) => data.map(mapPizza),
    staleTime: 5 * 1000 * 60,
  });
}
