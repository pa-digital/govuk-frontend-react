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
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    type: 'button',
    children: 'Button',
  },
};

export const Inverse: Story = {
  render: () => {
    const args = {
      variant: 'inverse',
      type: 'button',
      children: 'Button',
    };
    return (
      <div
        style={{
          backgroundColor: '#1d70b8',
          textAlign: 'center',
          paddingTop: '1.5em',
        }}
      >
        <Button {...args} />
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    type: 'button',
    children: 'Button',
    disabled: true,
  },
};
