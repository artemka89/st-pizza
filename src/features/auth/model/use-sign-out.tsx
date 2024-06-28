import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { useRemoveUser } from '@/entities/user';
import { authApi } from '@/shared/api/models/auth';
import { ROUTES } from '@/shared/constants';

export function useSignOut() {
  const removeUser = useRemoveUser();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: () => authApi.deleteSession(),
    onSuccess: () => {
      removeUser();
      navigate(ROUTES.HOME);
    },
  });
}
