import { FC } from 'react';
import { Link } from 'react-router-dom';
import { LogOut, Settings, User } from 'lucide-react';

import { ProfileAvatar } from '@/entities/profile';
import { useGetUser } from '@/entities/user';
import { useSignOut } from '@/features/auth';
import { SignInButton } from '@/features/auth';
import { ROUTES } from '@/shared/constants';
import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu';

interface ProfileProps {
  className?: string;
}

export const Profile: FC<ProfileProps> = ({ className }) => {
  const user = useGetUser();
  const signOut = useSignOut();

  const onCLickLogOut = () => {
    signOut.mutate();
  };

  if (user.isPending && user.fetchStatus === 'fetching')
    return (
      <div className='flex items-center'>
        <Button
          variant='ghost'
          size='icon'
          className='h-8 w-8 self-center rounded-full p-px'>
          <ProfileAvatar name={''} />
        </Button>
      </div>
    );

  if (!user.data) return <SignInButton />;

  return (
    <div className={cn('flex items-center', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            size='icon'
            className='h-8 w-8 self-center rounded-full p-px'>
            <ProfileAvatar name={user.data.name || user.data.email} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='mr-2 w-56'>
          <DropdownMenuLabel>
            <p>Мой аккаунт</p>
            <p className='overflow-hidden text-ellipsis text-xs text-muted-foreground'>
              {user.data.name || user.data.email}
            </p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild className='cursor-pointer'>
              <Link to={ROUTES.PROFILE} className='flex items-center'>
                <User className='mr-2 h-4 w-4' />
                <span>Профиль</span>
              </Link>
            </DropdownMenuItem>
            {false && (
              <DropdownMenuItem asChild className='cursor-pointer'>
                <Link to={`/admin`} className='flex items-center'>
                  <Settings className='mr-2 h-4 w-4' />
                  <span>Админ панель</span>
                </Link>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem
              onClick={onCLickLogOut}
              disabled={signOut.isPending}
              className='flex cursor-pointer items-center'>
              <LogOut className='mr-2 h-4 w-4' />
              <span>Выход</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
