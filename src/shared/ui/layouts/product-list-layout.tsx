import { FC, PropsWithChildren } from 'react';

export const ProductListLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='grid w-full grid-cols-product-card justify-center gap-4'>
      {children}
    </div>
  );
};
