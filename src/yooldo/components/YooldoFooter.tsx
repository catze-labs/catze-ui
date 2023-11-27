import { forwardRef, ComponentPropsWithoutRef } from 'react';

import { TextLink } from '@/yooldo/components/TextLink';
import { Divider } from './Divider';
import { YooldoLogo } from '@/yooldo/components/YooldoLogo';
import { cn } from '@/common/utils/cn';
import '@/index.css';

interface LinkProps {
  key: string;
  name?: string;
  href: string;
  external?: boolean;
}

interface SocialItemProps extends Omit<LinkProps, keyof 'external' | 'name'> {
  icon: string;
}

type ProjectCategory = 'platform' | 'landing' | 'game' | 'cs';
type SocialLinkCategory = 'yooldo' | 'catze' | 'troublepunk' | 'cybergalz';

type ProjectLinkProps = {
  [key in ProjectCategory]: LinkProps[];
};

type SocialLinkListProps = {
  [key in SocialLinkCategory]: SocialItemProps[];
};

export interface FooterProps extends ComponentPropsWithoutRef<'footer'> {
  projectsLinks: ProjectLinkProps;
  socialLinks?: SocialLinkListProps['yooldo'];
  backgroundNode?: React.ReactNode;
  logoClassName?: string;
}
export const YooldoFooter = forwardRef<HTMLDetailsElement, FooterProps>(
  (
    {
      className,
      projectsLinks,
      socialLinks,
      backgroundNode,
      logoClassName,
      ...props
    },
    footerRef,
  ) => {
    const upperLinks = Object.entries(projectsLinks).map((v) => v);

    return (
      <footer
        className={cn([
          'yl-relative yl-flex yl-flex-col yl-gap-12 yl-px-5 yl-py-8 lg:yl-px-8 lg:yl-py-10',
          className,
        ])}
        ref={footerRef}
        {...props}
      >
        <div
          className={
            'yl-pointer-events-none yl-absolute yl-inset-0 yl-z-0 yl-overflow-hidden yl-rounded-none'
          }
        >
          {backgroundNode}
        </div>
        <div
          className={cn([
            'yl-mx-auto yl-flex yl-w-full yl-max-w-screen-lg yl-flex-wrap yl-justify-between yl-gap-4 lg:yl-flex-nowrap',
            'lg:yl-py-10 lg:yl-px-8',
          ])}
        >
          {upperLinks.map((upperLink) => {
            const [key, items] = upperLink;
            return (
              <div
                aria-label={key}
                className={cn([
                  'yl-flex yl-min-w-[180px] yl-flex-col yl-gap-4',
                ])}
                key={key}
              >
                {items.map((item) => (
                  <TextLink
                    className={'yl-w-fit'}
                    external={item.external}
                    label={item.name || item.href}
                    href={item.href}
                    key={item.key}
                  />
                ))}
              </div>
            );
          })}
        </div>
        <Divider className={'yl-z-1 yl-mx-auto yl-w-full'} />
        <div className={'yl-z-1 yl-flex yl-flex-col yl-items-center yl-gap-6'}>
          <YooldoLogo className={logoClassName} />
          <div className={'yl-flex yl-items-center yl-gap-4'}>
            {socialLinks?.map((item) => (
              <a
                className={'yl-rounded-md yl-dark:hover:yl-bg-yooldo-black-400'}
                rel="noreferrer"
                target="_blank"
                href={item.href}
                key={item.key}
              >
                <img
                  className={cn([
                    'yl-fill-yooldo-black yl-dark:yl-fill-yooldo-white',
                  ])}
                  src={item.icon}
                  width={32}
                  height={32}
                  alt={item.key}
                />
              </a>
            ))}
          </div>
          <p
            className={
              'yl-text-sm yl-font-light yl-text-yooldo-black yl-dark:yl-text-yooldo-white'
            }
          >
            &copy; {new Date().getFullYear()} Yooldo All Rights Reserved
          </p>
        </div>
      </footer>
    );
  },
);

YooldoFooter.displayName = 'yl-yooldo-footer';
