import { CheckIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';
import { cn } from '@/common/utils/cn';
import '@/index.css';

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
    <div className={'yl-flex yl-items-center yl-gap-2'}>
      <button
        className={cn([
          'yl-relative yl-flex yl-h-4 yl-w-4 yl-items-center yl-justify-center yl-rounded-full yl-border-[1.5px] yl-border-yooldo-sunset-100',
          isSelected && 'yl-border-yooldo-sunset',
        ])}
        onClick={(e) => {
          e.preventDefault();
          setIsSelected((prev) => !prev);
        }}
      >
        {isSelected && <CheckIcon className={'yl-w-4 yl-text-yooldo-sunset'} />}
      </button>
      <div
        className={'yl-cursor-default'}
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
