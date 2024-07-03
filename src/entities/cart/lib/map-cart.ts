import { Cart, CartDto, CartItemType } from '../model/types';

export const mapCart = (data: CartDto): Cart => {
  const mapItems: CartItemType[] = data.cartItems.map((item) => ({
    id: item.$id,
    pizzaId: item.pizzaId,
    optionId: item.optionId,
    imageId: item.imageId,
    name: item.name,
    size: item.size,
    weight: item.weight,
    price: item.price,
    amount: item.amount,
  }));

  return {
    id: data.$id,
    items: mapItems,
    totalPrice: data.totalPrice,
  };
};
