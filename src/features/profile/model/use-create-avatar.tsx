import { useMutation } from '@tanstack/react-query';

import { profileApi } from '@/shared/api/models/profile';

export function useCreateAvatarMutation() {
  return useMutation({
    mutationKey: ['create-avatar'],
    mutationFn: async (file: File) => {
      const url = await profileApi.createAvatar(file);
      return { id: url.$id };
    },
  });
}
