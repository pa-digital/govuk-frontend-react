import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Notification } from '../../src/UI/Notification/Notification';

export default {
  title: 'Components/Notification/Implementation',
  component: Notification,
} as ComponentMeta<typeof Notification>;

const multipleNotification = [
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
];

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Notification> = (args) => (
  <Router>
    <Notification {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  identifier: 'Notification',
  heading: 'Notification heading',
  content: multipleNotification,
};
