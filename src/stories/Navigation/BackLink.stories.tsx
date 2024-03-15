import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { BackLink } from '../../UI/BackLink/BackLink';

const meta = {
  title: 'Components/Navigation/Back Link',
  component: BackLink,
} satisfies Meta<typeof BackLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const args = {
      to: '/test',
    };
    return (
      <Router>
        <BackLink {...args} />
      </Router>
    );
  },
};
