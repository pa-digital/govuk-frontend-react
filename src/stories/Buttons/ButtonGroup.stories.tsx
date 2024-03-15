import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../UI/Buttons/Button';
import { ButtonGroup } from '../../UI/Buttons/ButtonGroup';
import React from 'react';

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
  render: () => {
    return (
      <ButtonGroup>
        <>
          <Button>button 1</Button>
          <Button variant="secondary">button 2</Button>
          <Button variant="warning" disabled>
            button 3
          </Button>
        </>
      </ButtonGroup>
    );
  },
};
