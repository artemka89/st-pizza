import { useGetUser } from '@/entities/user';

import { checkForTrue } from '../lib/check-for-true';

import { UserProfile } from './types';
import { useCreateProfileMutation } from './use-create-profile';
import { useUpdateProfileMutation } from './use-update-profile';
import { useUpdateProfilePrefMutation } from './use-update-profile-pref';
import { useUpdateUserNameMutation } from './use-update-user-name';

export function useUpdateUserProfile() {
  const user = useGetUser();

  const createProfile = useCreateProfileMutation();
  const updateProfile = useUpdateProfileMutation();
  const updateUser = useUpdateUserNameMutation();
  const updatePreference = useUpdateProfilePrefMutation();

  const isLoading = checkForTrue(
    updateUser.isPending,
    createProfile.isPending,
    updateProfile.isPending,
  );

  const createUpdateProfile = async (data: UserProfile) => {
    const { name } = data;
    await updateUser.mutateAsync(name);

    if (user.data?.isProfile) {
      await updateProfile.mutateAsync(data);
    } else {
      await createProfile.mutateAsync(data);
      await updatePreference.mutateAsync();
    }
  };

  return {
    createUpdateProfile,
    isLoading,
  };
}
