import { ChevronRightIcon } from '@heroicons/react/24/outline';
import React, { ComponentPropsWithRef } from 'react';
import { cn } from '../../common/utils/cn';
import '../../index.css';

export interface TextLinkProps
  extends Omit<ComponentPropsWithRef<'a'>, 'children'> {
  external?: boolean;
  label: string;
  icon?: React.ReactNode;
  color?: 'white' | 'sunset' | 'blue' | 'green';
}

export const TextLink = React.forwardRef<HTMLAnchorElement, TextLinkProps>(
  (
    {
      external = false,
      label,
      icon,
      className,
      href,
      color = 'white',
      ...props
    },
    ref,
  ) => {
    return (
      <a
        ref={ref}
        className={cn(['relative flex items-center gap-2', className])}
        href={href || ''}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        <span
          className={cn([
            'hover:underline',
            color === 'white' && 'text-yooldo-black dark:text-yooldo-white',
            color === 'sunset' && 'text-yooldo-sunset dark:text-yooldo-sunset',
            color === 'blue' &&
              'text-yooldo-another-blue dark:text-yooldo-another-blue',
            color === 'green' &&
              'text-yooldo-another-green dark:text-yooldo-another-green',
          ])}
        >
          {label}
        </span>
        <ChevronRightIcon
          className={cn([
            'w-5 dark:text-white',
            color === 'white' && 'text-yooldo-black dark:text-yooldo-white',
            color === 'sunset' && 'text-yooldo-sunset dark:text-yooldo-sunset',
            color === 'blue' &&
              'text-yooldo-another-blue dark:text-yooldo-another-blue',
            color === 'green' &&
              'text-yooldo-another-green dark:text-yooldo-another-green',
          ])}
        />
      </a>
    );
  },
);
