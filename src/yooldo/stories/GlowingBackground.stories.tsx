import type { Meta, StoryObj } from '@storybook/react';

import {
  GlowingBackground,
  GlowingProps,
} from '@/yooldo/components/GlowingBackground';

const meta: Meta<GlowingProps> = {
  component: GlowingBackground,
};

export default meta;
type Story = StoryObj<GlowingProps>;

export const GlowingBackgroundBlueGreen: Story = {
  name: 'glowing-blue-green',
  args: {
    leftPosition: { x: '5%', y: '20%', color: 'blue' },
    rightPosition: { x: '95%', y: '30%', color: 'green' },
    blur: '30px',
    className: 'yl-z-0',
  },
  render: (args) => (
    <div className={'yl-relative yl-w-80 yl-h-80 yl-bg-yooldo-card-black'}>
      <GlowingBackground {...args} />
    </div>
  ),
};

export const GlowingBackgroundPurpleSunset: Story = {
  name: 'glowing-purple-sunset',
  args: {
    leftPosition: { x: '5%', y: '20%', color: 'purple' },
    rightPosition: { x: '95%', y: '30%', color: 'sunset' },
    blur: '30px',
    className: 'yl-z-0',
  },
  render: (args) => (
    <div className={'yl-relative yl-w-80 yl-h-80 yl-bg-yooldo-card-black'}>
      <GlowingBackground {...args} />
    </div>
  ),
};
