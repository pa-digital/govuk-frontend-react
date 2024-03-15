import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { SummaryListItemProps } from '../../UI/SummaryList/SummaryList';
import { SummaryCard, CardAction } from '../../UI/SummaryCard/SummaryCard';
import { action } from '@storybook/addon-actions';

const SummaryData: SummaryListItemProps[] = [
  {
    key: 'Name',
    value: 'Sarah Philips',
    links: [
      {
        to: '/update-name',
        text: 'Change',
      },
    ],
  },
  {
    key: 'Date of birth',
    value: '5 January 1978',
    links: [
      {
        to: '/update-name',
        text: 'Change',
      },
    ],
  },
  {
    key: 'Contact details',
    value: (
      <>
        07700 900457
        <br />
        sarah.phillips@example.com
      </>
    ),
    links: [
      {
        to: '/add-details',
        text: 'Add',
        assistiveLinkText: 'Add your phone number or email address',
      },
      {
        to: '/update-details',
        text: 'Change',
        assistiveLinkText: 'Change your phone number or email address',
      },
    ],
  },
];

const ActionsData: CardAction[] = [
  {
    text: 'Record Payment',
    extendedText: 'from this tenant',
    action: 'payment',
  },
  {
    text: 'Evict Tenant',
    extendedText: 'from this property',
    action: 'evict',
  },
];

const meta = {
  title: 'Components/Summary Card/Old Implementation',
  component: SummaryCard,
} satisfies Meta<typeof SummaryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const args = {
      title: 'Lead tenant',
      summaryList: SummaryData,
    };
    return (
      <Router>
        <SummaryCard
          {...args}
          handleCardAction={action('Card Action Clicked')}
        />
      </Router>
    );
  },
};

export const Actions: Story = {
  render: () => {
    const args = {
      title: 'Update tenants',
      summaryList: SummaryData,
      cardActions: ActionsData,
    };
    return (
      <Router>
        <SummaryCard
          {...args}
          handleCardAction={action('Card Action Clicked')}
        />
      </Router>
    );
  },
};
