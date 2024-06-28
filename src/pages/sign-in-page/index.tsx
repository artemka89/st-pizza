import { FC } from 'react';

import { SignInForm } from '@/features/auth';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';

export const SignInPage: FC = () => {
  return (
    <div className='container relative flex-col items-center justify-center self-center pt-24'>
      <Card className='mx-auto max-w-[350px]'>
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
  );
};
