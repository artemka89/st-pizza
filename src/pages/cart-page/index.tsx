import { FC } from 'react';

import { useGetCart } from '@/entities/cart';
import { useGetUser } from '@/entities/user';
import { PageLayout } from '@/shared/ui/layouts/page-layout';

export const CartPage: FC = () => {
  const user = useGetUser();
  const cart = useGetCart(user.data?.id || '');

  return <PageLayout>{cart.data?.id}</PageLayout>;
};
