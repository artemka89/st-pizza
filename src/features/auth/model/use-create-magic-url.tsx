import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { authApi } from '@/shared/api/models/auth';
import { ROUTES } from '@/shared/constants';

export function useCreateMagicUrlMutation() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (email: string) => authApi.createMagicUrlToken(email),
    onSuccess: () => {
      navigate(ROUTES.VERIFY);
    },
  });
}
