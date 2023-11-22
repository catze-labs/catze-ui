import type { Meta, StoryObj } from '@storybook/react';

import { TagChip, TagChipProps } from '@/yooldo/components/TagChip';

const meta: Meta<TagChipProps> = {
  component: TagChip,
};

export default meta;
type Story = StoryObj<TagChipProps>;

export const TagChipSunset: Story = {
  name: 'tagchip-sunset',
  args: {
    color: 'sunset',
  },
  render: (args) => <TagChip {...args}>TagChip</TagChip>,
};

export const TagChipBlue: Story = {
  name: 'tagchip-blue',
  args: {
    color: 'blue',
  },
  render: (args) => <TagChip {...args}>TagChip</TagChip>,
};

export const TagChipWhite: Story = {
  name: 'tagchip-white',
  args: {
    color: 'white',
  },
  render: (args) => <TagChip {...args}>TagChip</TagChip>,
};

export const TagChipPurple: Story = {
  name: 'tagchip-purple',
  args: {
    color: 'purple',
  },
  render: (args) => <TagChip {...args}>Button</TagChip>,
};

export const TagChipGreen: Story = {
  name: 'tagchip-green',
  args: {
    color: 'green',
  },
  render: (args) => <TagChip {...args}>Button</TagChip>,
};

export const TagChipRed: Story = {
  name: 'tagchip-red',
  args: {
    color: 'red',
  },
  render: (args) => <TagChip {...args}>Button</TagChip>,
};
