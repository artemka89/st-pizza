import { z } from 'zod';

export const ProfileFormSchema = z.object({
  name: z.string(),
  email: z.string(),
  city: z.string(),
  street: z.string(),
  phone: z.string(),
  imageId: z.string(),
});

export type ProfileFormType = z.infer<typeof ProfileFormSchema>;
