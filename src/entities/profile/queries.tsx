import { QueryOptions, useQueryClient } from '@tanstack/react-query';

import { profileApi } from '@/shared/api/models/profile';

const getProfileKey = 'profile';

export function getProfileQuery(id: string) {
  return {
    queryKey: [getProfileKey],
    queryFn: () => profileApi.getProfile(id),
  } satisfies QueryOptions;
}

export function useInvalidateProfile() {
  const queryClient = useQueryClient();
  return () =>
    queryClient.invalidateQueries({ queryKey: [getProfileKey], exact: true });
}
