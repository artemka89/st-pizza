import { ID } from 'appwrite';
import { z } from 'zod';

import { APPWRITE } from '@/shared/constants';
import { databases, storage } from '@/shared/lib/config/appwrite-config';
const ProfileDtoSchema = z.object({
  $id: z.string(),
  phone: z.string(),
  imageId: z.string(),
  city: z.string(),
  street: z.string(),
});
export type ProfileDto = z.infer<typeof ProfileDtoSchema>;

const AvatarDtoSchema = z.object({
  $id: z.string(),
});

type AvatarDto = z.infer<typeof AvatarDtoSchema>;

interface CreateProfileDto {
  id: string;
  phone: string;
  imageId: string;
  city: string;
  street: string;
}

export const profileApi = {
  getProfile: async (id: string) => {
    const profile = await databases.getDocument(
      APPWRITE.DATABASE_ID,
      APPWRITE.PROFILES_COLLECTION_ID,
      id,
    );
    return ProfileDtoSchema.parse(profile);
  },

  createProfile: async (data: CreateProfileDto): Promise<ProfileDto> => {
    const profile = await databases.createDocument(
      APPWRITE.DATABASE_ID,
      APPWRITE.PROFILES_COLLECTION_ID,
      data.id,
      {
        phone: data.phone,
        city: data.city,
        street: data.street,
        imageId: data.imageId,
      },
    );

    return ProfileDtoSchema.parse(profile);
  },

  updateProfile: async (data: CreateProfileDto): Promise<ProfileDto> => {
    const profile = await databases.updateDocument(
      APPWRITE.DATABASE_ID,
      APPWRITE.PROFILES_COLLECTION_ID,
      data.id,
      {
        phone: data.phone,
        city: data.city,
        street: data.street,
        imageId: data.imageId,
      },
    );
    return ProfileDtoSchema.parse(profile);
  },

  createAvatar: async (file: File): Promise<AvatarDto> => {
    const id = ID.unique();
    const image = await storage.createFile(
      APPWRITE.AVATARS_BUCKET_ID,
      id,
      file,
    );
    return AvatarDtoSchema.parse(image);
  },
};
