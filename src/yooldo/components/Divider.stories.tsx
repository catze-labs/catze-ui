import type { Meta, StoryObj } from '@storybook/react';

import { Divider, DividerProps } from './Divider';

const meta: Meta<DividerProps> = {
  component: Divider,
};

export default meta;
type Story = StoryObj<DividerProps>;

export const DividerSunset: Story = {
  name: 'divider-sunset',
  args: {
    color: 'sunset',
  },
  render: (args) => <Divider {...args} />,
};

export const DividerBlue: Story = {
  name: 'divider-blue',
  args: {
    color: 'blue',
  },
  render: (args) => <Divider {...args} />,
};

export const DividerGreen: Story = {
  name: 'divider-green',
  args: {
    color: 'green',
  },
  render: (args) => <Divider {...args} />,
};

export const DividerPurple: Story = {
  name: 'divider-purple',
  args: {
    color: 'purple',
  },
  render: (args) => <Divider {...args} />,
};

export const DividerWhite: Story = {
  name: 'divider-white',
  args: {
    color: 'white',
  },
  render: (args) => <Divider {...args} />,
};
