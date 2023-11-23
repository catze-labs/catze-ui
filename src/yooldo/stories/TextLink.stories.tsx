import type { Meta, StoryObj } from '@storybook/react';

import { TextLink, TextLinkProps } from '@/yooldo/components/TextLink';

const meta: Meta<TextLinkProps> = {
  component: TextLink,
};

export default meta;
type Story = StoryObj<TextLinkProps>;

export const TextLinkSunset: Story = {
  name: 'text-link-sunset',
  args: {
    external: true,
    label: 'Go to Yooldo',
    href: 'https://yooldo.gg',
    color: 'sunset',
  },
  render: (args) => <TextLink {...args} />,
};

export const TextLinkBlue: Story = {
  name: 'text-link-blue',
  args: {
    external: true,
    label: 'Go to Yooldo',
    href: 'https://yooldo.gg',
    color: 'blue',
  },
  render: (args) => <TextLink {...args} />,
};

export const TextLinkWhite: Story = {
  name: 'text-link-white',
  args: {
    external: true,
    label: 'Go to Yooldo',
    href: 'https://yooldo.gg',
    color: 'white',
  },
  render: (args) => (
    <div className={'bg-yooldo-card-black'}>
      <TextLink {...args} />
    </div>
  ),
};

export const TextLinkGreen: Story = {
  name: 'text-link-green',
  args: {
    external: true,
    label: 'Go to Yooldo',
    href: 'https://yooldo.gg',
    color: 'green',
  },
  render: (args) => <TextLink {...args} />,
};
