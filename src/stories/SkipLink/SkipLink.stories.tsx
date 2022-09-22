import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { SkipLink } from '../../UI/SkipLink/SkipLink';

export default {
  title: 'Components/SkipLink/Implementation',
  component: SkipLink,
} as ComponentMeta<typeof SkipLink>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof SkipLink> = () => (
  <Router>
    <SkipLink />
  </Router>
);

export const Default = Template.bind({});
