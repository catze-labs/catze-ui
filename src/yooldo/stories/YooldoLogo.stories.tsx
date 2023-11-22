import type { Meta, StoryObj } from '@storybook/react';

import { YooldoLogo, YooldoLogoProps } from '@/yooldo/components/YooldoLogo';

const meta: Meta<YooldoLogoProps> = {
  component: YooldoLogo,
};

export default meta;
type Story = StoryObj<YooldoLogoProps>;

export const Logo: Story = {
  name: 'Yooldo Logo',
  args: {
    className: 'yl-bg-black',
    pathClassName: 'yl-fill-white',
  },
  render: (args) => <YooldoLogo {...args} />,
};
