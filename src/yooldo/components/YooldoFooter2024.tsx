import { cn } from '@/common/utils/cn';
import '@/index.css';
import { TextLink } from '@/yooldo/components/TextLink';
import { YooldoLogo } from '@/yooldo/components/YooldoLogo';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

interface LinkProps {
  key: string;
  name?: string;
  href: string;
  external?: boolean;
}

type ProjectCategory = 'yooldo' | 'yooldo-games';
type ProjectLinkProps = {
  [key in ProjectCategory]: LinkProps[];
};

interface SocialItemProps extends Omit<LinkProps, keyof 'external' | 'name'> {
  icon: string;
}
export interface FooterProps extends ComponentPropsWithoutRef<'footer'> {
  projectsLinks: ProjectLinkProps;
  socialLinks?: SocialItemProps[];
  customerServices?: LinkProps[];
  backgroundNode?: React.ReactNode;
  logoClassName?: string;
}

export const YooldoFooter2024 = forwardRef<HTMLDetailsElement, FooterProps>(
  (
    {
      className,
      projectsLinks,
      socialLinks,
      backgroundNode,
      logoClassName,
      customerServices,
      ...props
    },
    ref,
  ) => {
    const projects = Object.entries(projectsLinks);
    return (
      <footer
        className={cn([
          'yl-relative yl-flex yl-flex-col yl-gap-12 yl-px-5 yl-py-8 lg:yl-px-8 lg:yl-py-10',
          'yl-bg-yooldo-card-black dark:yl-bg-yooldo-card-black',
          className,
        ])}
        ref={ref}
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
          className={
            'yl-flex yl-gap-[72px] yl-justify-between yl-flex-col md:yl-flex-row md:yl-justify-start yl-mx-auto yl-w-full yl-max-w-screen-lg'
          }
        >
          <div className={'yl-flex-1 yl-flex'}>
            <YooldoLogo
              className={cn([
                'yl-w-[132px] md:yl-w-[198px] lg:yl-w-[264px]',
                'yl-h-[128px] md:yl-h-[191px] lg:yl-h-[255px]',
                logoClassName,
              ])}
            />
          </div>
          <div
            className={
              'yl-flex yl-justify-between yl-flex-1 yl-py-10 yl-px-4 md:yl-px-8 yl-gap-8 sm:yl-flex-row yl-flex-col'
            }
          >
            {projects.map(([key, links]) => {
              const label = key
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
              return (
                <div
                  className={'yl-flex yl-flex-col yl-gap-4'}
                  key={`yooldo-project-${key}`}
                >
                  <label
                    className={
                      'yl-text-yooldo-sunset dark:yl-text-yooldo-sunset yl-text-base md:yl-text-xl'
                    }
                  >
                    {label}
                  </label>
                  {links.map((link) => (
                    <TextLink
                      className={'yl-w-fit yl-pl-1'}
                      color={'white'}
                      label={link.name || link.href}
                      href={link.href}
                      external={link.external}
                      key={link.key}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={cn([
            'yl-flex yl-flex-col yl-gap-4 yl-w-full yl-max-w-screen-lg yl-mx-auto',
            'yl-py-2.5 yl-px-4 md:yl-px-8',
          ])}
        >
          <div className={'yl-flex yl-gap-2.5'}>
            {socialLinks?.map((social) => (
              <a
                className={'yl-rounded-md dark:hover:yl-bg-yooldo-black-400'}
                rel={'noreferrer'}
                target={'_blank'}
                href={social.href}
                key={social.key}
              >
                <img
                  className={cn([
                    'yl-fill-yooldo-black dark:yl-fill-yooldo-white',
                  ])}
                  src={social.icon}
                  width={32}
                  height={32}
                  alt={social.key}
                />
              </a>
            ))}
          </div>
          <div
            className={
              'yl-flex md:yl-items-center yl-gap-4 md:yl-flex-row yl-flex-col md:yl-gap-12'
            }
          >
            <p
              className={
                'text-xs md:text-sm dark:text-yooldo-white yl-font-light dark:yl-text-yooldo-white'
              }
            >
              &copy; {new Date().getFullYear()} Yooldo All Rights Reserved
            </p>
            <div
              className={
                'yl-flex yl-items-center yl-gap-2 yl-justify-between yl-w-full yl-max-w-none md:yl-max-w-[253px]'
              }
            >
              {customerServices?.map((link) => (
                <a
                  className={
                    'yl-underline-offset-4 hover:yl-underline dark:yl-text-yooldo-black-100'
                  }
                  rel={'noreferrer'}
                  target={'_blank'}
                  href={link.href}
                >
                  {link.name ?? link.href}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  },
);
