import type { Meta, StoryObj } from '@storybook/react';
import { Inset } from '../../UI/Inset/Inset';

const meta = {
  title: 'Components/Inset/Implementation',
  component: Inset,
} satisfies Meta<typeof Inset>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This has content within it',
  },
};
