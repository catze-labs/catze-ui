import React, { ComponentPropsWithRef } from 'react';
import { cn } from '@/common/utils/cn';
import '@/index.css';

export interface YooldoLogoProps extends ComponentPropsWithRef<'svg'> {
  pathClassName?: string;
}

/**
 * Yooldo Logo
 */
export const YooldoLogo: React.FC<YooldoLogoProps> = ({
  className,
  pathClassName,
  ...props
}) => {
  return (
    <svg
      role="img"
      width="52"
      height="49"
      viewBox="0 0 52 49"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={cn(['yl-fill-yooldo-white', className])}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.74467 6.04784C7.57995 6.04784 6.39802 8.52748 7.78722 10.158L16.4198 20.2904C17.438 21.4855 19.309 21.4879 20.3304 20.2954L22.0329 18.3076C22.8382 17.3674 22.8297 15.9928 22.0129 15.0622L14.864 6.9176C14.3793 6.36536 13.6734 6.04784 12.9308 6.04784H9.74467ZM6.74065 11.016C4.60998 8.51514 6.42162 4.70996 9.74467 4.70996H12.9308C14.0706 4.70996 15.1539 5.19731 15.8976 6.04468L23.0465 14.1893C24.2997 15.617 24.3127 17.7258 23.0772 19.1682L21.3747 21.156C19.8073 22.986 16.9357 22.9822 15.3732 21.1484L6.74065 11.016Z"
        className={pathClassName}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39.4134 6.04784C38.6369 6.04784 37.9027 6.39481 37.4185 6.99063L11.8014 38.5159C10.4986 40.1192 11.6044 42.4947 13.6913 42.5791L17.9251 42.7502C18.7576 42.7838 19.5544 42.4165 20.0595 41.7661L44.6733 10.0696C45.9536 8.42102 44.7551 6.04784 42.644 6.04784H39.4134ZM36.3519 6.15676C37.0948 5.24252 38.2216 4.70996 39.4134 4.70996H42.644C45.8847 4.70996 47.7219 8.35182 45.7583 10.8803L21.1445 42.5768C20.3695 43.5747 19.1467 44.1385 17.869 44.0869L13.6351 43.9158C10.4317 43.7864 8.73661 40.1411 10.7348 37.682L36.3519 6.15676Z"
        className={pathClassName}
      />
      <circle cx="38" cy="38" r="6" className={pathClassName} />
    </svg>
  );
};
