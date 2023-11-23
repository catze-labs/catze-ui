import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import React, { ComponentProps } from 'react';
import { cn } from '@/common/utils/cn';
import '@/index.css';

type CalloutVariantType = 'outline' | 'solid';
type CalloutType = 'info' | 'warning' | 'error';
export interface CalloutProps
  extends Omit<ComponentProps<'aside'>, 'children' | 'title'> {
  variant?: CalloutVariantType;
  type?: CalloutType;
  title?: React.ReactNode;
  text?: React.ReactNode;
}

const colorByType: Record<CalloutType, string> = {
  info: 'dark:yl-text-yooldo-another-blue yl-text-yooldo-another-blue',
  warning: 'dark:yl-text-yellow-300 yl-text-yellow-300',
  error: 'dark:yl-text-red-500 yl-text-red-500',
};

const boxStyleByVariant: Record<CalloutVariantType, string> = {
  outline:
    'dark:yl-bg-yooldo-black-900 dark:yl-bg-opacity-40 yl-border-[1.5px]',
  solid: 'yl-bg-yooldo-white dark:yl-bg-yooldo-black-400',
};

export const Callout: React.FC<CalloutProps> = ({
  variant = 'outline',
  type = 'info',
  text,
  title,
  className,
  ...props
}) => {
  const iconByVariant = {
    info: (
      <InformationCircleIcon
        className={cn([
          'yl-h-6 yl-w-6 yl-text-yooldo-another-blue',
          colorByType[type],
        ])}
      />
    ),
    warning: (
      <ExclamationTriangleIcon
        className={cn(['yl-h-6 yl-w-6 yl-text-yellow-300', colorByType[type]])}
      />
    ),
    error: (
      <ExclamationCircleIcon
        className={cn(['yl-h-6 yl-w-6 yl-text-red-500', colorByType[type]])}
      />
    ),
  };

  return (
    <aside
      className={cn([
        'yl-flex yl-gap-2 yl-rounded-2xl yl-border-[1.5px] yl-p-4 dark:yl-bg-yooldo-black-900 dark:yl-bg-opacity-40',
        boxStyleByVariant[variant],
        title && 'yl-flex-col',
        !title && 'yl-items-center yl-gap-3',
        className,
      ])}
      {...props}
    >
      <header className="yl-flex yl-items-center yl-gap-2">
        {iconByVariant[type]}
        {title && (
          <h3
            className={
              'yl-flex-grow yl-text-yooldo-black dark:yl-text-yooldo-white'
            }
          >
            {title}
          </h3>
        )}
      </header>

      <p
        className={
          'yl-whitespace-pre-line yl-text-xs yl-text-yooldo-black dark:yl-text-yooldo-white'
        }
      >
        {text}
      </p>
    </aside>
  );
};
