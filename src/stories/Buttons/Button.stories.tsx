import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../../UI/Buttons/Button';

const meta = {
  title: 'Components/Buttons/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
    type: 'button',
    children: 'Button',
    onClick: fn(),
    onKeyDown: fn(),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    type: 'button',
    children: 'Button',
    onClick: fn(),
    onKeyDown: fn(),
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    type: 'button',
    children: 'Button',
    onClick: fn(),
    onKeyDown: fn(),
  },
};

export const Inverse: Story = {
  args: {
    variant: 'inverse',
    type: 'button',
    children: 'Button',
    onClick: fn(),
    onKeyDown: fn(),
  },
  render: function Render(args) {
    return <Button {...args} />;
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    type: 'button',
    children: 'Button',
    disabled: true,
    onClick: fn(),
    onKeyDown: fn(),
  },
};
