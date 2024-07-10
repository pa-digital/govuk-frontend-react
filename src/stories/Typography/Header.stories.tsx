import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../../UI/Typography/Header';

const meta = {
  title: 'Components/Typography/Header/Implementation',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    as: 'h1',
    children: 'Heading 1 Text',
  },
};

export const H2: Story = {
  args: {
    as: 'h2',
    children: 'Heading 2 Text',
  },
};

export const H3: Story = {
  args: {
    as: 'h3',
    children: 'Heading 3 Text',
  },
};

export const H4: Story = {
  args: {
    as: 'h4',
    children: 'Heading 4 Text',
  },
};
