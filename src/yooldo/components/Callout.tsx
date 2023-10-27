import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import React, { ComponentProps } from 'react';
import { cn } from '../../common/utils/cn';
import '../../index.css';

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
  info: 'dark:text-yooldo-another-blue text-yooldo-another-blue',
  warning: 'dark:text-yellow-300 text-yellow-300',
  error: 'dark:text-red-500 text-red-500',
};

const boxStyleByVariant: Record<CalloutVariantType, string> = {
  outline: 'dark:bg-yooldo-black-900 dark:bg-opacity-40 border-[1.5px]',
  solid: 'bg-yooldo-black-400',
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
        className={cn(['h-6 w-6 text-yooldo-another-blue', colorByType[type]])}
      />
    ),
    warning: (
      <ExclamationTriangleIcon
        className={cn(['h-6 w-6 text-yellow-300', colorByType[type]])}
      />
    ),
    error: (
      <ExclamationCircleIcon
        className={cn(['h-6 w-6 text-red-500', colorByType[type]])}
      />
    ),
  };

  return (
    <aside
      className={cn([
        'flex gap-2 rounded-2xl border-[1.5px] p-4 dark:bg-yooldo-black-900 dark:bg-opacity-40',
        boxStyleByVariant[variant],
        title && 'flex-col',
        !title && 'items-center gap-3',
        className,
      ])}
      {...props}
    >
      <header className="flex items-center gap-2">
        {iconByVariant[type]}
        {title && (
          <h3 className={'flex-grow text-yooldo-black dark:text-yooldo-white'}>
            {title}
          </h3>
        )}
      </header>

      <p
        className={
          'whitespace-pre-line text-xs text-yooldo-black dark:text-yooldo-white'
        }
      >
        {text}
      </p>
    </aside>
  );
};
