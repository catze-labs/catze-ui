import { useState } from 'react';
import { Input, type InputProps } from './Input';
import { cn } from '../../common/utils/cn';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import '../../index.css';

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
        'relative w-full overflow-hidden rounded-xl border-[1.5px] border-yooldo-black-100',
        isFocused && 'border-yooldo-sunset',
      ])}
    >
      <Input
        className={cn(['border-none focus:border-none', className])}
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
            'absolute right-4 top-1/2 -translate-y-1/2 select-none bg-transparent'
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
              <EyeIcon className={'w-5 text-yooldo-sunset'} />
            )
          ) : customEyeClosedIcon ? (
            <>{customEyeClosedIcon}</>
          ) : (
            <EyeSlashIcon className={'w-5 text-yooldo-sunset'} />
          )}
        </button>
      )}
    </div>
  );
};
