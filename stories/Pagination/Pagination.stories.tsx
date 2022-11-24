import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Pagination } from '../../src/UI/Paging/Pagination';

export default {
  title: 'Components/Pagination/Implementation',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Pagination> = (args) => (
  <Router>
    <Pagination {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  pageNumbers: 5,
  currentPage: 3,
  label: 'results 1',
};

export const HiddenPrevious = Template.bind({});
HiddenPrevious.args = {
  pageNumbers: 5,
  currentPage: 1,
  label: 'results 1',
};

export const HiddenNext = Template.bind({});
HiddenNext.args = {
  pageNumbers: 5,
  currentPage: 5,
  label: 'results 1',
};

export const LargeRange = Template.bind({});
LargeRange.args = {
  pageNumbers: 20,
  currentPage: 6,
  label: 'results 1',
};

export const SmallRange = Template.bind({});
SmallRange.args = {
  pageNumbers: 3,
  currentPage: 2,
  label: 'results 1',
};
