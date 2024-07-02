import { Profile, ProfileDto } from '../model/types';

export const mapProfile = (data: ProfileDto): Profile => {
  return {
    id: data.$id,
    phone: data.phone,
    imageId: data.imageId,
    city: data.city,
    street: data.street,
  };
};
