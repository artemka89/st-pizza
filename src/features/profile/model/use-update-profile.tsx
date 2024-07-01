import { useMutation } from '@tanstack/react-query';

import { useInvalidateProfile } from '@/entities/profile';
import { useInvalidateUser } from '@/entities/user';
import { profileApi } from '@/shared/api/models/profile';
import { userApi } from '@/shared/api/models/user';

import { UpdateProfile, UserProfile } from './types';

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

export function useUpdateUserProfile() {
  const profile = useUpdateProfileMutation();
  const user = useUpdateUserNameMutation();

  const updateProfile = (data: UserProfile) => {
    user.mutate(data.name);
    profile.mutate(data);
  };

  const isLoading = profile.isPending ?? user.isPending;

  return {
    updateProfile,
    isLoading,
  };
}
