import { useQuery } from '@tanstack/react-query';

import { mapProfile } from '../lib/map-profile';
import { getProfileQuery } from '../queries';

export function useGetProfile(id: string) {
  return useQuery({
    ...getProfileQuery(id),
    select: mapProfile,
    staleTime: 5 * 60 * 1000,
    enabled: !!id,
  });
}
