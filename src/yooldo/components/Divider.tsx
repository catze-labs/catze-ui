import React, { ComponentProps } from 'react';
import { cn } from '../../common/utils/cn';
import '../../index.css';

type ColorType = 'sunset' | 'blue' | 'green' | 'purple' | 'white';
export interface DividerProps extends Omit<ComponentProps<'hr'>, 'color'> {
  color?: ColorType;
}

const COLOR_SCHEME_RECORD: Record<ColorType, string> = {
  sunset: 'yl-bg-yooldo-sunset-100',
  blue: 'yl-bg-yooldo-another-blue-100',
  green: 'yl-bg-yooldo-another-green-100',
  purple: 'yl-bg-yooldo-another-purple-100',
  white: 'yl-bg-yooldo-black-100',
};

export const Divider: React.FC<DividerProps> = ({
  color = 'white',
  className,
  ...props
}) => {
  return (
    <hr
      {...props}
      className={cn([
        'yl-h-px yl-border-none',
        COLOR_SCHEME_RECORD[color],
        className,
      ])}
    />
  );
};
