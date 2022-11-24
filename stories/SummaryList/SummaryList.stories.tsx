import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import {
  SummaryList,
  SummaryListItemProps,
} from '../../src/UI/SummaryList/SummaryList';

export default {
  title: 'Components/SummaryList/Implementation',
  component: SummaryList,
} as ComponentMeta<typeof SummaryList>;

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

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof SummaryList> = (args) => (
  <Router>
    <SummaryList {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  list: SummaryData,
};
