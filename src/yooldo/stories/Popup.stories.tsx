import type { Meta, StoryObj } from '@storybook/react';
import { Popup, PopupProps } from '@/yooldo/components/Popup';

const meta: Meta<PopupProps> = {
  component: Popup,
};

export default meta;

type Story = StoryObj<PopupProps>;

export const PopupStory1: Story = {
  name: 'popup-light',
  args: { closeIcon: true },
  render: (args) => (
    <Popup {...args}>
      <h1 className={'yl-text-xl yl-font-bold dark:yl-text-yooldo-white'}>
        EMERGENCY!
      </h1>
      <p className={'yl-text-sm dark:yl-text-yooldo-white'}>
        A lemon has a vitamin with just one lemon
      </p>
    </Popup>
  ),
};

export const PopupStory2: Story = {
  name: 'popup-dark',
  args: { closeIcon: true },
  render: (args) => (
    <div className={'yl-dark'}>
      <Popup {...args}>
        <h1 className={'yl-text-xl yl-font-bold dark:yl-text-yooldo-white'}>
          EMERGENCY!
        </h1>
        <p className={'yl-text-sm dark:yl-text-yooldo-white'}>
          A lemon has a vitamin with just one lemon
        </p>
      </Popup>
    </div>
  ),
};
