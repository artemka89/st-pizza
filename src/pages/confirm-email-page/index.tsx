import { Navigate } from 'react-router-dom';

import { useConfirmEmail } from '@/features/auth';
import { ROUTES } from '@/shared/constants';
import { PageSpinner } from '@/shared/ui/page-spinner';

export const ConfirmEmailPage = () => {
  const { status } = useConfirmEmail();

  if (status === 'pending') return <PageSpinner />;

  return <Navigate to={ROUTES.HOME} replace={true} />;
};
