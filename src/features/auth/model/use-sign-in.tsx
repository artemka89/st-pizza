import { useMutation } from '@tanstack/react-query';

import { useInvalidateUser } from '@/entities/user';
import { authApi } from '@/shared/api/models/auth';

export function useSignIn() {
  const invalidateUser = useInvalidateUser();
  return useMutation({
    mutationFn: ({ userId, secret }: { userId: string; secret: string }) =>
      authApi.createSession({
        userId,
        secret,
      }),
    retry: 0,
    throwOnError: true,

    onSettled: async () => {
      await invalidateUser();
    },
  });
}
