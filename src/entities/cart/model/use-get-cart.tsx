import { useQuery } from '@tanstack/react-query';

import { mapCart } from '../lib/map-cart';
import { getCartQuery } from '../queries';

export function useGetCart(id: string) {
  return useQuery({
    ...getCartQuery(id),
    select: (data) => mapCart(data),
    staleTime: 5 * 1000 * 60,
    enabled: !!id,
  });
}
