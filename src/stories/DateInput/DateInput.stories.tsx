import type { Meta, StoryObj } from '@storybook/react';
import { DateInput, errorTypeEnum } from '../../UI/DateInput/DateInput';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Date Input/Implementation',
  component: DateInput,
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    identifier: 'date-input',
    label: 'Date of birth',
    onValueChange: fn(),
  },
};

export const Hint: Story = {
  args: {
    identifier: 'date-input',
    label: 'Date of birth',
    hint: 'This is the date you were born',
    onValueChange: fn(),
  },
};

export const PartialError: Story = {
  args: {
    identifier: 'date-input',
    label: 'Date of birth',
    error: 'You must enter a full date of birth',
    errorType: errorTypeEnum.dayMonth,
    onValueChange: fn(),
  },
};

export const AllError: Story = {
  args: {
    identifier: 'date-input',
    label: 'Date of birth',
    error: 'You must enter a date of birth',
    errorType: errorTypeEnum.all,
    onValueChange: fn(),
  },
};
