import { forwardRef } from 'react';
import { cn } from '@/common/utils/cn';
import '@/index.css';

type ColorType = 'sunset' | 'blue' | 'white' | 'purple' | 'green';
type VariantType = 'fill' | 'outline';
type SizeType = 'base' | 'xs' | 'lg' | 'xl';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color?: ColorType;
  variant?: VariantType;
  size?: SizeType;
  icon?: React.ReactNode;
}

const DEFAULT_BUTTON_STYLE =
  'yl-flex yl-items-center yl-justify-center yl-py-3 yl-px-6 yl-rounded-full yl-text-white disabled:yl-bg-yooldo-black-100';
const HOVER_EFFECT_STYLE =
  'yl-transition-all hover:yl--translate-x-1 hover:yl--translate-y-1 hover:yl-shadow-btn-primary';

const DISABLED_STYLE =
  'disabled:yl-border-none disabled:yl-bg-yooldo-black-100 disabled:yl-text-yooldo-black-300 disabled:hover:yl-shadow-none';

const INNER_PADDING_RECORD: Record<SizeType, string> = {
  base: 'yl-py-3 yl-px-6',
  xs: 'yl-py-2, yl-px-3',
  lg: 'yl-py-4 yl-px-10',
  xl: 'yl-py-4 yl-px-10 md:yl-py-6 md:yl-px-12',
};

const FILL_COLORS_RECORD: Record<ColorType, string> = {
  sunset: 'yl-bg-yooldo-sunset hover:yl-shadow-btn-sunset',
  blue: 'yl-bg-yooldo-another-blue hover:yl-shadow-btn-blue',
  white:
    'yl-bg-yooldo-black hover:yl-shadow-btn-dark dark:yl-bg-yooldo-white dark:yl-text-yooldo-black',
  purple: 'yl-bg-yooldo-another-purple hover:yl-shadow-btn-purple',
  green: 'yl-bg-yooldo-another-green hover:yl-shadow-btn-green',
};

const OUTLINE_COLORS_RECORD: Record<ColorType, string> = {
  sunset:
    'yl-bg-yooldo-white yl-border yl-border-[1.5px] yl-border-yooldo-sunset hover:yl-shadow-btn-sunset yl-text-yooldo-black dark:yl-text-yooldo-white dark:yl-bg-yooldo-black',
  blue: 'yl-bg-yooldo-white yl-border yl-border-[1.5px] yl-border-yooldo-another-blue hover:yl-shadow-btn-blue yl-text-yooldo-black dark:yl-text-yooldo-white dark:yl-bg-yooldo-black',
  white:
    'yl-bg-yooldo-white yl-border yl-border-[1.5px] yl-border-yooldo-black yl-text-yooldo-black dark:yl-text-yooldo-white dark:yl-bg-yooldo-black dark:yl-border-yooldo-white',
  purple:
    'yl-bg-yooldo-white yl-border yl-border-[1.5px] yl-border-yooldo-another-purple hover:yl-shadow-btn-purple yl-text-yooldo-black dark:yl-text-yooldo-white dark:yl-bg-yooldo-black',
  green:
    'yl-bg-yooldo-white yl-border yl-border-[1.5px] yl-border-yooldo-another-green hover:yl-shadow-btn-green yl-text-yooldo-black dark:yl-text-yooldo-white dark:yl-bg-yooldo-black',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      color = 'sunset',
      size = 'base',
      variant = 'fill',
      icon,
      disabled,
      style,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cn([
          DEFAULT_BUTTON_STYLE,
          !disabled && HOVER_EFFECT_STYLE,
          size && INNER_PADDING_RECORD[size],
          color && FILL_COLORS_RECORD[color],
          !disabled &&
            color &&
            variant === 'outline' &&
            OUTLINE_COLORS_RECORD[color],
          disabled && DISABLED_STYLE,
          className,
        ])}
        disabled={disabled}
        style={disabled ? {} : style}
        ref={ref}
        {...props}
      >
        <div className={'yl-flex yl-items-center yl-gap-5'}>
          {icon && (
            <span
              className={cn([
                'yl-rounded-full yl-bg-yooldo-white yl-p-[11px]',
                disabled && 'yl-bg-yooldo-black-50',
              ])}
            >
              {icon}
            </span>
          )}
          {children}
        </div>
      </button>
    );
  },
);

Button.displayName = 'Yooldo-Button';
