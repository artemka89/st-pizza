import { useQuery, useQueryClient } from '@tanstack/react-query';

import { profileApi } from '@/shared/api/models/profile';

import { mapProfile } from './lib/map-profile';

const getProfileKey = 'profile';

export function useGetProfile(id: string) {
  return useQuery({
    queryKey: [getProfileKey],
    queryFn: () => profileApi.getProfile(id),
    select: mapProfile,
    staleTime: 5 * 60 * 1000,
    enabled: !!id,
  });
}

export function useInvalidateProfile() {
  const queryClient = useQueryClient();
  return () =>
    queryClient.invalidateQueries({ queryKey: [getProfileKey], exact: true });
}
