import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextCounter } from '../../UI/Input/TextCounter';

const meta = {
  title: 'Components/Input/Text Counter Implementation',
  component: TextCounter,
} satisfies Meta<typeof TextCounter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    identifier: 'input',
    label: 'Standard label',
    maxCount: 200,
    counterType: 'character',
    onChange: fn(),
    onBlur: fn(),
  },
};

export const Word: Story = {
  args: {
    identifier: 'input',
    label: 'Hint label',
    maxCount: 50,
    counterType: 'word',
    onChange: fn(),
    onBlur: fn(),
  },
};

export const Threshold: Story = {
  args: {
    identifier: 'input',
    label: 'Threshold of 10',
    maxCount: 200,
    threshold: 10,
    counterType: 'character',
    onChange: fn(),
    onBlur: fn(),
  },
};

export const ExceededCountError: Story = {
  args: {
    identifier: 'input',
    label: 'label',
    maxCount: 5,
    counterType: 'character',
    value: 'this is a longer value than permitted',
    onChange: fn(),
    onBlur: fn(),
  },
};

export const Error: Story = {
  args: {
    identifier: 'input',
    label: 'Standard label',
    error: 'You must enter a value',
    counterType: 'character',
    maxCount: 10,
    onChange: fn(),
    onBlur: fn(),
  },
};
