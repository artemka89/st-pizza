import { useMutation } from '@tanstack/react-query';

import { authApi } from '@/shared/api/models/auth';

export function useSignIn() {
  return useMutation({
    mutationFn: ({ userId, secret }: { userId: string; secret: string }) =>
      authApi.createSession({
        userId,
        secret,
      }),
    retry: 0,
    throwOnError: true,
  });
}
