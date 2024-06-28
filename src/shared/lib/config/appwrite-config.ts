import { Account, Client } from 'appwrite';

import { APPWRITE } from '@/shared/constants/appwrite';

const client = new Client()
  .setEndpoint(APPWRITE.BASE_URL)
  .setProject(APPWRITE.PROJECT_ID);

export const account = new Account(client);
