import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { cn } from '@/common/utils/cn';
import '@/index.css';

export type InputProps = ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, ...props }, ref) => {
    return (
      <input
        className={cn([
          'yl-w-full yl-p-4',
          'disabled:yl-cursor-not-allowed',
          'yl-outline-none yl-placeholder:yl-text-yooldo-black-100',
          'yl-bg-yooldo-white yl-bg-opacity-80 focus:yl-bg-opacity-90',
          'yl-dark:yl-bg-yooldo-black yl-dark:yl-bg-opacity-30 yl-dark:yl-text-yooldo-white yl-dark:focus:yl-bg-opacity-60',
          'yl-rounded-xl yl-border-[1.5px] yl-border-yooldo-black-100 focus:yl-border-yooldo-sunset',
          disabled &&
            'yl-dark:yl-bg-yooldo-black-300 yl-dark:yl-bg-opacity-40 yl-dark:yl-text-opacity-40',
          className,
        ])}
        disabled={disabled}
        {...props}
        ref={ref}
      />
    );
  },
);

Input.displayName = 'yl-yooldo-input';
