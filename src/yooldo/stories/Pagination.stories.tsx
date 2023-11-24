import type { Meta, StoryObj } from '@storybook/react';

import { Pagination, PaginationProps } from '@/yooldo/components/Pagination';

const meta: Meta<PaginationProps> = {
  component: Pagination,
};

export default meta;
type Story = StoryObj<PaginationProps>;

export const PaginationStory: Story = {
  name: 'Pagination',
  args: {
    currentPage: 1,
    totalCount: 30,
    countPerPage: 4,
    onClick: (page) => {
      console.log(page);
    },
  },
  render: (args) => (
    <div className={'yl-flex yl-flex-col yl-gap-4'}>
      {Array.from({ length: 30 }, (_, i) => <span>{i}</span>).slice(
        (args.currentPage - 1) * 4,
        Math.min(30, args.currentPage * 4 + 1),
      )}
      <Pagination {...args} />
    </div>
  ),
};
