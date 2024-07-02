import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useGetUser } from '@/entities/user';
import { ROUTES } from '@/shared/constants';

interface AuthorizedGuardProps {
  children: React.ReactNode;
}

export const AuthorizedGuard: FC<AuthorizedGuardProps> = ({ children }) => {
  const { status, fetchStatus } = useGetUser();
  const isAuthorized = status === 'success';
  const location = useLocation();

  if (!isAuthorized && fetchStatus !== 'fetching') {
    return <Navigate to={ROUTES.SIGN_IN} state={{ from: location }} replace />;
  }

  return children;
};
