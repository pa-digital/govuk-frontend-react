import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { DetachedNavigation } from '../../UI/Navigation/DetachedNavigation';
import { NavigationLink } from '../../UI/Navigation/NavigationProps';

export default {
  title: 'Components/Navigation/DetachedNavigation',
  component: DetachedNavigation,
} as ComponentMeta<typeof DetachedNavigation>;

const navLinks: NavigationLink[] = [
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
    assistiveText: 'Some examples of the implementation of the GDS Frameworks',
  },
];

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof DetachedNavigation> = (args) => (
  <Router>
    <div className="govuk-header__container govuk-width-container"><DetachedNavigation {...args} /></div>    
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  links: navLinks,
};
