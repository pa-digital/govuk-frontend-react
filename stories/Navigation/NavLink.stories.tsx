import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { NavLink } from '../../src/UI/NavLink/NavLink';

export default {
  title: 'Components/Navigation/NavLink',
  component: NavLink,
} as ComponentMeta<typeof NavLink>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof NavLink> = (args) => (
  <Router>
    <NavLink {...args} />
  </Router>
);

export const Internal = Template.bind({});
Internal.args = {
  to: '/',
  text: 'Home',
};

export const External = Template.bind({});
External.args = {
  to: 'https://www.google.co.uk',
  text: 'Search for results',
  external: true,
};

export const Assistive = Template.bind({});
Assistive.args = {
  to: 'https://www.google.co.uk',
  text: 'Search for results',
  external: true,
  assistiveText: 'Search on Google',
};
