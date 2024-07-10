import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../../UI/Tag/tag';

const meta = {
  title: 'Components/Tags/Implementation',
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Tag Text',
  },
};

export const Grey: Story = {
  args: {
    state: 'grey',
    children: 'Tag Text',
  },
};

export const Green: Story = {
  args: {
    state: 'green',
    children: 'Tag Text',
  },
};

export const Turquoise: Story = {
  args: {
    state: 'turquoise',
    children: 'Tag Text',
  },
};

export const Blue: Story = {
  args: {
    state: 'blue',
    children: 'Tag Text',
  },
};

export const Purple: Story = {
  args: {
    state: 'purple',
    children: 'Tag Text',
  },
};

export const Pink: Story = {
  args: {
    state: 'pink',
    children: 'Tag Text',
  },
};

export const Red: Story = {
  args: {
    state: 'red',
    children: 'Tag Text',
  },
};

export const Orange: Story = {
  args: {
    state: 'orange',
    children: 'Tag Text',
  },
};

export const Yellow: Story = {
  args: {
    state: 'yellow',
    children: 'Tag Text',
  },
};
