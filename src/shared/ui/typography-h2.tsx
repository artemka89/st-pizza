import { FC, PropsWithChildren } from 'react';

export const TypographyH2: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight text-primary first:mt-0'>
      {children}
    </h2>
  );
};
