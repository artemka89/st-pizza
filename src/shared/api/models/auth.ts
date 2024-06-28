import { ID, Models } from 'appwrite';

import { APPWRITE } from '@/shared/constants';
import { account } from '@/shared/lib/config/appwrite-config';

export const authApi = {
  createMagicUrlToken: async (email: string): Promise<Models.Token> => {
    const uniqueId = ID.unique();
    const verificationPageUrl = APPWRITE.VERIFY_PAGE_URL;
    const token = await account.createMagicURLToken(
      uniqueId,
      email,
      verificationPageUrl,
      true,
    );
    return token;
  },

  signIn: async ({
    userId,
    secret,
  }: {
    userId: string;
    secret: string;
  }): Promise<Models.Session> => {
    const session = account.createSession(userId, secret);
    return session;
  },

  signOut: async (sessionId = 'current'): Promise<void> => {
    await account.deleteSession(sessionId);
    return;
  },
};
