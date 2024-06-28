import { UserDto } from '@/shared/api/models/user';

import { User } from '../model/types';

export const mapUser = (data: UserDto): User => {
  return {
    id: data.$id,
    name: data.name,
    email: data.email,
    isProfile: data.prefs?.isProfile,
  };
};
