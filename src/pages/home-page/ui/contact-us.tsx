import { FC } from 'react';

import { cn } from '@/shared/lib/cn';
import { TypographyH2 } from '@/shared/ui/typography-h2';

interface ContactUsProps {
  className?: string;
}

export const ContactUs: FC<ContactUsProps> = ({ className }) => {
  return (
    <section className={cn('my-8 text-center', className)} id={'contact'}>
      <TypographyH2>Связаться с нами</TypographyH2>
      <div className='mt-4'>
        <a className='text-2xl text-gray-500 underline' href='tel:+46738123123'>
          +7 738 123 123 12
        </a>
      </div>
    </section>
  );
};
