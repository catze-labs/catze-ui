import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { cn } from '../../common/utils/cn';
import '../../index.css';

export type InputProps = ComponentPropsWithoutRef<'input'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, disabled, ...props }, ref) => {
    return (
      <input
        className={cn([
          'w-full p-4',
          'disabled:cursor-not-allowed',
          'outline-none placeholder:text-yooldo-black-100',
          'bg-yooldo-white bg-opacity-80 focus:bg-opacity-90',
          'dark:bg-yooldo-black dark:bg-opacity-30 dark:text-yooldo-white dark:focus:bg-opacity-60',
          'rounded-xl border-[1.5px] border-yooldo-black-100 focus:border-yooldo-sunset',
          disabled &&
            'dark:bg-yooldo-black-300 dark:bg-opacity-40 dark:text-opacity-40',
          className,
        ])}
        disabled={disabled}
        {...props}
        ref={ref}
      />
    );
  },
);

Input.displayName = 'yooldo-input';
