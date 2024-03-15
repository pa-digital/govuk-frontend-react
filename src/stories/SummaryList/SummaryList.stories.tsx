import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import {
  SummaryList,
  SummaryListItemProps,
} from '../../UI/SummaryList/SummaryList';

const meta = {
  title: 'Components/Summary List/Implementation',
  component: SummaryList,
} satisfies Meta<typeof SummaryList>;

export default meta;
type Story = StoryObj<typeof meta>;

const SummaryData: SummaryListItemProps[] = [
  {
    key: 'Name',
    value: 'Sarah Philips',
    links: [],
  },
  {
    key: 'Date of birth',
    value: '5 January 1978',
    links: [],
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
    links: [],
  },
];

const ActionSummaryData: SummaryListItemProps[] = [
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
        to: '/update-dob',
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

const PartialActionSummaryData: SummaryListItemProps[] = [
  {
    key: 'Name',
    value: 'Sarah Philips',
    links: [],
  },
  {
    key: 'Date of birth',
    value: '5 January 1978',
    links: [
      {
        to: '/update-dob',
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

const MissingSummaryData: SummaryListItemProps[] = [
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
        to: '/update-dob',
        text: 'Change',
      },
    ],
  },
  {
    key: 'Contact details',
    value: {
      to: '/enter-contact-info',
      text: 'Enter contact information',
    },
    links: [],
  },
];

export const Default: Story = {
  render: () => {
    const args = {
      list: SummaryData,
    };
    return (
      <Router>
        <SummaryList {...args} />
      </Router>
    );
  },
};

export const WithActions: Story = {
  render: () => {
    const args = {
      list: ActionSummaryData,
    };
    return (
      <Router>
        <SummaryList {...args} />
      </Router>
    );
  },
};

export const PartialActions: Story = {
  render: () => {
    const args = {
      list: PartialActionSummaryData,
    };
    return (
      <Router>
        <SummaryList {...args} />
      </Router>
    );
  },
};

export const HiddenBorders: Story = {
  render: () => {
    const args = {
      list: SummaryData,
      hideBorders: true,
    };
    return (
      <Router>
        <SummaryList {...args} />
      </Router>
    );
  },
};

export const MissingInformation: Story = {
  render: () => {
    const args = {
      list: MissingSummaryData,
    };
    return (
      <Router>
        <SummaryList {...args} />
      </Router>
    );
  },
};
