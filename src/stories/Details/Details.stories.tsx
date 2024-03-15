import type { Meta, StoryObj } from '@storybook/react';
import { Details } from '../../UI/Details/Details';

const meta = {
  title: 'Components/Details/Implementation',
  component: Details,
} satisfies Meta<typeof Details>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Details title',
    children: 'Content that is placed within the expandable details element',
  },
};
