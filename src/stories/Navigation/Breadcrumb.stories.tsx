import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import {
  Breadcrumbs,
  BreadcrumbsProps,
} from '../../UI/Breadcrumbs/Breadcrumbs';

const meta = {
  title: 'Components/Navigation/Breadcrumbs',
  component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const args: BreadcrumbsProps = {
      links: [
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
      ],
    };
    return (
      <Router>
        <Breadcrumbs {...args} />
      </Router>
    );
  },
};
