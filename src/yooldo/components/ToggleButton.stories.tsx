import type { Meta, StoryObj } from '@storybook/react';

import { ToggleButton, ToggleButtonProps } from './ToggleButton';

const meta: Meta<ToggleButtonProps> = {
  component: ToggleButton,
};

export default meta;
type Story = StoryObj<ToggleButtonProps>;

export const ToggleButtonStory: Story = {
  name: 'ToggleButton',
  args: {
    id: '@my-unique-toggle-button',
  },
  render: (args) => <ToggleButton {...args} />,
};
