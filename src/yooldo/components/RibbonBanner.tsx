import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { cn } from '@/common/utils/cn';
import '@/index.css';
import { useState } from 'react';

export interface RibbonBannerProps {
  className?: string;
  toggleClassName?: boolean;
  onOpenHandler?: (open: boolean) => void;
  hideToggleIcon?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const RibbonBanner: React.FC<RibbonBannerProps> = ({
  className,
  toggleClassName,
  onOpenHandler,
  hideToggleIcon,
  children,
  icon,
}) => {
  const [open, setOpen] = useState(true);
  return (
    <aside
      className={cn([
        'yl-relative yl-flex yl-min-h-[40px] yl-w-full yl-items-center yl-justify-center yl-bg-yooldo-minting-800 yl-transition-all',
        !open && 'yl-min-h-0 yl-h-0',
        className,
      ])}
    >
      <div
        className={
          'lg:yl-container yl-p-2 yl-w-full lg:yl-relative yl-flex yl-flex-col yl-items-center'
        }
      >
        <div
          className={cn([
            'yl-text-xs yl-tracking-tight hover:yl-bg-white hover:yl-bg-opacity-10 yl-px-2 yl-transition-all',
            !open && 'yl-opacity-0 yl-invisible yl-h-0',
          ])}
        >
          {children ? children : 'Default State!'}
        </div>
        {!hideToggleIcon && (
          <button
            className={cn([
              'yl-absolute yl-top-full yl-left-1/2 -yl-translate-x-1/2 yl-flex yl-h-6 yl-w-6 -yl-translate-y-1/3 yl-items-center yl-justify-center',
              'yl-rounded-full yl-bg-yooldo-minting-700 yl-opacity-80 hover:yl-opacity-100',
              !open && '-yl-translate-y-[110%]',
              toggleClassName,
            ])}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpenHandler?.(!open);
              setOpen((prev) => !prev);
            }}
          >
            {icon ? (
              icon
            ) : (
              <ArrowUpIcon
                className={cn([
                  'yl-h-3 yl-w-3 yl-text-yooldo-white yl-stroke-[3] yl-transition-transform',
                  !open && 'yl-rotate-180',
                ])}
              />
            )}
          </button>
        )}
      </div>
    </aside>
  );
};
