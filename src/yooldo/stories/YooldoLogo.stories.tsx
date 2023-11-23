import type { Meta, StoryObj } from '@storybook/react';

import { YooldoLogo, YooldoLogoProps } from '@/yooldo/components/YooldoLogo';

const meta: Meta<YooldoLogoProps> = {
  component: YooldoLogo,
};

export default meta;
type Story = StoryObj<YooldoLogoProps>;

export const Logo: Story = {
  name: 'Yooldo Logo Dark Theme',
  args: {
    className: 'yl-bg-black',
    pathClassName: 'yl-fill-white',
  },
  render: (args) => <YooldoLogo {...args} />,
};

export const Logo2: Story = {
  name: 'Yooldo Logo Light Theme',
  args: {
    className: 'yl-bg-white',
    pathClassName: 'yl-fill-yooldo-black',
  },
  render: (args) => <YooldoLogo {...args} />,
};
