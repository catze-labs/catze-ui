import { CheckIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { cn } from '../../common/utils/cn';
import '../../index.css';

export interface CheckboxProps {
  children?: React.ReactNode;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  children,
  defaultChecked,
  onChange,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(
    defaultChecked ?? false,
  );

  useEffect(() => {
    onChange?.(isSelected);
  }, [isSelected, onChange]);
  return (
    <div className={'flex items-center gap-2'}>
      <button
        className={cn([
          'relative flex h-4 w-4 items-center justify-center rounded-full border-[1.5px] border-yooldo-sunset-100',
          isSelected && 'border-yooldo-sunset',
        ])}
        onClick={(e) => {
          e.preventDefault();
          setIsSelected((prev) => !prev);
        }}
      >
        {isSelected && <CheckIcon className={'w-4 text-yooldo-sunset'} />}
      </button>
      <div
        className={'cursor-default'}
        onClick={(e) => {
          e.stopPropagation();
          setIsSelected((prev) => !prev);
        }}
      >
        {children}
      </div>
    </div>
  );
};
