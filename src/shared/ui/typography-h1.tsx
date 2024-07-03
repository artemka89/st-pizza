import { FC, PropsWithChildren } from 'react';

export const TypographyH1: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
      {children}
    </h1>
  );
};
