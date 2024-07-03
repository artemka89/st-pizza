import { FC } from 'react';

import { cn } from '@/shared/lib/cn';

interface FooterProps {
  className?: string;
}

export const AppFooter: FC<FooterProps> = ({ className }) => {
  return (
    <footer
      className={cn('mt-16 border-t p-8 text-center text-gray-500', className)}>
      &copy; 2023 Все права защищены.
    </footer>
  );
};
