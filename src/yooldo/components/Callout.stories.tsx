import type { Meta, StoryObj } from '@storybook/react';

import { Callout, CalloutProps } from './Callout';

const meta: Meta<CalloutProps> = {
  component: Callout,
};

export default meta;
type Story = StoryObj<CalloutProps>;

export const CalloutInfo: Story = {
  name: 'callout-info',
  args: {
    type: 'info',
    variant: 'solid',
    title: 'Hello!',
    text: 'This is info callout.',
  },
  render: (args) => <Callout {...args} />,
};

export const CalloutWarning: Story = {
  name: 'callout-warning',
  args: {
    type: 'warning',
    variant: 'outline',
    title: 'Hello!',
    text: 'This is warning callout.',
  },
  render: (args) => <Callout {...args} />,
};

export const CalloutError: Story = {
  name: 'callout-error',
  args: {
    type: 'error',
    variant: 'solid',
    title: 'Hello!',
    text: 'This is error callout.',
  },
  render: (args) => <Callout {...args} />,
};
