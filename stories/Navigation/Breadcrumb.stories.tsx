import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { BreadcrumbLink, Breadcrumbs } from '../../src/UI/Breadcrumbs/Breadcrumbs';

export default {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>;

const BreadcrumbLinks: BreadcrumbLink[] = [
  {
    text: 'GDS Compliance',
    to: '/',
  },
  {
    text: 'Components',
    to: '/components',
  },
  {
    text: 'Inputs',
    to: '/inputs',
    assistiveText: 'standard inputs for a form',
  },
];

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Router>
    <Breadcrumbs {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  collapseOnMobile: false,
  links: BreadcrumbLinks,
};
