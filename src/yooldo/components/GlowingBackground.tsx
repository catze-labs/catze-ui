import { cn } from '@/common/utils/cn';
import '@/index.css';

type ColorScheme = 'purple' | 'blue' | 'green' | 'sunset';
type PositionType = {
  x: string;
  y: string;
  color: ColorScheme;
  preventAnimated?: boolean;
};

export interface GlowingProps {
  className?: string;
  leftPosition?: PositionType;
  rightPosition?: PositionType;
  blur?: string;
}

const COLOR_SCHEME_RECORD: Record<ColorScheme, string> = {
  purple: 'yl-bg-yooldo-another-purple',
  blue: 'yl-bg-yooldo-another-blue',
  green: 'yl-bg-yooldo-another-green',
  sunset: 'yl-bg-yooldo-sunset',
};

export const GlowingBackground: React.FC<GlowingProps> = ({
  leftPosition,
  rightPosition,
  blur,
  className,
}) => {
  return (
    <div
      style={blur ? { filter: `blur(${blur})` } : {}}
      className={cn([
        'yl-absolute yl-top-0 yl-left-0 yl-w-full yl-h-full yl-blur-[100px] yl-overflow-hidden yl--z-1',
        className,
      ])}
    >
      <span
        style={
          leftPosition && {
            top: leftPosition.y,
            left: leftPosition.x,
          }
        }
        className={cn([
          'yl-absolute yl-top-3/4 yl-left-1/4 yl--translate-x-1/2 yl--translate-y-1/2 yl-opacity-20 yl-aspect-square yl-w-1/3 yl-rounded-full',
          !leftPosition?.preventAnimated &&
            'yl-transition-all yl-animate-move-tl-br',
          leftPosition && COLOR_SCHEME_RECORD[leftPosition.color],
        ])}
      />
      <span
        style={
          rightPosition && {
            top: rightPosition.y,
            left: rightPosition.x,
          }
        }
        className={cn([
          'yl-absolute yl-top-1/2 yl-left-3/4 yl--translate-x-1/2 yl--translate-y-1/2 yl-opacity-20 yl-aspect-square yl-w-1/2 yl-rounded-full',
          !leftPosition?.preventAnimated &&
            'yl-transition-all yl-animate-move-tr-bl',
          rightPosition && COLOR_SCHEME_RECORD[rightPosition.color],
        ])}
      />
    </div>
  );
};
