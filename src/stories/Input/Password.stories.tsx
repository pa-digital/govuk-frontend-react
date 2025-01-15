import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PasswordInput } from '../../UI/Input/PasswordInput';

const meta = {
  title: 'Components/Input/Password Input Implementation',
  component: PasswordInput,
} satisfies Meta<typeof PasswordInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    identifier: 'password-default',
    label: 'Standard label',
    onChange: fn(),
    onBlur: fn(),
  },
};

export const MultiQuestion: Story = {
  args: {
    identifier: 'password-multi',
    label: 'Multi Question label',
    multiQuestion: true,
    onChange: fn(),
    onBlur: fn(),
  },
};

export const Hint: Story = {
  args: {
    identifier: 'password-hint',
    label: 'Hint label',
    hint: 'This is the password you registered for the service with.',
    onChange: fn(),
    onBlur: fn(),
  },
};

export const Error: Story = {
  args: {
    identifier: 'password-error',
    label: 'Standard label',
    error: 'You must enter a value',
    onChange: fn(),
    onBlur: fn(),
  },
};
