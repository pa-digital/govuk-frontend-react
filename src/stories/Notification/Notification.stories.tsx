import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Notification } from '../../UI/Notification/Notification';

const meta = {
  title: 'Components/Notification/Implementation',
  component: Notification,
} satisfies Meta<typeof Notification>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const args: NotificationProps = {
      identifier: 'Notification',
      heading: 'Notification heading',
      content: [
        {
          text: 'first paragraph text',
          link: {
            to: '/firstlink',
            text: 'first link text',
          },
        },
        {
          text: 'second paragraph text',
          link: {
            to: 'https://www.google.co.uk',
            $external: true,
            $assistiveText: 'Search via Google',
            text: 'search via Google',
          },
        },
      ],
    };
    return (
      <Router>
        <Notification {...args} />
      </Router>
    );
  },
};
