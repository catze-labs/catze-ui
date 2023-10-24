import { cn } from '../../common/utils/cn';
import '../../index.css';

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
  purple: 'bg-yooldo-another-purple',
  blue: 'bg-yooldo-another-blue',
  green: 'bg-yooldo-another-green',
  sunset: 'bg-yooldo-sunset',
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
        'absolute top-0 left-0 w-full h-full blur-[100px] overflow-hidden -z-1',
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
          'absolute top-3/4 left-1/4 -translate-x-1/2 -translate-y-1/2 opacity-20 bg-yooldo-another-blue aspect-square w-1/3 rounded-full',
          !leftPosition?.preventAnimated && 'transition-all animate-move-tl-br',
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
          'absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 opacity-20 bg-yooldo-another-green aspect-square w-1/2 rounded-full',
          !leftPosition?.preventAnimated && 'transition-all animate-move-tr-bl',
          rightPosition && COLOR_SCHEME_RECORD[rightPosition.color],
        ])}
      />
    </div>
  );
};
