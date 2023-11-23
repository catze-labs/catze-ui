import type { Meta, StoryObj } from '@storybook/react';

import {
  RibbonBanner,
  RibbonBannerProps,
} from '@/yooldo/components/RibbonBanner';

const meta: Meta<RibbonBannerProps> = {
  component: RibbonBanner,
};

export default meta;
type Story = StoryObj<RibbonBannerProps>;

export const PaginationStory: Story = {
  name: 'RibbonBanner',
  args: {},
  render: (args) => (
    <div className={'yl-flex yl-flex-col yl-gap-4 yl-w-full'}>
      <RibbonBanner />
    </div>
  ),
};
