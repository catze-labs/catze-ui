import type { Meta, StoryObj } from '@storybook/react';

import { RibbonBanner, RibbonBannerProps } from './RibbonBanner';

const meta: Meta<RibbonBannerProps> = {
  component: RibbonBanner,
};

export default meta;
type Story = StoryObj<RibbonBannerProps>;

export const PaginationStory: Story = {
  name: 'RibbonBanner',
  args: {},
  render: (args) => (
    <div className={'flex flex-col gap-4 w-full'}>
      <RibbonBanner />
    </div>
  ),
};
