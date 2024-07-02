import { useMutation } from '@tanstack/react-query';

import { useInvalidateUser } from '@/entities/user';
import { userApi } from '@/shared/api/models/user';

export function useUpdateProfilePrefMutation() {
  const invalidateUser = useInvalidateUser();

  return useMutation({
    mutationKey: ['update-preference'],
    mutationFn: () => userApi.updateUserPreferences({ isProfile: true }),
    onSettled: async () => {
      await invalidateUser();
    },
  });
}
