import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { cn } from '@/common/utils/cn';
import '@/index.css';

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
          'yl-z-3 yl-h-10 yl-w-10 yl-rounded-full',
          'yl-fixed yl-bottom-6 yl-right-6 yl-p-2 yl-md:bottom-12 yl-md:right-12',
          color === 'sunset' && 'yl-bg-[#ff5c0026]',
          color === 'blue' && 'yl-bg-[#0085ff26]',
          color === 'green' && 'yl-bg-[#13d08126]',
          color === 'purple' && 'yl-bg-[#9b00d126]',
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
            'yl-stroke-[3]',
            color === 'sunset' && 'yl-text-yooldo-sunset',
            color === 'blue' && 'yl-text-yooldo-another-blue',
            color === 'green' && 'yl-text-yooldo-another-green',
            color === 'purple' && 'yl-text-yooldo-another-purple',
          ])}
        />
      </button>
    );
  },
);

TopScrollButton.displayName = 'yl-yooldo-top-scroll-button';
