import { useQuery, useQueryClient } from '@tanstack/react-query';

import { userApi } from '@/shared/api/models/user';

import { mapUser } from './lib/map-user';

const getUserKey = 'user';
export function useGetUser() {
  return useQuery({
    queryKey: [getUserKey],
    queryFn: () => userApi.getUser(),
    select: mapUser,
  });
}

export function useRemoveUser() {
  const queryClient = useQueryClient();
  return () =>
    queryClient.removeQueries({ queryKey: [getUserKey], exact: true });
}
