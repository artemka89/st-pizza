import { FC } from 'react';

interface ProductListLayout {
  columns?: number;
  children: React.ReactNode;
}

export const ProductListLayout: FC<ProductListLayout> = ({
  columns = 4,
  children,
}) => {
  return (
    <div
      className={`my-10 grid grid-cols-[repeat(${columns},288px)] justify-center justify-items-center gap-4`}>
      {children}
    </div>
  );
};
