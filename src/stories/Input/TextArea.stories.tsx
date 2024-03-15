import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { TextArea } from '../../UI/Input/TextArea';

const meta = {
  title: 'Components/Input/Text Area Implementation',
  component: TextArea,
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    identifier: 'input',
    label: 'Standard label',
    onChange: fn(),
    onBlur: fn(),
  },
};

export const Hint: Story = {
  args: {
    identifier: 'input',
    label: 'Hint label',
    hint: 'Hint to assist the user',
    onChange: fn(),
    onBlur: fn(),
  },
};

export const MultiQuestion: Story = {
  args: {
    identifier: 'input',
    label: 'Multi Question label',
    multiQuestion: true,
    onChange: fn(),
    onBlur: fn(),
  },
};

export const Error: Story = {
  args: {
    identifier: 'input',
    label: 'Standard label',
    error: 'You must enter a value',
    onChange: fn(),
    onBlur: fn(),
  },
};
