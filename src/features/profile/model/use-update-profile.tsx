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

function useUpdateProfilePreference() {
  const invalidateUser = useInvalidateUser();
  return useMutation({
    mutationKey: ['update-preference'],
    mutationFn: () => userApi.updateUserPreferences({ isProfile: true }),
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
  const updatePreference = useUpdateProfilePreference();

  const isLoading = checkForTrue(
    updateUser.isPending,
    createProfile.isPending,
    updateProfile.isPending,
  );

  const createUpdateProfile = async (data: UserProfile) => {
    if (user.data?.isProfile) {
      await updateUser.mutateAsync(data.name);
      await updateProfile.mutateAsync(data);
    } else {
      await updateUser.mutateAsync(data.name);
      await createProfile.mutateAsync(data);
      await updatePreference.mutateAsync();
    }
  };

  return {
    createUpdateProfile,
    isLoading,
  };
}
