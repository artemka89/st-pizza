import { FC, useEffect } from 'react';

import { ProfileAvatar } from '@/entities/profile';
import { Button } from '@/shared/ui/button';
import { selectFile } from '@/shared/ui/file';
import { Spinner } from '@/shared/ui/spinner';

interface AvatarFieldProps {
  value?: string;
  name: string;
  email: string;
  onChange: (value?: string) => void;
}

export const AvatarField: FC<AvatarFieldProps> = ({
  value,
  name,
  email,
  onChange,
}) => {
  const handleFileSelect = async () => {
    const file = await selectFile('image/*');
    file;
  };

  useEffect(() => {
    onChange('avatarId');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, ['avatarId']);

  return (
    <Button
      variant='ghost'
      className='relative block h-[100px] w-[100px] rounded-full p-0.5'
      type='button'
      onClick={handleFileSelect}>
      {false && (
        <div className='absolute inset-0 z-10 flex items-center justify-center'>
          <Spinner className='h-10 w-10' aria-label='Загрузка новой аватарки' />
        </div>
      )}
      <ProfileAvatar
        className='h-full w-full text-4xl'
        name={name || email}
        avatarUrl={value}
      />
    </Button>
  );
};
