import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { BackLink } from '../../src/UI/BackLink/BackLink';

export default {
  title: 'Components/Navigation/BackLink',
  component: BackLink,
} as ComponentMeta<typeof BackLink>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof BackLink> = (args) => (
  <Router>
    <BackLink {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  to: '/',
};
