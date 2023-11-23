import { cn } from '@/common/utils/cn';
import '@/index.css';

type ColorType = 'sunset' | 'blue' | 'white' | 'purple' | 'green' | 'red';

export interface TagChipProps {
  color?: ColorType;
  className?: string;
  children?: React.ReactNode;
}

const COLOR_STYLE_RECORDS: Record<ColorType, string> = {
  sunset:
    'yl-bg-yooldo-sunset-50 yl-border-yooldo-sunset yl-border-[1.5px] yl-border-yooldo-sunset yl-text-yooldo-sunset',
  red: 'yl-bg-yooldo-sunrise-50 yl-border-yooldo-sunrise yl-border-[1.5px] yl-border-yooldo-sunrise yl-text-yooldo-sunrise',
  blue: 'yl-bg-yooldo-another-blue-50 yl-border-yooldo-another-blue yl-border-[1.5px] yl-border-yooldo-another-blue yl-text-yooldo-another-blue',
  white:
    'yl-bg-yooldo-black-50 yl-border-yooldo-black yl-border-[1.5px] yl-border-yooldo-black yl-text-yooldo-black',
  purple:
    'yl-bg-yooldo-another-purple-50 yl-border-yooldo-another-purple yl-border-[1.5px] yl-border-yooldo-another-purple yl-text-yooldo-another-purple',
  green:
    'yl-bg-yooldo-another-green-50 yl-border-yooldo-another-green yl-border-[1.5px] yl-border-yooldo-another-green yl-text-[#44B4A7]',
};

export const TagChip: React.FC<TagChipProps> = ({
  className,
  color = 'sunset',
  children,
}) => {
  return (
    <label
      className={cn([
        'yl-rounded-lg yl-px-4 yl-py-1 yl-text-sm yl-font-medium',
        COLOR_STYLE_RECORDS[color],
        className,
      ])}
    >
      {children}
    </label>
  );
};
