import type { Meta, StoryObj } from '@storybook/react';

import {
  TabIndicator,
  TabIndicatorProps,
} from '@/yooldo/components/TabIndicator';

const meta: Meta<TabIndicatorProps> = {
  component: TabIndicator,
};

export default meta;
type Story = StoryObj<TabIndicatorProps>;

const TabListMockData = [
  {
    key: 1,
    value: 'Item 1',
    href: 'https://yooldo.gg',
  },
  {
    key: 2,
    value: 'Item 2',
    href: 'https://yooldo.gg',
  },
  {
    key: 3,
    value: 'Item 3',
    href: 'https://yooldo.gg',
  },
  {
    key: 4,
    value: 'Item 4',
    href: 'https://yooldo.gg',
  },
];
export const TabIndicatorDefaultStory: Story = {
  name: 'tab-indicator',
  args: {
    items: TabListMockData,
  },
  render: (args) => <TabIndicator {...args} />,
};

export const TabIndicatorDefaultValueStory: Story = {
  name: 'tab-indicator-default-value',
  args: {
    items: TabListMockData,
    defaultValue: 'Item 4',
  },
  render: (args) => <TabIndicator {...args} />,
};
