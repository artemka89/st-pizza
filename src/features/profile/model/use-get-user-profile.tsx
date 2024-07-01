import { useGetProfile } from '@/entities/profile';
import { useGetUser } from '@/entities/user';

import { UserProfile } from './types';

export function useGetUserProfile(): {
  profile: UserProfile;
  isLoading: boolean;
  isSuccess: boolean;
} {
  const user = useGetUser();

  const profileId = user.data && user.data.isProfile ? user.data.id : '';

  const profile = useGetProfile(profileId);

  return {
    profile: {
      id: profile?.data ? profile.data.id : '',
      name: user?.data ? user.data.name : '',
      email: user?.data ? user.data.email : '',
      city: profile?.data ? profile.data.city : '',
      street: profile?.data ? profile.data.street : '',
      phone: profile?.data ? profile.data.phone : '',
      imageId: profile?.data ? profile.data.imageId : '',
    },
    isLoading: user.isPending ?? profile.isPending,
    isSuccess: profile.isSuccess,
  };
}
