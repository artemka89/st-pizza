import { useMutation } from '@tanstack/react-query';

import { useInvalidateCart } from '@/entities/cart/';
import { cartApi } from '@/shared/api/models/cart';

import { CartItemType } from './types';

export function useCreateCartItemMutation() {
  const invalidateCart = useInvalidateCart();
  return useMutation({
    mutationKey: ['create-cart-item'],
    mutationFn: (data: CartItemType) => cartApi.createItem(data),
    onSettled: async () => {
      await invalidateCart();
    },
  });
}
