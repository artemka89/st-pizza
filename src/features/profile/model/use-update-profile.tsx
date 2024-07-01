import { useMutation } from '@tanstack/react-query';

import { useInvalidateProfile } from '@/entities/profile';
import { useGetUser, useInvalidateUser } from '@/entities/user';
import { profileApi } from '@/shared/api/models/profile';
import { userApi } from '@/shared/api/models/user';

import { checkForTrue } from '../lib/check-for-true';

import { UpdateProfile, UserProfile } from './types';
import { useCreateProfileMutation } from './use-create-profile';

function useUpdateProfileMutation() {
  const invalidateProfile = useInvalidateProfile();
  return useMutation({
    mutationKey: ['update-profile'],
    mutationFn: (data: UpdateProfile) => profileApi.updateProfile(data),
    onSettled: async () => {
      await invalidateProfile();
    },
  });
}

function useUpdateUserNameMutation() {
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
  const user = useGetUser();

  const createProfile = useCreateProfileMutation();
  const updateProfile = useUpdateProfileMutation();

  const updateUser = useUpdateUserNameMutation();

  const isLoading = checkForTrue(
    updateUser.isPending,
    createProfile.isPending,
    updateProfile.isPending,
  );

  const createUpdateProfile = (data: UserProfile) => {
    if (user.data?.isProfile) {
      updateUser.mutate(data.name);
      updateProfile.mutate(data);
    } else {
      updateUser.mutate(data.name);
      createProfile.mutate(data);
    }
  };

  return {
    createUpdateProfile,
    isLoading,
  };
}
