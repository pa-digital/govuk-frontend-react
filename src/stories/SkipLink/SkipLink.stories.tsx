import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { SkipLink } from '../../UI/SkipLink/SkipLink';

const meta = {
  title: 'Components/Skiplink/Implementation',
  component: SkipLink,
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Router>
        <SkipLink />
      </Router>
    );
  },
};
