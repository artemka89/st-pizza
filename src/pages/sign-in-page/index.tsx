import { FC } from 'react';

import { SignInForm } from '@/features/auth';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { PageLayout } from '@/shared/ui/layouts/page-layout';

export const SignInPage: FC = () => {
  return (
    <PageLayout className='flex justify-center'>
      <div className='mt-[200px] w-full max-w-[350px]'>
        <Card>
          <CardHeader className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold tracking-tight'>
              Войти в аккаунт
            </h1>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <SignInForm />
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};
