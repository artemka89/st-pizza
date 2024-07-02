import { FC } from 'react';

import { PageLayout } from '@/shared/ui/layouts/page-layout';
import { PizzaList } from '@/widgets/pizza-list';

export const HomePage: FC = () => {
  return (
    <PageLayout>
      <PizzaList />
    </PageLayout>
  );
};
