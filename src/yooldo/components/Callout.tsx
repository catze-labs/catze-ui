import {
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import React, { ComponentProps } from 'react';
import { cn } from '../../common/utils/cn';
import '../../index.css';

export interface CalloutProps
  extends Omit<ComponentProps<'aside'>, 'children' | 'title'> {
  variant?: 'info' | 'warning' | 'error';
  title?: React.ReactNode;
  text?: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({
  variant = 'info',
  text,
  title,
  className,
  ...props
}) => {
  const iconByVariant = {
    info: (
      <InformationCircleIcon className="h-6 w-6 text-yooldo-another-blue" />
    ),
    warning: <ExclamationTriangleIcon className="h-6 w-6 text-yellow-300" />,
    error: <ExclamationCircleIcon className="h-6 w-6 text-red-500" />,
  };

  return (
    <aside
      className={cn([
        'flex gap-2 rounded-2xl border-[1.5px] p-4 dark:bg-yooldo-black-900 dark:bg-opacity-40',
        title && 'flex-col',
        !title && 'items-center gap-3',
        className,
      ])}
      {...props}
    >
      <header className="flex items-center gap-2">
        {iconByVariant[variant]}
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
