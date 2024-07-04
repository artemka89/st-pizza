import { z } from 'zod';

import { APPWRITE } from '@/shared/constants';
import { account, databases } from '@/shared/lib/config/appwrite-config';

const CartItemSchemaDto = z.object({
  $id: z.string(),
  pizzaId: z.string(),
  optionId: z.string(),
  imageId: z.string(),
  name: z.string(),
  size: z.number(),
  weight: z.number(),
  price: z.number(),
  amount: z.number(),
});

const CartSchemaDto = z.object({
  $id: z.string(),
  cartItems: CartItemSchemaDto.array(),
  totalPrice: z.number(),
});

type CartDto = z.infer<typeof CartSchemaDto>;

export interface CartItemType {
  id: string;
  pizzaId: string;
  optionId: string;
  imageId: string;
  name: string;
  size: number;
  weight: number;
  price: number;
  amount: number;
}

export interface UserCartPreferences {
  isCart: boolean;
}

export const cartApi = {
  createCart: async (id: string): Promise<CartDto> => {
    const cart = await databases.createDocument(
      APPWRITE.DATABASE_ID,
      APPWRITE.CARTS_COLLECTION_ID,
      id,
      { cartItems: [] },
    );
    return CartSchemaDto.parse(cart);
  },

  getCart: async (id: string): Promise<CartDto> => {
    const cart = await databases.getDocument(
      APPWRITE.DATABASE_ID,
      APPWRITE.CARTS_COLLECTION_ID,
      id,
    );

    return CartSchemaDto.parse(cart);
  },

  createItem: async (data: CartItemType): Promise<CartDto> => {
    const item = {
      pizzaId: data.pizzaId,
      optionId: data.optionId,
      imageId: data.imageId,
      name: data.name,
      size: data.size,
      weight: data.weight,
      price: data.price,
      amount: data.amount,
    };

    const cart = await databases.updateDocument(
      APPWRITE.DATABASE_ID,
      APPWRITE.CARTS_COLLECTION_ID,
      data.id,
      { cartItems: [item] },
    );
    return CartSchemaDto.parse(cart);
  },

  updateCartPreferences: async (data: UserCartPreferences) => {
    await account.updatePrefs(data);
  },
};
