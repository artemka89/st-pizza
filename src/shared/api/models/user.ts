import { z } from 'zod';

import { account } from '@/shared/lib/config/appwrite-config';

export const UserDtoSchema = z.object({
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
};
