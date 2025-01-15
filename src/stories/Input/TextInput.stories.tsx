import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextInput } from '../../UI/Input/TextInput';

const meta = {
  title: 'Components/Input/Text Input Implementation',
  component: TextInput,
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    identifier: 'text-input-default',
    label: 'Standard label',
    onChange: fn(),
    onBlur: fn(),
  },
};

export const MultiQuestion: Story = {
  args: {
    identifier: 'text-input-multi',
    label: 'Multi Question label',
    multiQuestion: true,
    onChange: fn(),
    onBlur: fn(),
  },
};

export const Hint: Story = {
  args: {
    identifier: 'text-input-hint',
    label: 'Hint label',
    hint: 'Hint to assist the user',
    onChange: fn(),
    onBlur: fn(),
  },
};

export const Prefix: Story = {
  args: {
    identifier: 'text-input-prefix',
    label: 'How much does it cost, in pounds?',
    prefix: '£',
    width: 5,
    onChange: fn(),
    onBlur: fn(),
  },
};

export const Suffix: Story = {
  args: {
    identifier: 'text-input-suffix',
    label: 'What is the weight, in kilo grammes?',
    suffix: 'kg',
    width: 4,
    onChange: fn(),
    onBlur: fn(),
  },
};

export const Error: Story = {
  args: {
    identifier: 'text-input-error',
    label: 'Standard label',
    error: 'You must enter a value',
    onChange: fn(),
    onBlur: fn(),
  },
};
