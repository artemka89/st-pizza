import { ID, Models } from 'appwrite';

import { APPWRITE, ROUTES } from '@/shared/constants';
import { account } from '@/shared/lib/config/appwrite-config';

export const authApi = {
  createMagicUrlToken: async (email: string): Promise<Models.Token> => {
    const uniqueId = ID.unique();
    const confirmPageUrl = `${APPWRITE.VERIFY_HOST_URL}${ROUTES.CONFIRM}`;
    const token = await account.createMagicURLToken(
      uniqueId,
      email,
      confirmPageUrl,
      true,
    );
    return token;
  },

  createSession: async ({
    userId,
    secret,
  }: {
    userId: string;
    secret: string;
  }): Promise<Models.Session> => {
    const session = account.createSession(userId, secret);
    return session;
  },

  deleteSession: async (sessionId = 'current'): Promise<void> => {
    await account.deleteSession(sessionId);
    return;
  },
};
