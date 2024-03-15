import type { Meta, StoryObj } from '@storybook/react';
import { Warning } from '../../UI/Warning/Warning';

const meta = {
  title: 'Components/Warning/Implementation',
  component: Warning,
} satisfies Meta<typeof Warning>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'You can be fined up to £5,000 if you do not register.',
  },
};
