import { FC } from 'react';

import { ProductCard } from '@/entities/product';
import { PageLayout } from '@/shared/ui/layouts/page-layout';

export const HomePage: FC = () => {
  return (
    <PageLayout>
      <ProductCard
        productItem={{
          id: '12324',
          name: 'Пицца пепперони',
          description:
            'пицца соус (томаты базилик орегано чеснок), моцарелла для пиццы, колбаса "Пепперони", бекон, перец "Халапеньо", грудка куриная, помидоры, шампиньоны св, ветчина',
          category: 'pizzas',
          imageId: '667437510039c8d566c2',
        }}
        className='w-[280px]'
      />
    </PageLayout>
  );
};
