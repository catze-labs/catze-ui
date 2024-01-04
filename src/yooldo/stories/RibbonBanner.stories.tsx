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
  args: {
    onOpenHandler: (open) => {
      console.log(open);
    },
  },
  render: (args) => (
    <div
      className={
        'yl-flex yl-flex-col yl-gap-4 yl-w-full yl-h-96 yl-bg-yooldo-black'
      }
    >
      <RibbonBanner {...args}>
        <a
          href={'https://www.yooldo.gg'}
          className={
            'yl-text-sm yl-text-yooldo-white yl-underline yl-underline-offset-2'
          }
          target={'_blank'}
        >
          Deposit to Earn $YOOL token Rewards
        </a>
      </RibbonBanner>
    </div>
  ),
};
