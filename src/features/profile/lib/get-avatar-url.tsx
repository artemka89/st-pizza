import { profileApi } from '@/shared/api/models/profile';

export function getAvatarUrl(id: string) {
  const url = profileApi.getAvatarUrl(id);
  return url.toString();
}
