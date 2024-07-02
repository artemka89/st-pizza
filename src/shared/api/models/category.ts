import { z } from 'zod';

import { APPWRITE } from '@/shared/constants';
import { databases } from '@/shared/lib/config/appwrite-config';

export const CategoryDtoSchema = z.object({
  $id: z.string(),
  name: z.string(),
});

export type CategoryDto = z.infer<typeof CategoryDtoSchema>;

export const pizzaCategoryApi = {
  getCategories: async (): Promise<CategoryDto[]> => {
    const category = await databases.listDocuments(
      APPWRITE.DATABASE_ID,
      APPWRITE.PIZZA_CATEGORIES_COLLECTION_ID,
    );
    return CategoryDtoSchema.array().parse(category.documents);
  },
};
