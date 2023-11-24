import { cn } from '@/common/utils/cn';
import { SectionCard } from '@/yooldo/components/SectionCard';
import { XMarkIcon } from '@heroicons/react/24/outline';
import '@/index.css';
import { Button } from '@/yooldo/components/Button';

export interface PopupProps {
  className?: string;
  cancelText?: React.ReactNode;
  confirmText?: React.ReactNode;
  closeIcon?: boolean;
  children?: React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
}

export const Popup: React.FC<PopupProps> = ({
  className,
  cancelText = 'Close',
  confirmText = 'Confirm',
  closeIcon,
  children,
  onCancel,
  onConfirm,
}) => {
  return (
    <SectionCard
      className={cn([
        'yl-fixed yl-z-[999] yl-shadow-sm yl-shadow-yooldo-black-200 dark:yl-shadow-yooldo-black yl-w-full yl-max-w-screen-md',
        'yl-top-36 yl-left-1/2 -yl-translate-x-1/2',
        'dark:yl-bg-yooldo-black',
        className,
      ])}
    >
      <div className={'yl-relative yl-flex yl-flex-col yl-gap-8'}>
        {closeIcon && (
          <button
            className={cn([
              'yl-flex yl-items-center yl-justify-center',
              'yl-absolute yl-right-0 yl-top-0',
              'yl-w-6 yl-h-6 yl-rounded-md hover:yl-bg-[#00000020] dark:hover:yl-bg-[#ffffff20]',
            ])}
          >
            <XMarkIcon
              className={
                'yl-w-4 yl-h-4 yl-text-yooldo-black dark:yl-text-yooldo-white'
              }
            />
          </button>
        )}
        {children}
        <div className={'yl-w-full yl-flex yl-items-center yl-gap-4'}>
          <Button
            variant={'outline'}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onCancel?.();
            }}
          >
            {cancelText}
          </Button>
          <Button
            variant={'fill'}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onConfirm?.();
            }}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </SectionCard>
  );
};
