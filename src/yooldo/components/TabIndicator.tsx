import React, { useCallback, useEffect, useRef } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { cn } from '../../common/utils/cn';
import '../../index.css';

interface TabItemType {
  key: string | number;
  value: string;
  href?: string;
  data?: Record<string, unknown>;
}

export interface TabIndicatorProps {
  className?: string;
  items: TabItemType[];
  defaultValue: string;
  padding?: number;
  gap?: number;
  onChange?: (item: TabItemType) => void;
}

export const TabIndicator: React.FC<TabIndicatorProps> = ({
  className,
  items,
  defaultValue,
  padding = 8,
  gap = 16,
  onChange,
}) => {
  const { width } = useWindowSize();
  const highlightRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  /**
   *
   * @param clientWidth width of each tab element.
   * @param index index of elements(starts with 0)
   * @returns
   */
  const moveHighlight = useCallback(
    (clientWidth: number, index: number) => {
      if (!highlightRef?.current) return;
      const buttonWidth = clientWidth;

      // Each container has gap, therefore {width + gap} is proper width for highlight.
      highlightRef.current.style.width = `${buttonWidth + gap}px`;

      // Calculate outer padding + gap counting(first of all, half of gap, and after whole gap is added multipled with index)
      highlightRef.current.style.transform = `translateX(${
        (buttonWidth + gap) * index - gap / 2 + padding
      }px)`;
    },
    [gap, padding],
  );

  /**
   *
   * @param index fix position of highlights when first rendering occuring
   * @returns forwarding translateX style handler
   */
  const initilizeHighlightSize = useCallback(
    (index: number) => {
      if (!parentRef?.current || !highlightRef?.current) return;
      const overZeroIndex = index < 0 ? 0 : index;
      const buttonWidth = parentRef.current.children[overZeroIndex].clientWidth;

      // each container has gap, so width + gap is proper width for highlight.
      highlightRef.current.style.width = `${buttonWidth + gap}px`;
      moveHighlight(buttonWidth, overZeroIndex);
    },
    [gap, moveHighlight],
  );

  useEffect(() => {
    const firstIndex = items.findIndex((item) => item.value === defaultValue);
    initilizeHighlightSize(firstIndex);
  }, [width, defaultValue, items, initilizeHighlightSize]);

  return (
    <div className={'relative w-fit'}>
      <div
        className={cn([
          'absolute top-0 left-0 z-1 rounded-full border-[1.5px] border-yooldo-sunset bg-yooldo-highlight-sunset',
          'h-full w-full transition-all',
          className,
        ])}
        ref={highlightRef}
      />
      <div
        style={{ paddingLeft: padding, paddingRight: padding, gap: gap }}
        className={cn([
          'relative flex h-12 w-fit items-center justify-center rounded-full bg-yooldo-white dark:bg-yooldo-card-black',
          'border-[1.5px] border-yooldo-black-100 dark:border-none',
        ])}
        ref={parentRef}
      >
        {items.map((item, i) => (
          <button
            className={cn(['flex items-center justify-center z-2', className])}
            key={item.key}
            aria-label={String(item.key)}
            onClick={(e) => {
              e.preventDefault();
              moveHighlight(e.currentTarget.clientWidth, i);
              onChange?.(item);
            }}
          >
            <p
              style={{ padding }}
              className={
                'relative text-sm text-yooldo-black dark:text-yooldo-white lg:text-lg'
              }
            >
              {item.value}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
