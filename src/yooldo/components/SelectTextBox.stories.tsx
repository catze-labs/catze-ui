import type { Meta, StoryObj } from '@storybook/react';

import { SelectTextBox, SelectBoxProps } from './SelectTextBox';

const meta: Meta<SelectBoxProps> = {
  component: SelectTextBox,
};

export default meta;
type Story = StoryObj<SelectBoxProps>;

export const SelectTextboxStory: Story = {
  name: 'SelectTextBox',
  args: {
    options: [
      { label: 'options1', value: 1 },
      { label: 'options2', value: 2 },
      { label: 'options3', value: 3 },
      { label: 'options4', value: 4 },
    ],
    value: 1,
  },
  render: (args) => <SelectTextBox {...args} />,
};
