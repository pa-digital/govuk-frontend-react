import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Select, SelectDataProps } from '../../UI/Select/Select';

const meta = {
  title: 'Components/Select/Implementation',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Default: Story = {
  args: {
    identifier: 'select',
    label: 'Select your address',
    options: AddressData,
    onValueChange: fn(),
    onValueBlur: fn(),
  },
};

export const Hint: Story = {
  args: {
    identifier: 'select',
    label: 'Select your address',
    hint: 'This is your current address',
    options: AddressData,
    onValueChange: fn(),
    onValueBlur: fn(),
  },
};

export const PreSelected: Story = {
  args: {
    identifier: 'select',
    label: 'Select your address',
    options: PreSelectedData,
    value: 'updated',
    onValueChange: fn(),
    onValueBlur: fn(),
  },
};

export const Error: Story = {
  args: {
    identifier: 'select',
    label: 'Select your address',
    error: 'You must select your current address',
    options: AddressData,
    onValueChange: fn(),
    onValueBlur: fn(),
  },
};
