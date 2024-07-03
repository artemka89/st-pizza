import { FC } from 'react';

import { CartItem, useGetCart } from '@/entities/cart';
import { getPizzaImageUrl } from '@/entities/pizza';
import { useGetUser } from '@/entities/user';
import { PageLayout } from '@/shared/ui/layouts/page-layout';

export const CartPage: FC = () => {
  const user = useGetUser();
  const cart = useGetCart(user.data?.id || '');

  return (
    <PageLayout>
      {cart.data?.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          imageUrl={getPizzaImageUrl({ id: item.imageId }).toString()}
        />
      ))}
    </PageLayout>
  );
};
