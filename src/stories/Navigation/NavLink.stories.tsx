import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { NavLink } from '../../UI/NavLink/NavLink';

const meta = {
  title: 'Components/Navigation/Nav Link',
  component: NavLink,
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: '/',
    text: 'Home',
  },
  render: function Render(args) {
    return (
      <Router>
        <NavLink {...args} />
      </Router>
    );
  },
};

export const Assistive: Story = {
  args: {
    to: 'https://www.google.co.uk',
    text: 'Search for results',
    assistiveText: 'Search on Google',
  },
  render: function Render(args) {
    return (
      <Router>
        <NavLink {...args} />
      </Router>
    );
  },
};

export const External: Story = {
  args: {
    to: 'https://www.google.co.uk',
    text: 'Google homepage',
    external: true,
  },
  render: function Render(args) {
    return (
      <Router>
        <NavLink {...args} />
      </Router>
    );
  },
};
