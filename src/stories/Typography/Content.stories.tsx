import type { Meta, StoryObj } from '@storybook/react';
import { Content } from '../../UI/Typography/Content';

const meta = {
  title: 'Components/Typography/Content/Implementation',
  component: Content,
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paragraph: Story = {
  args: {
    as: 'p',
    children: 'This is the content',
  },
};

export const Pre: Story = {
  args: {
    as: 'pre',
    children: 'This is the content',
  },
};
