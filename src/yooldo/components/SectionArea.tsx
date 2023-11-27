import { forwardRef, ComponentPropsWithRef } from 'react';
import { cn } from '@/common/utils/cn';
import '@/index.css';

type SectionAreaTagType = 'article' | 'aside' | 'div' | 'section' | 'header';

export interface SectionAreaProps
  extends Omit<ComponentPropsWithRef<'div'>, 'title'> {
  title: React.ReactNode;
  titleLabelChildren?: React.ReactNode;
  as?: SectionAreaTagType;
  headerClassName?: string;
  bodyClassName?: string;
}

export const SectionArea = forwardRef<HTMLDivElement, SectionAreaProps>(
  (
    {
      as = 'div',
      title,
      titleLabelChildren,
      className,
      headerClassName,
      bodyClassName,
      children,
      ...props
    },
    ref,
  ) => {
    const Element = as;

    return (
      <Element
        className={cn([
          'yl-relative yl-w-full',
          'yl-flex yl-flex-col yl-gap-5',
          className,
        ])}
        ref={ref}
        {...props}
      >
        <header
          className={cn([
            'yl-flex yl-items-center yl-justify-between yl-gap-2',
            headerClassName,
          ])}
        >
          {typeof title === 'string' ? (
            <h2
              className={
                'yl-flex-grow yl-text-2xl yl-dark:yl-text-yooldo-white'
              }
            >
              {title}
            </h2>
          ) : (
            title
          )}
          {titleLabelChildren && (
            <div className={'yl-w-fit'}>{titleLabelChildren}</div>
          )}
        </header>
        <div className={bodyClassName}>{children}</div>
      </Element>
    );
  },
);

SectionArea.displayName = 'yl-section-area';
