import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { ServiceNavigation } from '../../UI/Navigation/ServiceNavigation';

const meta = {
  title: 'Components/Navigation/Service Navigation',
  component: ServiceNavigation,
} satisfies Meta<typeof ServiceNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    identifier: 'plainServiceNav',
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
        <div className="govuk-header__container govuk-width-container">
          <ServiceNavigation {...args} />
        </div>
      </Router>
    );
  },
};

export const WithServiceName: Story = {
  args: {
    identifier: 'enhancedServiceNav',
    serviceNameDetails: {
      text: 'Service Name',
      to: '/',
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
        <div className="govuk-header__container govuk-width-container">
          <ServiceNavigation {...args} />
        </div>
      </Router>
    );
  },
};
