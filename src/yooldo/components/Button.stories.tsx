import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonProps } from './Button';

const meta: Meta<ButtonProps> = {
  component: Button,
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const ButtonFillPrimary: Story = {
  name: 'button-fill-priamry',
  args: {
    size: 'base',
    color: 'primary',
    variant: 'fill',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const ButtonFillSecondary: Story = {
  name: 'button-fill-secondary',
  args: {
    size: 'base',
    color: 'secondary',
    variant: 'fill',
  },
  render: (args) => <Button {...args}>Button</Button>,
};

export const ButtonFillDark: Story = {
  name: 'button-fill-dark',
  args: {
    size: 'base',
    color: 'dark',
    variant: 'fill',
  },
  render: (args) => (
    <div className={'flex gap-4'}>
      <Button {...args}>Light Button</Button>
      <div className={'dark'}>
        <Button {...args}>Dark Button</Button>
      </div>
    </div>
  ),
};

export const ButtonOutlinePrimary: Story = {
  name: 'button-outline-primary',
  args: {
    size: 'base',
    color: 'primary',
    variant: 'outline',
  },
  render: (args) => (
    <div className={'flex gap-4'}>
      <Button {...args}>Light Button</Button>
      <div className={'dark'}>
        <Button {...args}>Dark Button</Button>
      </div>
    </div>
  ),
};

export const ButtonOutlineSecondary: Story = {
  name: 'button-outline-secondary',
  args: {
    size: 'base',
    color: 'secondary',
    variant: 'outline',
  },
  render: (args) => (
    <div className={'flex gap-4'}>
      <Button {...args}>Light Button</Button>
      <div className={'dark'}>
        <Button {...args}>Dark Button</Button>
      </div>
    </div>
  ),
};
