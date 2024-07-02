import { FC } from 'react';

import { getPizzaImageUrl, PizzaOptions, useGetPizzas } from '@/entities/pizza';
import { ProductCardLayout } from '@/shared/ui/layouts/product-card-layout';

export const PizzaList: FC = () => {
  const pizzas = useGetPizzas();

  if (pizzas.isPending) return '...Loading';

  return (
    <div className='grid w-full grid-cols-product-card justify-center'>
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
    </div>
  );
};
