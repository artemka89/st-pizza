import { FC, useState } from 'react';

import { CategoryButton, useGetPizzaCategories } from '@/entities/category';
import { getPizzaImageUrl, PizzaOptions, useGetPizzas } from '@/entities/pizza';
import { CategoryList } from '@/shared/ui/layouts/category-list-layout';
import { PageLayout } from '@/shared/ui/layouts/page-layout';
import { ProductCardLayout } from '@/shared/ui/layouts/product-card-layout';
import { ProductListLayout } from '@/shared/ui/layouts/product-list-layout';

export const HomePage: FC = () => {
  const categories = useGetPizzaCategories();
  const [activePizzaCategoryId, serActivePizzaCategoryId] = useState('');

  const pizzas = useGetPizzas(activePizzaCategoryId);

  return (
    <PageLayout>
      <CategoryList>
        <CategoryButton
          category={{ id: '', name: 'Все' }}
          activeCategoryId={activePizzaCategoryId}
          setActiveCategoryId={serActivePizzaCategoryId}
        />
        {categories.data?.map((category) => (
          <CategoryButton
            key={category.id}
            category={category}
            activeCategoryId={activePizzaCategoryId}
            setActiveCategoryId={serActivePizzaCategoryId}
          />
        ))}
      </CategoryList>
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
