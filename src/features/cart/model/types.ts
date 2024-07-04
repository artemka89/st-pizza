export interface Cart {
  id: string;
  items: CartItemType[];
  totalPrice: number;
}

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
