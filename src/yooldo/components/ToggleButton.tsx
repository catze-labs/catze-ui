import { ComponentPropsWithRef, forwardRef } from 'react';
import { cn } from '../../common/utils/cn';
import '../../index.css';

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
        className={cn([
          'relative flex w-full cursor-pointer items-center',
          className,
        ])}
      >
        <input
          type="checkbox"
          value=""
          className="peer sr-only"
          {...props}
          ref={ref}
        />
        <div
          className={`
          peer h-3.5 w-6.5 rounded-full border border-yooldo-black bg-yooldo-white after:absolute
          after:left-px after:top-1/2 after:-translate-y-1/2 after:h-3 after:w-3 after:rounded-lg after:border after:bg-yooldo-black after:transition-all after:content-['']
          peer-checked:after:translate-x-full peer-focus:outline-none dark:border-none
        `}
        ></div>
      </label>
    );
  },
);

ToggleButton.displayName = 'ToggleButton';
