import type { Meta, StoryObj } from '@storybook/react';

import {
  TopScrollButton,
  TopBtnProps,
} from '@/yooldo/components/TopScrollButton';

const meta: Meta<TopBtnProps> = {
  component: TopScrollButton,
};

export default meta;
type Story = StoryObj<TopBtnProps>;

export const TopScrollBlue: Story = {
  name: 'top-scroll-blue',
  args: {
    color: 'blue',
  },
  render: (args) => (
    <div className={'yl-relative'}>
      <TopScrollButton {...args} />
    </div>
  ),
};

export const TopScrollGreen: Story = {
  name: 'top-scroll-green',
  args: {
    color: 'green',
  },
  render: (args) => (
    <div className={'yl-relative'}>
      <TopScrollButton {...args} />
    </div>
  ),
};

export const TopScrollPurple: Story = {
  name: 'top-scroll-purple',
  args: {
    color: 'purple',
  },
  render: (args) => (
    <div className={'yl-relative'}>
      <TopScrollButton {...args} />
    </div>
  ),
};

export const TopScrollSunset: Story = {
  name: 'top-scroll-sunset',
  args: {
    color: 'sunset',
  },
  render: (args) => (
    <div className={'yl-relative'}>
      <TopScrollButton {...args} />
    </div>
  ),
};
