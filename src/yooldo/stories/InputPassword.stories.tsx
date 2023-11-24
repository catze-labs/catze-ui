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
        className={
          'yl-bg-yooldo-sunset yl-text-yooldo-white yl-px-2 yl-py-1 yl-rounded-full'
        }
      >
        encrypt
      </span>
    ),
    customEyeOpenIcon: (
      <span
        className={
          'yl-bg-yooldo-another-blue yl-text-yooldo-white yl-px-2 yl-py-1 yl-rounded-full'
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
