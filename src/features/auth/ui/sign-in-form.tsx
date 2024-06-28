import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { cn } from '@/shared/lib/cn';
import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';

import { SignInFormSchema, SignInFormType } from '../model/sign-in-form-schema';
import { useCreateMagicUrl } from '../model/use-create-magic-url';

interface LoginFormProps {
  className?: string;
}

export const SignInForm: FC<LoginFormProps> = ({ className }) => {
  const magicUrl = useCreateMagicUrl();

  const form = useForm<SignInFormType>({
    mode: 'all',
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(SignInFormSchema),
  });

  const onSubmitHandler: SubmitHandler<SignInFormType> = async ({ email }) => {
    magicUrl.mutate(email);
    magicUrl.isSuccess && form.reset();
  };

  return (
    <Form {...form}>
      <form
        className={cn('flex flex-col', className)}
        onSubmit={form.handleSubmit(onSubmitHandler)}>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='sr-only'>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder='name@example.com'
                  type='email'
                  autoCapitalize='none'
                  autoComplete='email'
                  autoCorrect='off'
                  disabled={magicUrl.isPending}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button disabled={magicUrl.isPending} type='submit' className='mt-2'>
          Войти через Email
        </Button>
      </form>
    </Form>
  );
};
