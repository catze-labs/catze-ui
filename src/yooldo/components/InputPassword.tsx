import { useState } from 'react';
import { Input, type InputProps } from './Input';
import { cn } from '@/common/utils/cn';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import '@/index.css';

export interface InputPasswordProps extends InputProps {
  hideIcon?: boolean;
  customEyeOpenIcon?: React.ReactNode;
  customEyeClosedIcon?: React.ReactNode;
}
export const InputPassword: React.FC<InputPasswordProps> = ({
  className,
  type = 'password',
  hideIcon = false,
  onFocus,
  onBlur,
  customEyeClosedIcon,
  customEyeOpenIcon,
  ...props
}) => {
  const [inputType, setInputType] = useState(type);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div
      className={cn([
        'yl-relative yl-w-full yl-overflow-hidden yl-rounded-xl yl-border-[1.5px] yl-border-yooldo-black-100',
        isFocused && 'yl-border-yooldo-sunset',
      ])}
    >
      <Input
        className={cn(['yl-border-none focus:yl-border-none', className])}
        type={inputType}
        onFocus={(e) => {
          setIsFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          onBlur?.(e);
        }}
        {...props}
      />
      {!hideIcon && type === 'password' && (
        <button
          tabIndex={-1}
          className={
            'yl-absolute yl-right-4 yl-top-1/2 yl--translate-y-1/2 yl-select-none yl-bg-transparent'
          }
          onClick={(e) => {
            e.preventDefault();
            setInputType(inputType === 'text' ? 'password' : 'text');
          }}
        >
          {inputType === 'password' ? (
            customEyeOpenIcon ? (
              <>{customEyeOpenIcon}</>
            ) : (
              <EyeIcon className={'yl-w-5 yl-text-yooldo-sunset'} />
            )
          ) : customEyeClosedIcon ? (
            <>{customEyeClosedIcon}</>
          ) : (
            <EyeSlashIcon className={'yl-w-5 yl-text-yooldo-sunset'} />
          )}
        </button>
      )}
    </div>
  );
};
