import type { Meta, StoryObj } from '@storybook/react';
import { ErrorSummary } from '../../UI/ErrorSummary/ErrorSummary';

const meta = {
  title: 'Components/Error Summary/Implementation',
  component: ErrorSummary,
} satisfies Meta<typeof ErrorSummary>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    identifier: 'error-summary',
    errors: {
      firstName: {
        message: 'First name is required',
        type: 'required',
        ref: { name: 'firstName' },
      },
      lastName: {
        message: 'Last name is required',
        type: 'required',
        ref: { name: 'lastName' },
      },
    },
  },
};
