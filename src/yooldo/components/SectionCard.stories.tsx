import type { Meta, StoryObj } from '@storybook/react';

import { SectionCard, SectionCardProps } from './SectionCard';

const meta: Meta<SectionCardProps> = {
  component: SectionCard,
};

export default meta;
type Story = StoryObj<SectionCardProps>;

export const SectionCardStory1: Story = {
  name: 'section-card-default',
  args: {
    size: 'default',
  },
  render: (args) => (
    <div className={'flex flex-col gap-6'}>
      <SectionCard {...args}>
        <span className={'yl-text-xl yl-font-bold dark:yl-text-yooldo-white'}>
          Hello Yooldo Section Card
        </span>
        <ul
          className={'yl-list-disc marker:yl-text-yooldo-black yl-list-inside'}
        >
          <li>light mode</li>
          <li>px: 32px py: 40px</li>
        </ul>
      </SectionCard>
      <div className={'dark'}>
        <SectionCard {...args}>
          <span
            className={'yl-text-xl yl-font-bold dark:yl-text-yooldo-white'}
            data-mode={'dark'}
          >
            Hello Yooldo Section Card
          </span>
          <ul
            className={
              'yl-list-disc marker:yl-text-yooldo-white yl-list-inside dark:yl-text-yooldo-white'
            }
          >
            <li>light mode</li>
            <li>px: 32px py: 40px</li>
          </ul>
        </SectionCard>
      </div>
    </div>
  ),
};

export const SectionCardStory2: Story = {
  name: 'section-card-lg',
  args: {
    size: 'lg',
  },
  render: (args) => (
    <div className={'flex flex-col gap-6'}>
      <SectionCard {...args}>
        <span className={'yl-text-xl yl-font-bold dark:yl-text-yooldo-white'}>
          Hello Yooldo Section Card
        </span>
        <ul
          className={'yl-list-disc marker:yl-text-yooldo-black yl-list-inside'}
        >
          <li>light mode</li>
          <li>px: 32px py: 40px</li>
        </ul>
      </SectionCard>
      <div className={'dark'}>
        <SectionCard {...args}>
          <span
            className={'yl-text-xl yl-font-bold dark:yl-text-yooldo-white'}
            data-mode={'dark'}
          >
            Hello Yooldo Section Card
          </span>
          <ul
            className={
              'yl-list-disc marker:yl-text-yooldo-white yl-list-inside dark:yl-text-yooldo-white'
            }
          >
            <li>light mode</li>
            <li>px: 32px py: 40px</li>
          </ul>
        </SectionCard>
      </div>
    </div>
  ),
};

export const SectionCardStory3: Story = {
  name: 'section-card-sm',
  args: {
    size: 'sm',
  },
  render: (args) => (
    <div className={'flex flex-col gap-6'}>
      <SectionCard {...args}>
        <span className={'yl-text-xl yl-font-bold dark:yl-text-yooldo-white'}>
          Hello Yooldo Section Card
        </span>
        <ul
          className={'yl-list-disc marker:yl-text-yooldo-black yl-list-inside'}
        >
          <li>light mode</li>
          <li>px: 32px py: 40px</li>
        </ul>
      </SectionCard>
      <div className={'dark'}>
        <SectionCard {...args}>
          <span
            className={'yl-text-xl yl-font-bold dark:yl-text-yooldo-white'}
            data-mode={'dark'}
          >
            Hello Yooldo Section Card
          </span>
          <ul
            className={
              'yl-list-disc marker:yl-text-yooldo-white yl-list-inside dark:yl-text-yooldo-white'
            }
          >
            <li>light mode</li>
            <li>px: 32px py: 40px</li>
          </ul>
        </SectionCard>
      </div>
    </div>
  ),
};
