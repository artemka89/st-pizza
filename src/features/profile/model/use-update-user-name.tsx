import { useMutation } from '@tanstack/react-query';

import { useInvalidateUser } from '@/entities/user';
import { userApi } from '@/shared/api/models/user';

export function useUpdateUserNameMutation() {
  const invalidateUser = useInvalidateUser();
  return useMutation({
    mutationKey: ['update-user-name'],
    mutationFn: (name: string) => userApi.updateUserName(name),
    onSettled: async () => {
      await invalidateUser();
    },
  });
}
