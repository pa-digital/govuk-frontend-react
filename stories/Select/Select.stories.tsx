import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select, SelectDataProps } from '../../src/UI/Select/Select';

export default {
  title: 'Components/Select/Implementation',
  component: Select,
} as ComponentMeta<typeof Select>;

const AddressData: SelectDataProps[] = [
  {
    text: '--- Select your address ---',
    value: '',
  },
  {
    text: '1 Street Name, Town, County NW1 1AA',
    value: '1 Street Name,Town,County,NW1 1AA',
  },
  {
    text: '2 Street Name, Second Address Line, Town, County NW1 1AA',
    value: '2 Street Name,Second Address Line,Town,County,NW1 1AA',
  },
  {
    text: '3 Street Name, Town, County NW1 1AA',
    value: '3 Street Name,Town,County,NW1 1AA',
  },
  {
    text: '4 Street Name, Second Address Line, Town, County NW1 1AA',
    value: '4 Street Name,Second Address Line,Town,County,NW1 1AA',
  },
  {
    text: '5 Street Name, Town, County NW1 1AA',
    value: '5 Street Name,Town,County,NW1 1AA',
  },
];

const PreSelectedData: SelectDataProps[] = [
  {
    text: 'Recently published',
    value: 'published',
  },
  {
    text: 'Recently updated',
    value: 'updated',
  },
  {
    text: 'Most views',
    value: 'views',
  },
  {
    text: 'Most comments',
    value: 'comments',
  },
];

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  identifier: 'select',
  label: 'Select your address',
  options: AddressData,
};

export const Hint = Template.bind({});
Hint.args = {
  identifier: 'select',
  label: 'Select your address',
  hint: 'This is your current address',
  options: AddressData,
};

export const PreSelected = Template.bind({});
PreSelected.args = {
  identifier: 'select',
  label: 'Select your address',
  options: PreSelectedData,
  value: 'updated',
};

export const Error = Template.bind({});
Error.args = {
  identifier: 'select',
  label: 'Select your address',
  error: 'You must select your current address',
  options: AddressData,
};
