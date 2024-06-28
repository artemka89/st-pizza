import { cn } from '../lib/cn';

import { Spinner } from './spinner';

export function PageSpinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-background',
        className,
      )}>
      <Spinner />
    </div>
  );
}
