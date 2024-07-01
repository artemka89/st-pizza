import { FC, useEffect } from 'react';

import { ProfileAvatar } from '@/entities/profile';
import { Button } from '@/shared/ui/button';
import { selectFile } from '@/shared/ui/file';
import { Spinner } from '@/shared/ui/spinner';

import { useCreateAvatar } from '../model/use-create-avatar';

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
  const { mutate, data, isPending } = useCreateAvatar();

  const handleFileSelect = async () => {
    const file = await selectFile('image/*');
    mutate(file);
  };

  useEffect(() => {
    onChange(data?.$id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.$id]);

  return (
    <Button
      variant='ghost'
      className='relative block h-[100px] w-[100px] rounded-full p-0.5'
      type='button'
      onClick={handleFileSelect}>
      {isPending && (
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
