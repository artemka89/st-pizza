import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/shared/constants';
import { Button } from '@/shared/ui/button';
interface LoginProps {
  className?: string;
}

export const SignInButton: FC<LoginProps> = ({ className }) => {
  return (
    <Button className={className} asChild>
      <Link to={ROUTES.SIGN_IN}>Войти</Link>
    </Button>
  );
};
