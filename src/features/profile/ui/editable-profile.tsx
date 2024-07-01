import { FC } from 'react';

import { useGetUserProfile } from '../model/use-get-user-profile';
import { useUpdateUserProfile } from '../model/use-update-profile';

import { ProfileForm } from './profile-form';

export const EditableProfile: FC = () => {
  const { profile, isSuccess } = useGetUserProfile();

  const { updateProfile, isLoading } = useUpdateUserProfile();

  return (
    <ProfileForm
      profile={profile}
      isLoading={isLoading}
      isSuccess={isSuccess}
      updateData={updateProfile}
    />
  );
};
