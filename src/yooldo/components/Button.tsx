import { forwardRef } from 'react';
import { cn } from '../../common/utils/cn';
import '../../index.css';

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
  'flex items-center justify-center py-3 px-6 rounded-full text-white disabled:bg-yooldo-black-100 bg-yooldo-sunset';
const HOVER_EFFECT_STYLE =
  'transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-btn-primary';

const DISABLED_STYLE =
  'disabled:border-none disabled:bg-yooldo-black-100 disabled:text-yooldo-black-300 disabled:hover:shadow-none';

const INNER_PADDING_RECORD: Record<SizeType, string> = {
  base: 'py-3 px-6',
  xs: 'py-2, px-3',
  lg: 'py-4 px-10',
  xl: 'py-4 px-10 md:py-6 md:px-12',
};

const FILL_COLORS_RECORD: Record<ColorType, string> = {
  sunset: 'bg-yooldo-sunset hover:shadow-btn-sunset',
  blue: 'bg-yooldo-another-blue hover:shadow-btn-blue',
  white:
    'bg-yooldo-black hover:shadow-btn-dark dark:bg-yooldo-white dark:text-yooldo-black',
  purple: 'bg-yooldo-another-purple hover:shadow-btn-purple',
  green: 'bg-yooldo-another-green hover:shadow-btn-green',
};

const OUTLINE_COLORS_RECORD: Record<ColorType, string> = {
  sunset:
    'bg-yooldo-white border border-[1.5px] border-yooldo-sunset hover:shadow-btn-sunset text-yooldo-black dark:text-yooldo-white dark:bg-yooldo-black',
  blue: 'bg-yooldo-white border border-[1.5px] border-yooldo-another-blue hover:shadow-btn-blue text-yooldo-black dark:text-yooldo-white dark:bg-yooldo-black',
  white:
    'bg-yooldo-white border border-[1.5px] border-yooldo-black text-yooldo-black dark:text-yooldo-white dark:bg-yooldo-black dark:border-yooldo-white',
  purple:
    'bg-yooldo-white border border-[1.5px] border-yooldo-another-purple hover:shadow-btn-purple text-yooldo-black dark:text-yooldo-white dark:bg-yooldo-black',
  green:
    'bg-yooldo-white border border-[1.5px] border-yooldo-another-green hover:shadow-btn-green text-yooldo-black dark:text-yooldo-white dark:bg-yooldo-black',
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
        <div className={'flex items-center gap-5'}>
          {icon && (
            <span
              className={cn([
                'rounded-full bg-yooldo-white p-[11px]',
                disabled && 'bg-yooldo-black-50',
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
