import { FC } from 'react';

import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import { PageLayout } from '@/shared/ui/layouts/page-layout';

export const VerifyRequestPage: FC = () => {
  return (
    <PageLayout className='flex justify-center'>
      <div className='mt-[200px] w-full max-w-[400px]'>
        <Card>
          <CardHeader className='flex flex-col space-y-2 text-center'>
            <h1 className='text-2xl font-semibold'>
              Проверьте свою электронную почту
            </h1>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <p className='px-0 text-center text-sm text-muted-foreground'>
              Ссылка для входа была отправлена на ваш адрес электронной почты.
            </p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};
