import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useMemo } from 'react';
import { cn } from '../../common/utils/cn';
import '../../index.css';

/**
 * @currentPage: currently selected page. it starts with 1 not 0.
 * @totalCount: the number of all items in array.
 * @countPerPage: items for showing per one page.
 */
export interface PaginationProps {
  className?: string;
  currentPage: number;
  totalCount: number | undefined;
  countPerPage: number;
  onClick?: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  className,
  currentPage,
  totalCount,
  countPerPage,
  onClick,
}) => {
  const lastPage = Math.ceil(Number(totalCount) / countPerPage);
  const pages = useMemo(() => {
    const items: (number | '...')[] = [];
    const pageRow = Math.floor((currentPage - 1) / 3);
    const lastPageRow = Math.floor((lastPage - 1) / 3);

    if (pageRow > 0) {
      items.push('...');
    }

    items.push(
      ...Array.from(
        { length: Math.min(3, Number(lastPage - pageRow * 3)) },
        (_, i) => pageRow * 3 + i + 1,
      ),
    );
    if (pageRow < lastPageRow) {
      items.push('...');
      items.push(lastPage);
    }

    return items;
  }, [currentPage, lastPage]);

  return (
    <div className={cn(['mx-auto flex items-center gap-4', className])}>
      <button
        disabled={currentPage === 1}
        onClick={() => onClick?.(currentPage - 1)}
      >
        <ChevronLeftIcon className={'w-4 text-yooldo-sunset'} />
      </button>
      {pages.map((page, i) => (
        <button
          key={`${page}-${i}`}
          onClick={() => {
            const pageRow = Math.floor(currentPage / 3);
            if (page === '...') {
              onClick?.(
                i === 0 ? (pageRow - 1) * 3 + 1 : (pageRow + 1) * 3 + 1,
              );
            } else {
              onClick?.(page);
            }
          }}
        >
          <p
            className={cn([
              'text-sm hover:underline',
              'h-7 w-7 rounded-full leading-6 text-yooldo-black dark:text-yooldo-white',
              currentPage === page &&
                'border border-yooldo-sunset bg-yooldo-highlight-sunset',
            ])}
          >
            {page}
          </p>
        </button>
      ))}
      <button
        disabled={isNaN(lastPage) || currentPage === lastPage}
        onClick={() => onClick?.(currentPage + 1)}
      >
        <ChevronRightIcon className={'w-4 text-yooldo-sunset'} />
      </button>
    </div>
  );
};
