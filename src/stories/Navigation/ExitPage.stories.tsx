import type { Meta, StoryObj } from '@storybook/react';
import { ExitPage } from '../../UI/ExitPage/ExitPage';

const meta = {
  title: 'Components/Navigation/Exit Page',
  component: ExitPage,
} satisfies Meta<typeof ExitPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: 'https://www.bbc.co.uk/weather',
    text: 'Exit this page',
  },
};
