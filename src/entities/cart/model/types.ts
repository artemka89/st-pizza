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

export interface CartDto {
  $id: string;
  cartItems: CartItemSchemaDto[];
  totalPrice: number;
}

export interface CartItemSchemaDto {
  $id: string;
  pizzaId: string;
  optionId: string;
  imageId: string;
  name: string;
  size: number;
  weight: number;
  price: number;
  amount: number;
}
