import { FC } from 'react';

import { cn } from '../lib/cn';

interface TypographyH2Props {
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

export const TypographyH2: FC<TypographyH2Props> = ({
  align = 'center',
  children,
}) => {
  return (
    <h2
      className={cn(
        'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-primary first:mt-0',
        { left: 'text-left', center: 'text-center', right: 'text-right' }[
          align
        ],
      )}>
      {children}
    </h2>
  );
};
