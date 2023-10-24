import React, { ComponentProps } from 'react';
import { cn } from '../../common/utils/cn';
import '../../index.css';

type ColorType = 'sunset' | 'blue' | 'green' | 'purple' | 'white';
export interface DividerProps extends Omit<ComponentProps<'hr'>, 'color'> {
  color?: ColorType;
}

const COLOR_SCHEME_RECORD: Record<ColorType, string> = {
  sunset: 'bg-yooldo-sunset-100',
  blue: 'bg-yooldo-another-blue-100',
  green: 'bg-yooldo-another-green-100',
  purple: 'bg-yooldo-another-purple-100',
  white: 'bg-yooldo-anonther-black-100',
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
        'h-px border-none',
        COLOR_SCHEME_RECORD[color],
        className,
      ])}
    />
  );
};
