import type { Meta, StoryObj } from '@storybook/react';

import { SectionArea, SectionAreaProps } from './SectionArea';

const meta: Meta<SectionAreaProps> = {
  component: SectionArea,
};

export default meta;
type Story = StoryObj<SectionAreaProps>;

export const SectionAreaStory: Story = {
  name: 'SectionArea',
  args: {
    as: 'article',
    title: 'Section Title',
    bodyClassName: 'yl-flex yl-flex-col yl-items-center yl-gap-8 yl-pt-4',
    titleLabelChildren: <button>Click here {'>'}</button>,
  },
  render: (args) => (
    <SectionArea {...args}>
      <section
        className={
          'yl-flex yl-items-center yl-justify-between yl-gap-3 yl-w-full'
        }
      >
        <div className={'yl-h-20 yl-flex-1 yl-bg-yooldo-sunset-200'}>
          section 1
        </div>
        <div className={'yl-h-20 yl-flex-1 yl-bg-yooldo-sunset-400'}>
          section 2
        </div>
        <div className={'yl-h-20 yl-flex-1 yl-bg-yooldo-sunset-600'}>
          section 3
        </div>
      </section>
    </SectionArea>
  ),
};
