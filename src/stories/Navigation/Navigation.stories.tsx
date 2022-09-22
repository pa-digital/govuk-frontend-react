import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Navigation } from '../../UI/Navigation/Navigation';
import { NavigationLink } from '../../UI/Navigation/NavigationProps';

export default {
  title: 'Components/Navigation/HeaderNavigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

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
const Template: ComponentStory<typeof Navigation> = (args) => (
  <Router>
    <header className="govuk-header " role="banner" data-module="govuk-header">
      <div className="govuk-header__container govuk-width-container">
        <Navigation {...args} />
      </div>
    </header>
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  links: navLinks,
};
