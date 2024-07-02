import { useMutation } from '@tanstack/react-query';

import { useInvalidateProfile } from '@/entities/profile';
import { profileApi } from '@/shared/api/models/profile';

import { UpdateProfile } from './types';

export function useUpdateProfileMutation() {
  const invalidateProfile = useInvalidateProfile();
  return useMutation({
    mutationKey: ['update-profile'],
    mutationFn: (data: UpdateProfile) => profileApi.updateProfile(data),
    onSettled: async () => {
      await invalidateProfile();
    },
  });
}
