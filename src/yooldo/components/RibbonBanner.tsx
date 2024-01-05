import { ChevronDoubleUpIcon } from '@heroicons/react/24/outline';
import { cn } from '@/common/utils/cn';
import '@/index.css';
import { useState } from 'react';

export interface RibbonBannerProps {
  className?: string;
  toggleClassName?: string;
  iconClassName?: string;
  onOpenHandler?: (open: boolean) => void;
  hideToggleIcon?: boolean;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const RibbonBanner: React.FC<RibbonBannerProps> = ({
  className,
  toggleClassName,
  iconClassName,
  onOpenHandler,
  hideToggleIcon,
  children,
  icon,
}) => {
  const [open, setOpen] = useState(true);
  return (
    <aside
      className={cn([
        'yl-relative yl-flex yl-w-full yl-items-center yl-justify-center yl-transition-all',
        'yl-min-h-[40px]',
        className,
      ])}
    >
      <div
        className={
          'yl-w-full yl-h-full yl-absolute yl-top-0 yl-left-0 yl-overflow-hidden'
        }
      >
        <span
          aria-label={'circle-0'}
          className={
            'yl-absolute -yl-top-20 yl-rounded-full yl-left-0 -yl-translate-x-1/2 yl-w-[690px] yl-h-[690px] yl-bg-[#61e0d180] yl-blur-[65px]'
          }
        />
        <span
          aria-label={'circle-3'}
          className={
            'yl-absolute yl-top-0 -yl-translate-y-1/2 yl-rounded-full -yl-right-16 yl-w-[961px] yl-h-[961px] yl-bg-[#61e0d180] yl-blur-[65px]'
          }
        />
        <span
          aria-label={'circle-1'}
          className={
            'yl-absolute -yl-bottom-28 yl-left-0 yl-w-[919px] yl-h-[919px] yl-bg-[#6194e080] yl-rounded-full yl-blur-[65px]'
          }
        />
        <span
          aria-label={'circle-4'}
          className={
            'yl-absolute -yl-top-20 -yl-right-1/2 -yl-translate-x-1/2 yl-w-[542px] yl-h-[542px] yl-bg-[#6194e080] yl-rounded-full yl-blur-[65px]'
          }
        />
        <span
          aria-label={'circle-2'}
          className={
            'yl-absolute yl-top-0 yl-left-1/4 yl-w-[584px] yl-h-[584px] yl-rounded-full yl-bg-[#E08f6180] yl-blur-[35px]'
          }
        />
      </div>
      <div
        className={cn([
          'yl-px-2 yl-w-full yl-relative yl-flex yl-flex-col yl-items-center yl-py-2',
          open && 'yl-py-7',
          !open && 'yl-animate-bounce',
        ])}
      >
        <div
          className={cn([
            'yl-text-xs yl-tracking-tight hover:yl-bg-white hover:yl-bg-opacity-10 yl-px-2 yl-py-1 yl-transition-all yl-rounded-md',
            !open && 'yl-opacity-0 yl-invisible yl-h-0',
          ])}
        >
          {children ? children : 'Please let fill out latest news for project'}
        </div>
        {!hideToggleIcon && (
          <button
            className={cn([
              'yl-absolute yl-top-full yl-left-1/2 -yl-translate-x-1/2 yl-flex yl-h-7 yl-w-7 yl-items-center yl-justify-center yl-rounded-full hover:yl-bg-[#ffffff20]',
              !open && '-yl-translate-y-[calc(50%_+_4px)]',
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
              <ChevronDoubleUpIcon
                className={cn([
                  'yl-h-5 yl-w-5 yl-text-yooldo-white yl-transition-transform',
                  !open && 'yl-rotate-180',
                  iconClassName,
                ])}
              />
            )}
          </button>
        )}
      </div>
    </aside>
  );
};
