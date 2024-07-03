import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/shared/constants';
import { cn } from '@/shared/lib/cn';
import { Button, buttonVariants } from '@/shared/ui/button';

interface HeroProps {
  className?: string;
}

export const Hero: FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn(className, 'flex justify-between')}>
      <div className='flex max-w-md flex-col py-12'>
        <h1 className='text-4xl font-semibold'>
          Насладись
          <br />
          каждым
          <br />
          кусочком
          <span className='text-primary'>&nbsp;Пиццы</span>
        </h1>
        <p className='text-md my-6 text-muted-foreground'>
          Пицца — это недостающий кусочек, который делает каждый день
          полноценным, простая, но вкусная радость в жизни.
        </p>
        <div className='mt-auto flex gap-4'>
          <Link to={ROUTES.MENU} className={buttonVariants()}>
            Заказать
          </Link>
          <div className='flex items-center'>
            <Button variant='link' asChild className='text-accent-foreground'>
              <Link to={ROUTES.HOME}>Узнать больше {'>>'}</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className='max-w-md'>
        <img src='/assets/hero.png' alt='pizza' />
      </div>
    </section>
  );
};
