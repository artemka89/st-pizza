import { FC } from 'react';

import { getPizzaImageUrl, PizzaOptions, useGetPizzas } from '@/entities/pizza';
import { ProductCardLayout } from '@/shared/ui/layouts/product-card-layout';
import { ProductListLayout } from '@/shared/ui/layouts/product-list-layout';

export const Pizzas: FC = () => {
  const pizzas = useGetPizzas();

  if (pizzas.isPending) return '...Loading';

  return (
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
  );
};
