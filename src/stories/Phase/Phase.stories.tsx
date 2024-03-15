import type { Meta, StoryObj } from '@storybook/react';
import { Phase } from '../../UI/Phase/Phase';

const meta = {
  title: 'Components/Phase/Implementation',
  component: Phase,
} satisfies Meta<typeof Phase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    phase: 'ALPHA',
    children: 'Phase content which can contain a link',
  },
};
