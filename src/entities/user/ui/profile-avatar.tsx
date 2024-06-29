import { FC } from 'react';

import { getUserDisplayName } from '@/entities/user';
import { cn } from '@/shared/lib/cn';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';

interface ProfileAvatarProps {
  className?: string;
  name: string;
  avatarUrl?: string;
}

export const ProfileAvatar: FC<ProfileAvatarProps> = ({
  name,
  avatarUrl,
  className,
}) => {
  const avatar = getUserDisplayName(name);

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatarUrl} className='object-cover' />
      <AvatarFallback>{avatar}</AvatarFallback>
    </Avatar>
  );
};
