import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import {
  SummaryListItemProps,
} from '../../src/UI/SummaryList/SummaryList';
import {SummaryCard, CardAction} from '../../src/UI/SummaryCard/SummaryCard';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/SummaryCard/Implementation',
  component: SummaryCard,
} as ComponentMeta<typeof SummaryCard>;

const SummaryData: SummaryListItemProps[] = [
  {
    key: 'Name',
    value: 'Sarah Philips',
    link: '/update-name',
  },
  {
    key: 'Date of birth',
    value: '5 January 1978',
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
    link: '/update-contact',
    assistiveLinkText: 'Change your phone number or email address',
  },
];

const ActionsData: CardAction[] = [
    {
        text: "Record Payment",
        extendedText: "from this tenant",
        action: "payment"
    },
    {
        text: "Evict Tenant",
        extendedText: "from this property",
        action: "evict"
    }
]

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof SummaryCard> = (args) => (
  <Router>
    <SummaryCard {...args} handleCardAction={action('Card Action Clicked')} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  title: "Lead tenant", summaryList: SummaryData
};


export const Actions = Template.bind({});
Actions.args = {
    title: "Update tenants", summaryList: SummaryData, cardActions: ActionsData
};
