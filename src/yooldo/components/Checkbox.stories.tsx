import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox, CheckboxProps } from './Checkbox';

const meta: Meta<CheckboxProps> = {
  component: Checkbox,
};

export default meta;
type Story = StoryObj<CheckboxProps>;

export const CheckboxStory: Story = {
  name: 'Checkbox',
  args: {
    defaultChecked: true,
    onChange: (checked) => console.log(checked),
  },
  render: (args) => <Checkbox {...args} />,
};
