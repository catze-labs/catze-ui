import type { Meta, StoryObj } from '@storybook/react';

import { Test, TestProps } from './Test';

const meta: Meta<TestProps> = {
  title: 'Test',
  component: Test,
  argTypes: {
    foo: { control: 'text' },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof Test>;

export const Primary: Story = {
  name: 'For Test',
  args: {
    foo: 'bar',
  },
  render: (props) => <Test {...props} />,
};
