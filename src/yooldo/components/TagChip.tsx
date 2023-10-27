import { cn } from '../../common/utils/cn';
import '../../index.css';

type ColorType = 'sunset' | 'blue' | 'white' | 'purple' | 'green' | 'red';

export interface TagChipProps {
  color?: ColorType;
  className?: string;
  children?: React.ReactNode;
}

const COLOR_STYLE_RECORDS: Record<ColorType, string> = {
  sunset:
    'bg-yooldo-sunset-50 border-yooldo-sunset border-[1.5px] border-yooldo-sunset text-yooldo-sunset',
  red: 'bg-yooldo-sunrise-50 border-yooldo-sunrise border-[1.5px] border-yooldo-sunrise text-yooldo-sunrise',
  blue: 'bg-yooldo-another-blue-50 border-yooldo-another-blue border-[1.5px] border-yooldo-another-blue text-yooldo-another-blue',
  white:
    'bg-yooldo-black-50 border-yooldo-black border-[1.5px] border-yooldo-black text-yooldo-black',
  purple:
    'bg-yooldo-another-purple-50 border-yooldo-another-purple border-[1.5px] border-yooldo-another-purple text-yooldo-another-purple',
  green:
    'bg-yooldo-another-green-50 border-yooldo-another-green border-[1.5px] border-yooldo-another-green text-[#44B4A7]',
};

export const TagChip: React.FC<TagChipProps> = ({
  className,
  color = 'sunset',
  children,
}) => {
  return (
    <label
      className={cn([
        'rounded-lg px-4 py-1 text-sm font-medium',
        COLOR_STYLE_RECORDS[color],
        className,
      ])}
    >
      {children}
    </label>
  );
};
