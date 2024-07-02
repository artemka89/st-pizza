import { FC } from 'react';

import { PageLayout } from '@/shared/ui/layouts/page-layout';
import { ProductCardLayout } from '@/shared/ui/layouts/product-card-layout';

export const HomePage: FC = () => {
  return (
    <PageLayout>
      <ProductCardLayout
        productItem={{
          id: '12324',
          name: 'Пицца пепперони',
          description:
            'пицца соус (томаты базилик орегано чеснок), моцарелла для пиццы, колбаса "Пепперони", бекон, перец "Халапеньо", грудка куриная, помидоры, шампиньоны св, ветчина',
          category: 'pizzas',
        }}
        imageUrl='https://cloud.appwrite.io/v1/storage/buckets/pizzas/files/667522b700108c0181bd/view?project=my-pizza-dev&mode=admin'
        className='w-[280px]'
      />
    </PageLayout>
  );
};
