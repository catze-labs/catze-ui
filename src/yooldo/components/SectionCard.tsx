import { ComponentPropsWithRef, forwardRef } from 'react';
import { cn } from '@/common/utils/cn';
import '@/index.css';

type CardSizeType = 'default' | 'lg' | 'sm';
type CardTagType = 'article' | 'aside' | 'div' | 'section' | 'header';
/**
 * @param size: `default` prop corresponds to the yooldo-app `lg` prop (as same context, `lg` corresponds to `xl`)
 * @param as: For SEO, be able to define certain tags. (default: `div`)
 */
export interface SectionCardProps extends ComponentPropsWithRef<'div'> {
  size?: CardSizeType;
  as?: CardTagType;
}

export const SectionCard = forwardRef<HTMLDivElement, SectionCardProps>(
  ({ as = 'div', size = 'default', className, children, ...props }, ref) => {
    const Element = as;

    return (
      <Element
        ref={ref}
        className={cn([
          'yl-relative yl-w-full yl-flex yl-flex-col yl-gap-8',
          'yl-bg-yooldo-black-50 yl-dark:yl-bg-yooldo-card-black',
          size === 'default' &&
            'yl-px-8 yl-py-10 yl-rounded-2xl lg:yl-rounded-3xl',
          size === 'lg' &&
            'yl-px-8 yl-py-10 yl-rounded-2xl lg:yl-rounded-3xl lg:yl-px-14 lg:yl-pb-12 lg:yl-pt-10',
          size === 'sm' && 'yl-rounded-xl lg:yl-rounded-2xl yl-px-4 yl-py-5',
          className,
        ])}
        {...props}
      >
        {children}
      </Element>
    );
  },
);

SectionCard.displayName = 'yl-section-card';
