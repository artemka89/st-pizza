import {
  QueryClient,
  QueryOptions,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { profileApi } from '@/shared/api/models/profile';

import { mapProfile } from './lib/map-profile';

const getProfileKey = 'profile';

export function getProfileQuery(id: string) {
  return {
    queryKey: [getProfileKey],
    queryFn: () => profileApi.getProfile(id),
  } satisfies QueryOptions;
}

export const profileLoader = (queryClient: QueryClient) => async () => {
  return queryClient.fetchQuery({
    ...getProfileQuery('66831065000fa0deec70'),
    staleTime: 60 * 5 * 1000,
  });
};

export function useGetProfile(id: string) {
  return useQuery({
    ...getProfileQuery(id),
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
