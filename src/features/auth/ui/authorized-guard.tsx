import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { useGetUser } from '@/entities/user';
import { ROUTES } from '@/shared/constants';
import { PageSpinner } from '@/shared/ui/page-spinner';

interface AuthorizedGuardProps {
  children: React.ReactNode;
}

export const AuthorizedGuard: FC<AuthorizedGuardProps> = ({ children }) => {
  const { status, fetchStatus } = useGetUser();
  const isAuthorized = status === 'success';
  const location = useLocation();

  if (fetchStatus === 'fetching') return <PageSpinner />;

  if (!isAuthorized) {
    return <Navigate to={ROUTES.SIGN_IN} state={{ from: location }} replace />;
  }

  return children;
};
