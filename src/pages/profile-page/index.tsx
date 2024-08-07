import { FC } from 'react';

import { ProfileForm } from '@/features/profile';
import { PageLayout } from '@/shared/ui/layouts/page-layout';

export const ProfilePage: FC = () => {
  return (
    <PageLayout>
      <h1 className='text-center text-2xl font-semibold tracking-tight'>
        Профиль
      </h1>
      <ProfileForm />
    </PageLayout>
  );
};
