import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { cn } from '../../common/utils/cn';
import '../../index.css';

type ColorScheme = 'purple' | 'blue' | 'green' | 'sunset';
export interface TopBtnProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'color'> {
  color?: ColorScheme;
}
export const TopScrollButton = forwardRef<HTMLButtonElement, TopBtnProps>(
  ({ className, color = 'sunset', onClick, ...props }, ref) => {
    return (
      <button
        className={cn([
          'z-3 h-10 w-10 rounded-full',
          'fixed bottom-6 right-6 p-2 md:bottom-12 md:right-12',
          color === 'sunset' && 'bg-[#ff5c0026]',
          color === 'blue' && 'bg-[#0085ff26]',
          color === 'green' && 'bg-[#13d08126]',
          color === 'purple' && 'bg-[#9b00d126]',
          className,
        ])}
        onClick={(e) => {
          e.preventDefault();
          window?.scrollTo({ top: 0, behavior: 'smooth' });
          onClick?.(e);
        }}
        {...props}
        ref={ref}
      >
        <ArrowUpIcon
          className={cn([
            'stroke-[3]',
            color === 'sunset' && 'text-yooldo-sunset',
            color === 'blue' && 'text-yooldo-another-blue',
            color === 'green' && 'text-yooldo-another-green',
            color === 'purple' && 'text-yooldo-another-purple',
          ])}
        />
      </button>
    );
  },
);

TopScrollButton.displayName = 'yooldo-top-scroll-button';
