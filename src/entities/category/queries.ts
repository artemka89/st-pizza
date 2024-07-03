import { QueryOptions, useQueryClient } from '@tanstack/react-query';

import { pizzaCategoryApi } from '@/shared/api/models/category';

const getCategoriesKey = 'pizza-categories';

export function getPizzaCategoriesQuery() {
  return {
    queryKey: [getCategoriesKey],
    queryFn: () => pizzaCategoryApi.getCategories(),
  } satisfies QueryOptions;
}

export function useInvalidatePizzaCategories() {
  const queryClient = useQueryClient();
  return () =>
    queryClient.invalidateQueries({
      queryKey: [getCategoriesKey],
      exact: true,
    });
}
