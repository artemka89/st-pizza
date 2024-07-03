import { FC } from 'react';

import {
  getPizzaImageUrl,
  PizzaOptions,
  useGetBestRatingPizzasMutation,
} from '@/entities/pizza';
import { PageLayout } from '@/shared/ui/layouts/page-layout';
import { ProductCardLayout } from '@/shared/ui/layouts/product-card-layout';
import { ProductListLayout } from '@/shared/ui/layouts/product-list-layout';
import { TypographyH2 } from '@/shared/ui/typography-h2';

import { AboutUs } from './ui/about-us';
import { ContactUs } from './ui/contact-us';
import { Hero } from './ui/hero';

export const HomePage: FC = () => {
  const bestRatingPizzas = useGetBestRatingPizzasMutation();

  return (
    <PageLayout>
      <Hero />
      <TypographyH2 align='center'>Лучший выбор</TypographyH2>
      <ProductListLayout columns={3}>
        {bestRatingPizzas.data?.map((pizza) => (
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
      <ContactUs />
      <AboutUs />
    </PageLayout>
  );
};
