import { Navigate } from 'react-router-dom';

import { useConfirmEmail } from '@/features/auth';
import { ROUTES } from '@/shared/constants';
import { PageLayout } from '@/shared/ui/layouts/page-layout';
import { PageSpinner } from '@/shared/ui/page-spinner';

export const ConfirmEmailPage = () => {
  const { isPending, isError } = useConfirmEmail();

  if (isPending) return <PageSpinner />;

  if (isError)
    return (
      <PageLayout className='items-center'>
        <div>Ошибка подтверждения Email, попробуйте позже</div>
      </PageLayout>
    );
  return <Navigate to={ROUTES.HOME} replace={true} />;
};
