import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { NavLink, NavLinkProps } from '../../UI/NavLink/NavLink';

const meta = {
  title: 'Components/Navigation/Nav Link',
  component: NavLink,
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const args: NavLinkProps = {
      to: '/',
      text: 'Home',
    };
    return (
      <Router>
        <NavLink {...args} />
      </Router>
    );
  },
};

export const Assistive: Story = {
  render: () => {
    const args: NavLinkProps = {
      to: 'https://www.google.co.uk',
      text: 'Search for results',
      assistiveText: 'Search on Google',
    };
    return (
      <Router>
        <NavLink {...args} />
      </Router>
    );
  },
};

export const External: Story = {
  render: () => {
    const args: NavLinkProps = {
      to: 'https://www.google.co.uk',
      text: 'Google homepage',
      external: true,
    };
    return (
      <Router>
        <NavLink {...args} />
      </Router>
    );
  },
};
