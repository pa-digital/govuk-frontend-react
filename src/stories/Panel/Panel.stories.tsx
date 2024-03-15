import type { Meta, StoryObj } from '@storybook/react';
import { Panel } from '../../UI/Panel/Panel';

const meta = {
  title: 'Components/Panel/Implementation',
  component: Panel,
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    heading: 'Panel title',
    children: 'Panel content',
  },
};
