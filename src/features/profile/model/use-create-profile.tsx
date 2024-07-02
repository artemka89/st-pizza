import { useMutation } from '@tanstack/react-query';

import { useInvalidateProfile } from '@/entities/profile';
import { profileApi } from '@/shared/api/models/profile';

import { UpdateProfile } from './types';

export function useCreateProfileMutation() {
  const invalidateProfile = useInvalidateProfile();
  return useMutation({
    mutationKey: ['create-profile'],
    mutationFn: (data: UpdateProfile) => profileApi.createProfile(data),
    onSettled: async () => {
      await invalidateProfile();
    },
  });
}
