import { useMutation } from '@tanstack/react-query';

import { profileApi } from '@/shared/api/models/profile';

export function useCreateAvatar() {
  return useMutation({
    mutationKey: ['create-avatar'],
    mutationFn: (file: File) => profileApi.createAvatar(file),
  });
}
