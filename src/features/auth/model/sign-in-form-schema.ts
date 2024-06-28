import { z } from 'zod';

export const SignInFormSchema = z.object({
  email: z.string().min(1, { message: 'обязательное боле' }).email({
    message: 'неверный',
  }),
});

export type SignInFormType = z.infer<typeof SignInFormSchema>;
