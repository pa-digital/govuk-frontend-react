import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { DetachedNavigation } from '../../UI/Navigation/DetachedNavigation';
import { NavigationProps } from '../../UI/Navigation/NavigationProps';

const meta = {
  title: 'Components/Navigation/Detached Navigation',
  component: DetachedNavigation,
} satisfies Meta<typeof DetachedNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
          <DetachedNavigation {...args} />
        </div>
      </Router>
    );
  },
};
