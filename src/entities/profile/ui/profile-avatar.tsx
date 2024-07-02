import { FC } from 'react';

import { cn } from '@/shared/lib/cn';
import { Avatar, AvatarFallback, AvatarImage } from '@/shared/ui/avatar';

import { getDisplayName } from '../lib/get-display-name';

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
  const avatar = getDisplayName(name);

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar ? avatarUrl : ''} className='object-cover' />
      <AvatarFallback>{avatar}</AvatarFallback>
    </Avatar>
  );
};
