export interface Pizza {
  id: string;
  name: string;
  category: string;
  description: string;
  options: PizzaOption[];
  imageId: string;
  categories: PizzaCategory[];
  categoryIds: string[];
  rating: number;
}

export interface PizzaOption {
  id: string;
  size: number;
  weight: number;
  price: number;
}

export interface PizzaCategory {
  id: string;
  name: string;
}

export interface PizzaDto {
  $id: string;
  name: string;
  imageId: string;
  category: string;
  description: string;
  categoryIds: string[];
  rating: number;
  pizzaOptions: {
    $id: string;
    size: number;
    weight: number;
    price: number;
  }[];
  pizzaCategories: {
    $id: string;
    name: string;
  }[];
}
