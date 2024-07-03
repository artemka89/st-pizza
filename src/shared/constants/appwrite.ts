export const APPWRITE = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
  PROJECT_ID: import.meta.env.VITE_API_PROJECT_ID,
  DATABASE_ID: 'pizzas',

  PROFILES_COLLECTION_ID: 'profiles',
  AVATARS_BUCKET_ID: 'avatars',

  PIZZAS_COLLECTION_ID: 'pizzas',
  PIZZAS_BUCKET_ID: 'pizzas',
  PIZZA_CATEGORIES_COLLECTION_ID: 'pizza-categories',

  VERIFY_HOST_URL: import.meta.env.VITE_VERIFY_HOST_URL,
};
