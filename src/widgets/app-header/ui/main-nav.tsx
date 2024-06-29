import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from '@/shared/constants';
import { cn } from '@/shared/lib/cn';
import { buttonVariants } from '@/shared/ui/button';

export interface INavItem {
  title: string;
  path: string;
}

export const navItems: INavItem[] = [
  {
    title: 'Главная',
    path: ROUTES.HOME,
  },
  {
    title: 'Меню',
    path: '/menu',
  },
  {
    title: 'Войти',
    path: ROUTES.SIGN_IN,
  },
];

interface MainNavProps {
  className?: string;
}

export const MainNav: FC<MainNavProps> = ({ className }) => {
  const linkStyle = (isActive: boolean) => {
    const style = cn(
      buttonVariants({
        variant: 'link',
        className: isActive
          ? 'hover:no-underline text-accent-foreground'
          : 'text-muted-foreground',
      }),
      'text-md',
    );
    return style;
  };

  return (
    <nav className={cn(className, 'flex items-center gap-4')}>
      {navItems.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) => linkStyle(isActive)}>
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
};
