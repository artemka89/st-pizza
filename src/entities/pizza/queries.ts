import { QueryOptions, useQueryClient } from '@tanstack/react-query';

import { pizzaApi } from '@/shared/api/models/pizza';

const pizzasKey = 'pizzas';
const bestRatingKey = 'best-rating';

export function getPizzasQuery(category: string) {
  return {
    queryKey: [pizzasKey, category],
    queryFn: async () => {
      const pizzas = await pizzaApi.getPizzas(category);
      return pizzas;
    },
  } satisfies QueryOptions;
}

export function useInvalidatePizzas() {
  const queryClient = useQueryClient();
  return () => queryClient.invalidateQueries({ queryKey: [pizzasKey] });
}

export function getBeatRatingPizzasQuery(amount: number) {
  return {
    queryKey: [pizzasKey, bestRatingKey, amount],
    queryFn: () => pizzaApi.getBestRatingPizzas(amount),
  } satisfies QueryOptions;
}

export function useInvalidateBeatRatingPizzas() {
  const queryClient = useQueryClient();
  return () =>
    queryClient.invalidateQueries({ queryKey: [pizzasKey, bestRatingKey] });
}
