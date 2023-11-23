import { XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/common/utils/cn';
import '@/index.css';

export interface RibbonBannerProps {
  className?: string;
  hidden?: boolean;
  onChange?: (open: boolean) => void;
  hideCloseIcon?: boolean;
  children?: React.ReactNode;
}

export const RibbonBanner: React.FC<RibbonBannerProps> = ({
  className,
  hidden,
  onChange,
  hideCloseIcon,
  children,
}) => {
  return (
    <aside
      className={cn([
        'yl-relative yl-flex yl-min-h-[40px] yl-w-full yl-items-center yl-justify-center yl-bg-yooldo-minting-800',
      ])}
    >
      <div className={'lg:yl-container yl-p-2 yl-w-full lg:yl-relative'}>
        {children ? (
          children
        ) : (
          <span
            className={
              'yl-flex yl-justify-center yl-text-center yl-text-xs yl-tracking-tight hover:yl-bg-white hover:yl-bg-opacity-10'
            }
          >
            Default State!
          </span>
        )}
        <button
          className={
            'yl-absolute yl-right-2 yl-top-1/2 yl-flex yl-h-6 yl-w-6 -yl-translate-y-1/2 yl-items-center yl-justify-center yl-rounded-md hover:yl-bg-white hover:yl-bg-opacity-10'
          }
        >
          <XMarkIcon className={'yl-h-4 yl-w-4 yl-text-yooldo-white'} />
        </button>
      </div>
    </aside>
  );
};
