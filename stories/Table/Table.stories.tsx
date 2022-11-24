import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import {
  Table,
  TableCellDataProps,
  TableRowDataProps,
} from '../../src/UI/Table/table';

export default {
  title: 'Components/Table/Implementation',
  component: Table,
} as ComponentMeta<typeof Table>;

const TableHeaderData: TableCellDataProps[] = [
  {
    value: 'Month you apply',
  },
  {
    value: 'Rate for bicycles',
    dataType: 'numeric',
  },
  {
    value: 'Rate for vehicles',
    dataType: 'numeric',
  },
  {
    value: 'Booking Required',
  },
];

const TableRowData: TableRowDataProps[] = [
  {
    cells: [
      {
        value: 'January',
      },
      {
        value: '£85',
        dataType: 'numeric',
      },
      {
        value: '£95',
        dataType: 'numeric',
      },
      {
        value: 'No',
      },
    ],
  },
  {
    cells: [
      {
        value: 'February',
      },
      {
        value: '£75',
        dataType: 'numeric',
      },
      {
        value: '£55',
        dataType: 'numeric',
      },
      {
        value: 'Advisable',
      },
    ],
  },
  {
    cells: [
      {
        value: 'March',
      },
      {
        value: '£165',
        dataType: 'numeric',
      },
      {
        value: '£125',
        dataType: 'numeric',
      },
      {
        value: 'Yes',
      },
    ],
  },
];

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Table> = (args) => (
  <Router>
    <Table {...args} />
  </Router>
);

export const Default = Template.bind({});
Default.args = {
  columnHeaders: TableHeaderData,
  rows: TableRowData,
};
