import { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';

import { Button } from '@/shared/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';

import { getDefaultValues } from '../lib/get-default-values';
import { ProfileFormSchema, ProfileFormType } from '../model/form-schema';
import { UserProfile } from '../model/types';

import { AvatarField } from './avatar-field';

interface ProfileFormProps {
  profile: UserProfile;
  isLoading: boolean;
  isSuccess: boolean;
  updateData: (data: UserProfile) => void;
}

export const ProfileForm: FC<ProfileFormProps> = ({
  profile,
  isLoading,
  isSuccess,
  updateData,
}) => {
  const form = useForm<ProfileFormType>({
    mode: 'onChange',
    defaultValues: getDefaultValues(profile),
    resolver: zodResolver(ProfileFormSchema),
  });

  const resetForm = () => {
    form.reset(getDefaultValues(profile));
  };

  useEffect(() => {
    resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const onSubmitHandler: SubmitHandler<ProfileFormType> = (data) => {
    updateData({ id: profile.id, ...data });
  };
  return (
    <Form {...form}>
      <form
        className='flex w-full flex-col gap-3'
        onSubmit={form.handleSubmit(onSubmitHandler)}>
        <div className='flex gap-5'>
          <FormField
            control={form.control}
            name='imageId'
            render={({ field }) => (
              <FormItem className='space-y-0'>
                <FormLabel>Аватарка</FormLabel>
                <FormControl>
                  <AvatarField
                    value={'imageUrl'}
                    name={''}
                    email={''}
                    onChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <div className='flex w-full flex-col gap-3'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem className='space-y-0'>
                  <FormLabel>Имя</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Имя'
                      type='text'
                      autoCapitalize='none'
                      autoComplete='name'
                      autoCorrect='off'
                      disabled={false}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='space-y-0'>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Email'
                      type='text'
                      autoCapitalize='none'
                      autoComplete='email'
                      autoCorrect='off'
                      disabled={true}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <FormLabel>Телефон *</FormLabel>
              <FormControl>
                <Input
                  placeholder='8 (---) --- -- --'
                  type='text'
                  autoCapitalize='none'
                  autoComplete='phone'
                  autoCorrect='off'
                  disabled={false}
                  className=''
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='city'
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <FormLabel>Город *</FormLabel>
              <FormControl>
                <Input
                  placeholder='Город'
                  type='text'
                  autoCapitalize='none'
                  autoComplete='city'
                  autoCorrect='off'
                  disabled={false}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='street'
          render={({ field }) => (
            <FormItem className='space-y-0'>
              <FormLabel>Улица *</FormLabel>
              <FormControl>
                <Input
                  placeholder='Улица'
                  type='text'
                  autoCapitalize='none'
                  autoComplete='street'
                  autoCorrect='off'
                  disabled={false}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className='flex gap-2'>
          <Button
            disabled={isLoading || !form.formState.isDirty}
            type='submit'
            className='w-full'>
            Сохранить
          </Button>
          {form.formState.isDirty && (
            <Button type='button' onClick={resetForm}>
              <X />
            </Button>
          )}
        </div>
      </form>
    </Form>
  );
};
