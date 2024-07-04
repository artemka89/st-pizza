import { FC } from 'react';

import { CartItem, useGetCart } from '@/entities/cart';
import { getPizzaImageUrl } from '@/entities/pizza';
import { useGetUser } from '@/entities/user';
import { CartItemControl, ClearCartButton } from '@/features/cart';
import { PageLayout } from '@/shared/ui/layouts/page-layout';
import { TypographyH2 } from '@/shared/ui/typography-h2';

import { CartItemList } from './cart-item-list';

export const CartPage: FC = () => {
  const user = useGetUser();
  const cart = useGetCart(user.data?.id || '');

  return (
    <PageLayout>
      <TypographyH2 align='center'>Корзина</TypographyH2>
      <CartItemList actions={<ClearCartButton />}>
        {cart.data?.items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            imageUrl={getPizzaImageUrl({ id: item.imageId }).toString()}
            actions={
              <CartItemControl
                item={item}
                decrease={() => {}}
                increase={() => {}}
                removeItem={() => {}}
              />
            }
          />
        ))}
      </CartItemList>
    </PageLayout>
  );
};
