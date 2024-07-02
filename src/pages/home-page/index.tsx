import { FC } from 'react';

import { getPizzaImageUrl, PizzaOptions, useGetPizzas } from '@/entities/pizza';
import { PageLayout } from '@/shared/ui/layouts/page-layout';
import { ProductCardLayout } from '@/shared/ui/layouts/product-card-layout';
import { ProductListLayout } from '@/shared/ui/layouts/product-list-layout';

export const HomePage: FC = () => {
  const pizzas = useGetPizzas();

  if (pizzas.isPending) return '...Loading';

  return (
    <PageLayout>
      <ProductListLayout>
        {pizzas.data?.map((pizza) => (
          <ProductCardLayout
            key={pizza.id}
            productItem={pizza}
            actions={
              <PizzaOptions options={pizza.options} addToCart={() => {}} />
            }
            imageUrl={() => getPizzaImageUrl({ id: pizza.imageId })}
          />
        ))}
      </ProductListLayout>
    </PageLayout>
  );
};
