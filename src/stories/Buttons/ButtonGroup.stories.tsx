import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../UI/Buttons/Button';
import { ButtonGroup } from '../../UI/Buttons/ButtonGroup';
import React from 'react';
import { fn } from '@storybook/test';

const meta = {
  title: 'Components/Buttons/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: '' },
  render: function Render(args) {
    return (
      <ButtonGroup>
        <>
          <Button onClick={fn()} onKeyDown={fn()}>
            button 1
          </Button>
          <Button variant="secondary" onClick={fn()} onKeyDown={fn()}>
            button 2
          </Button>
          <Button variant="warning" disabled onClick={fn()} onKeyDown={fn()}>
            button 3
          </Button>
        </>
      </ButtonGroup>
    );
  },
};
