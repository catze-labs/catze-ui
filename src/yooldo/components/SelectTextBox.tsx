import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ComponentPropsWithoutRef, useRef, useState } from 'react';
import { cn } from '@/common/utils/cn';
import { useOnClickOutside } from 'usehooks-ts';
import '@/index.css';

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
    <div className={'yl-relative yl-flex'} ref={selectWrapperRef}>
      <select
        disabled={disabled}
        onChange={(e) => {
          const value = options.find(
            (item) => String(item.value) === e.target.value,
          );
          onChange?.(e, value?.data);
        }}
        className={cn([
          'yl-select-without-icon yl-text-sm yl-text-yooldo-black yl-dark:yl-text-yooldo-white',
          !hidePlaceholder &&
            value === '' &&
            'yl-text-yooldo-black-100 yl-dark:yl-text-yooldo-black-100',
          value === '' &&
            'yl-text-yooldo-black-100 yl-dark:yl-text-yooldo-black-100',
          'yl-w-full yl-px-4 yl-py-2 yl-pr-8',
          'yl-rounded-xl yl-border-[1.5px] yl-border-yooldo-sunset yl-bg-yooldo-white yl-px-4 yl-py-1.5 yl-outline-none yl-dark:yl-bg-yooldo-card-black',
          disabled &&
            'yl-border-yooldo-black-100 yl-text-yooldo-black-100 yl-dark:yl-text-yooldo-black-100',
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
          'yl-absolute yl-right-4 yl-top-1/2 yl--translate-y-1/2',
          'yl-w-4 yl-text-yooldo-sunset yl-transition-all',
          isOpened && 'yl-rotate-180',
          disabled && 'yl-text-yooldo-black-100',
        ])}
      />
    </div>
  );
};
