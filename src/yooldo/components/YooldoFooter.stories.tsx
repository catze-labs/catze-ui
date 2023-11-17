import type { Meta, StoryObj } from '@storybook/react';

import { YooldoFooter, FooterProps } from './YooldoFooter';
const YooldoFooterLinks = {
  platform: [
    {
      key: 'app-yooldo',
      name: 'Yooldo App',
      href: 'https://app.yooldo.gg',
      external: true,
    },
  ],
  landing: [
    // {
    //   key: 'team-yooldo',
    //   name: 'Team Yooldo',
    //   href: 'https://team.yooldo.gg',
    // },
    {
      key: 'yooldo-verse',
      name: 'Yooldo Verse',
      href: 'https://verse.yooldo.gg',
      external: true,
    },
  ],
  game: [
    {
      key: 'troublepunk',
      name: 'Trouble Punk',
      href: 'https://troublepunk.com',
      external: true,
    },
    // {
    //   key: 'RPD',
    //   name: 'Random Pirate Defense',
    //   href: 'https://'
    // }
  ],
  cs: [
    {
      key: 'contact-us',
      name: 'Contact Us',
      href: 'mailto://hello@yooldo.gg',
      external: false,
    },
    {
      key: 't&c',
      name: 'Terms & Conditions',
      href: '/terms/service',
      external: false,
    },
    {
      key: 'p&p',
      name: 'Privacy Policy',
      href: '/terms/privacy',
      external: false,
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

const meta: Meta<FooterProps> = {
  component: YooldoFooter,
};

export default meta;
type Story = StoryObj<FooterProps>;

export const YooldoFooterStory: Story = {
  name: 'yooldo-footer',
  args: {
    projectsLinks: YooldoFooterLinks,
    socialLinks: socialLinks,
    backgroundNode: (
      <img
        src={
          'https://assets.by-catze.xyz/yooldo-app/background/bg-yooldo-footer.png'
        }
        alt={'footer-bg'}
        className={'yl-w-full yl-h-full'}
      />
    ),
  },
  render: (args) => (
    <div className={'yl-dark yl-relative yl-w-full'}>
      <YooldoFooter {...args} />
    </div>
  ),
};
