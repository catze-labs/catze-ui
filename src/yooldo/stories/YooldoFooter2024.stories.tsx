import type { Meta, StoryObj } from '@storybook/react';

import {
  FooterProps,
  YooldoFooter2024,
} from '@/yooldo/components/YooldoFooter2024';
const YooldoFooterLinks = {
  yooldo: [
    {
      key: 'app-yooldo',
      name: 'Yooldo App',
      href: 'https://app.yooldo.gg',
      external: true,
    },
    {
      key: 'team-yooldo',
      name: 'Team Yooldo',
      href: 'https://team.yooldo.gg',
      external: true,
    },
    {
      key: 'yooldo-verse',
      name: 'Yooldo Verse',
      href: 'https://verse.yooldo.gg',
      external: true,
    },
  ],
  'yooldo-games': [
    {
      key: 'troublepunk',
      name: 'Trouble Punk',
      href: 'https://troublepunk.com',
      external: true,
    },
  ],
};

const socialLinks = [
  {
    key: 'yooldo-x',
    href: 'https://x.com/YooldoPlatform',
    icon: 'https://assets.by-catze.xyz/common/icons/ic-x.png',
  },
  {
    key: 'yooldo-medium',
    href: 'https://medium.com/cyber-galz',
    icon: 'https://assets.by-catze.xyz/common/icons/ic-medium.png',
  },
  {
    key: 'yooldo-discord',
    href: 'https://discord.gg/3uExarhgvS',
    icon: 'https://assets.by-catze.xyz/common/icons/ic-discord.png',
  },
  {
    key: 'yooldo-gitbook',
    href: 'https://cyber-galz.gitbook.io/yooldo-whitepaper',
    icon: 'https://assets.by-catze.xyz/common/icons/ic-gitbook.png',
  },
];

const customerServices = [
  {
    key: 'contact',
    name: 'Contact',
    href: 'mailto:hello@yooldo.gg',
    external: true,
  },
  {
    key: 'privacy',
    name: 'Privacy',
    href: 'https://app.yooldo.gg/terms/privacy',
    external: true,
  },
  {
    key: 'terms',
    name: 'Terms',
    href: 'https://app.yooldo.gg/terms/service',
    external: true,
  },
];

const meta: Meta<FooterProps> = {
  component: YooldoFooter2024,
};

export default meta;
type Story = StoryObj<FooterProps>;

export const YooldoFooterStory: Story = {
  name: 'yooldo-footer-2024',
  args: {
    projectsLinks: YooldoFooterLinks,
    socialLinks: socialLinks,
    customerServices: customerServices,
  },
  render: (args) => (
    <div className={'yl-relative yl-w-full'}>
      <div className={'yl-dark'}>
        <YooldoFooter2024 {...args} />
      </div>
    </div>
  ),
};
