import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Navigation } from '../../UI/Navigation/Navigation';

const meta = {
  title: 'Components/Navigation/Header Navigation',
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    identifier: 'main-navigation',
    links: [
      {
        to: '/',
        text: 'Home',
      },
      {
        to: '/content',
        text: 'Content',
      },
      {
        to: '/examples',
        text: 'Examples',
        assistiveText:
          'Some examples of the implementation of the GDS Frameworks',
      },
    ],
  },
  render: function Render(args) {
    return (
      <Router>
        <Navigation {...args} />
      </Router>
    );
  },
};

export const ServiceName: Story = {
  args: {
    identifier: 'main-navigation',
    serviceNameDetails: {
      to: '/service-url',
      text: 'Service',
      assistiveText: 'extra help for link',
    },
    links: [
      {
        to: '/',
        text: 'Home',
      },
      {
        to: '/content',
        text: 'Content',
      },
      {
        to: '/examples',
        text: 'Examples',
        assistiveText:
          'Some examples of the implementation of the GDS Frameworks',
      },
    ],
  },
  render: function Render(args) {
    return (
      <Router>
        <Navigation {...args} />
      </Router>
    );
  },
};
