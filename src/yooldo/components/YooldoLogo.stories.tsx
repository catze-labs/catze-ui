import type { Meta, StoryObj } from '@storybook/react';

import { YooldoLogo, YooldoLogoProps } from './YooldoLogo';

const meta: Meta<YooldoLogoProps> = {
  component: YooldoLogo,
};

export default meta;
type Story = StoryObj<YooldoLogoProps>;

export const Logo: Story = {
  name: 'Yooldo Logo',
  args: {
    className: 'bg-black',
    pathClassName: 'fill-white',
  },
  render: (args) => <YooldoLogo {...args} />,
};
