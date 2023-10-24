import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ComponentPropsWithoutRef, useRef, useState } from 'react';
import '../../index.css';
import { cn } from '../../common/utils/cn';
import { useOnClickOutside } from 'usehooks-ts';

interface SelectOptionType {
  label: React.ReactNode;
  value: string | number;
  data?: Record<string, unknown>;
}

export interface SelectBoxProps extends ComponentPropsWithoutRef<'select'> {
  hidePlaceholder?: boolean;
  options: SelectOptionType[];
  value: string | number;
  onChange?: (
    e: React.ChangeEvent<HTMLSelectElement>,
    data?: Record<string, unknown>,
  ) => void;
}

export const SelectTextBox: React.FC<SelectBoxProps> = ({
  className,
  options,
  value,
  disabled,
  hidePlaceholder,
  placeholder,
  onChange,
  ...props
}) => {
  const [isOpened, setIsOpened] = useState(false);
  const selectWrapperRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(selectWrapperRef, () => {
    setIsOpened(false);
  });

  return (
    <div className={'relative flex'} ref={selectWrapperRef}>
      <select
        disabled={disabled}
        onChange={(e) => {
          const value = options.find(
            (item) => String(item.value) === e.target.value,
          );
          onChange?.(e, value?.data);
        }}
        className={cn([
          'select-without-icon text-sm text-yooldo-black dark:text-yooldo-white',
          !hidePlaceholder &&
            value === '' &&
            'text-yooldo-black-100 dark:text-yooldo-black-100',
          value === '' && 'text-yooldo-black-100 dark:text-yooldo-black-100',
          'w-full px-4 py-2 pr-8',
          'rounded-xl border-[1.5px] border-yooldo-sunset bg-yooldo-white px-4 py-1.5 outline-none dark:bg-yooldo-card-black',
          disabled &&
            'border-yooldo-black-100 text-yooldo-black-100 dark:text-yooldo-black-100',
          className,
        ])}
        placeholder={placeholder || 'Select Option'}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpened((prev) => !prev);
        }}
        value={value}
        {...props}
      >
        {!hidePlaceholder && <option value="">Select Options</option>}
        {options.map((option, i) => (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon
        className={cn([
          'absolute right-4 top-1/2 -translate-y-1/2',
          'w-4 text-yooldo-sunset transition-all',
          isOpened && 'rotate-180',
          disabled && 'text-yooldo-black-100',
        ])}
      />
    </div>
  );
};
