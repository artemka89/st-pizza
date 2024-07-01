import { z } from 'zod';

import { account } from '@/shared/lib/config/appwrite-config';

interface UserPreference {
  isProfile: boolean;
}

const UserDtoSchema = z.object({
  $id: z.string(),
  name: z.string(),
  email: z.string(),
  prefs: z.object({
    isProfile: z.boolean().optional(),
  }),
});

export type UserDto = z.infer<typeof UserDtoSchema>;

export const userApi = {
  getUser: async (): Promise<UserDto> => {
    const user = await account.get();
    return UserDtoSchema.parse(user);
  },
  updateUserPreferences: async (data: UserPreference) => {
    await account.updatePrefs(data);
    return;
  },
  updateUserName: async (name: string): Promise<UserDto> => {
    const user = await account.updateName(name);
    return user;
  },
};
