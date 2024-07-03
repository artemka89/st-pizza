import { FC } from 'react';

import { cn } from '@/shared/lib/cn';
import { TypographyH2 } from '@/shared/ui/typography-h2';

interface AboutUsProps {
  className?: string;
}

export const AboutUs: FC<AboutUsProps> = ({ className }) => {
  return (
    <section className={cn('text-center', className)} id={'about'}>
      <TypographyH2>Наша история</TypographyH2>
      <div className='mx-auto mt-4 flex max-w-md flex-col gap-4 text-gray-500'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima
          odit recusandae. Illum ipsa non repudiandae? Eum ipsam iste quos
          suscipit tempora? Aperiam esse fugiat inventore laboriosam officiis
          quam rem!
        </p>
        <p>
          At consectetur delectus ducimus est facere iure molestias obcaecati
          quaerat vitae voluptate? Aspernatur dolor explicabo iste minus
          molestiae pariatur provident quibusdam saepe?
        </p>
        <p>
          Laborum molestias neque nulla obcaecati odio quia quod reprehenderit
          sit vitae voluptates? Eos, tenetur.
        </p>
      </div>
    </section>
  );
};
