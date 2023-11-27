import { ComponentPropsWithRef, forwardRef } from 'react';
import { cn } from '@/common/utils/cn';
import '@/index.css';
/**
 * @label: required for accessibility
 */
export interface ToggleButtonProps extends ComponentPropsWithRef<'input'> {
  id: string;
}

export const ToggleButton = forwardRef<HTMLInputElement, ToggleButtonProps>(
  ({ className, id, ...props }, ref) => {
    return (
      <label
        id={id}
        className={cn([
          'yl-relative yl-flex yl-w-full yl-cursor-pointer yl-items-center',
          className,
        ])}
      >
        <input
          type="checkbox"
          value=""
          className="yl-peer yl-sr-only"
          {...props}
          ref={ref}
        />
        <div
          className={`
          yl-peer yl-h-3.5 yl-w-6.5 yl-rounded-full yl-border yl-border-yooldo-black yl-bg-yooldo-white after:yl-absolute
          after:yl-left-px after:yl-top-1/2 after:-yl-translate-y-1/2 after:yl-h-3 after:yl-w-3 after:yl-rounded-lg after:yl-border after:yl-bg-yooldo-black after:yl-transition-all after:yl-content-['']
          peer-checked:after:yl-translate-x-full peer-focus:yl-outline-none yl-dark:yl-border-none
        `}
        ></div>
      </label>
    );
  },
);

ToggleButton.displayName = 'ToggleButton';
