import type { Meta, StoryObj } from '@storybook/react';

import { Input, InputProps } from '@/yooldo/components/Input';

const meta: Meta<InputProps> = {
  component: Input,
};

export default meta;
type Story = StoryObj<InputProps>;

export const InputDefaultStory: Story = {
  name: 'input-default',
  args: {},
  render: (args) => <Input {...args} />,
};

export const InputDisabledStory: Story = {
  name: 'input-disabled',
  args: {
    disabled: true,
  },
  render: (args) => <Input {...args} />,
};

export const InputCustomStory: Story = {
  name: 'input-custom',
  args: {
    className: 'focus:yl-border-yooldo-another-blue',
  },
  render: (args) => <Input {...args} />,
};
