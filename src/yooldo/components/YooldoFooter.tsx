import { forwardRef } from 'react';

import { TextLink } from './TextLink';
import { Divider } from './Divider';
import { YooldoLogo } from './YooldoLogo';
import { cn } from '../../common/utils/cn';
import '../../index.css';

interface LinkProps {
  key: string;
  name?: string;
  href: string;
  external?: boolean;
}
const CDN_BASE_URL = 'https://assets.by-catze.xyz/yooldo-app';

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

export interface FooterProps {
  projectsLinks: ProjectLinkProps;
  socialLinks?: SocialLinkListProps['yooldo'];
  backgroundNode?: React.ReactNode;
}
export const YooldoFooter = forwardRef<HTMLDetailsElement, FooterProps>(
  ({ projectsLinks, socialLinks, backgroundNode }, footerRef) => {
    const upperLinks = Object.entries(projectsLinks).map((v) => v);

    return (
      <footer
        className={'relative flex flex-col gap-12 px-5 py-8 lg:px-8 lg:py-10'}
        ref={footerRef}
      >
        <div
          className={
            'pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-none'
          }
        >
          {backgroundNode}
        </div>
        <div
          className={
            'mx-auto flex w-full max-w-[1200px] flex-wrap justify-between gap-4 lg:flex-nowrap'
          }
        >
          {upperLinks.map((upperLink) => {
            const [key, items] = upperLink;
            return (
              <div
                aria-label={key}
                className={cn(['flex min-w-[180px] flex-col gap-4'])}
                key={key}
              >
                {items.map((item) => (
                  <TextLink
                    className={'w-fit'}
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
        <Divider className={'z-1 mx-auto w-full'} />
        <div className={'z-1 flex flex-col items-center gap-6'}>
          <YooldoLogo />
          <div className={'flex items-center gap-4'}>
            {socialLinks?.map((item) => (
              <a
                className={'rounded-md dark:hover:bg-yooldo-black-400'}
                rel="noreferrer"
                target="_blank"
                href={item.href}
                key={item.key}
              >
                <img
                  className={cn(['fill-yooldo-black dark:fill-yooldo-white'])}
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
              'text-sm font-light text-yooldo-black dark:text-yooldo-white'
            }
          >
            &copy; {new Date().getFullYear()} Yooldo All Rights Reserved
          </p>
        </div>
      </footer>
    );
  },
);

YooldoFooter.displayName = 'yooldo-footer';
