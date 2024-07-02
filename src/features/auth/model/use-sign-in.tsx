import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { useInvalidateUser } from '@/entities/user';
import { authApi } from '@/shared/api/models/auth';
import { ROUTES } from '@/shared/constants';

export function useSignInMutation() {
  const invalidateUser = useInvalidateUser();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({ userId, secret }: { userId: string; secret: string }) =>
      authApi.createSession({
        userId,
        secret,
      }),
    retry: 0,
    onError: (error) => error,
    onSuccess: () => {
      navigate(ROUTES.HOME);
    },
    onSettled: async () => {
      await invalidateUser();
    },
  });
}
