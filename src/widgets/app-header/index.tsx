import { FC } from 'react';

import { CartButton } from './ui/cart-button';
import { HeaderLayout } from './ui/header-layout';
import { Logo } from './ui/logo';
import { MainNav } from './ui/main-nav';
import { Profile } from './ui/profile';

interface AppHeaderProps {
  variant: 'auth' | 'public' | 'private';
}

export const AppHeader: FC<AppHeaderProps> = ({ variant }) => {
  const isProfile = variant !== 'auth';

  return (
    <HeaderLayout
      logo={<Logo />}
      nav={<MainNav />}
      profile={isProfile && <Profile />}
      actions={<>{isProfile && <CartButton />}</>}
    />
  );
};
