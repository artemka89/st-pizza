import { useQuery, useQueryClient } from '@tanstack/react-query';

import { userApi } from '@/shared/api/models/user';

import { mapUser } from './lib/map-user';

const getUserKey = 'user';
export function useGetUser() {
  const cookieFallback = localStorage.getItem('cookieFallback');
  return useQuery({
    queryKey: [getUserKey],
    queryFn: () => userApi.getUser(),
    select: mapUser,
    retry: 0,
    staleTime: 5 * 60 * 1000,
    enabled: !!cookieFallback && cookieFallback !== '[]',
  });
}

export function useInvalidateUser() {
  const queryClient = useQueryClient();
  return () =>
    queryClient.invalidateQueries({ queryKey: [getUserKey], exact: true });
}

export function useRemoveUser() {
  const queryClient = useQueryClient();
  return () =>
    queryClient.removeQueries({ queryKey: [getUserKey], exact: true });
}
