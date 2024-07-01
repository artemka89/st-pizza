import { ProfileFormType } from '../model/profile-schema';

export const getDefaultValues = (profile: ProfileFormType) => ({
  name: profile.name,
  email: profile.email,
  city: profile.city,
  street: profile.street,
  phone: profile.phone,
  imageId: profile.imageId,
});
