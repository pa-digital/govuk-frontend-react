import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../../UI/Tag/tag';

export default {
  title: 'Components/Tags/Implementation',
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'Tag text',
  },
};
