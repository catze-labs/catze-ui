import type { Meta, StoryObj } from '@storybook/react';

import {
  InputPassword,
  InputPasswordProps,
} from '@/yooldo/components/InputPassword';

const meta: Meta<InputPasswordProps> = {
  component: InputPassword,
};

export default meta;
type Story = StoryObj<InputPasswordProps>;

export const InputPasswordStory: Story = {
  name: 'input-password',
  args: {},
  render: (args) => <InputPassword {...args} />,
};

export const InputCustomStory: Story = {
  name: 'input-custom-password',
  args: {
    customEyeClosedIcon: (
      <span
        className={'bg-yooldo-sunset text-yooldo-white px-2 py-1 rounded-full'}
      >
        encrypt
      </span>
    ),
    customEyeOpenIcon: (
      <span
        className={
          'bg-yooldo-another-blue text-yooldo-white px-2 py-1 rounded-full'
        }
      >
        decrypt
      </span>
    ),
  },
  render: (args) => <InputPassword {...args} />,
};

export const InputHideIconStory: Story = {
  name: 'input-hide-icon',
  args: { hideIcon: true },
  render: (args) => <InputPassword {...args} />,
};
