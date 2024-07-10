import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter as Router } from 'react-router-dom';
import {
  Table,
  TableCellDataProps,
  TableRowDataProps,
} from '../../UI/Table/table';

const meta = {
  title: 'Components/Table/Implementation',
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Default: Story = {
  args: {
    columnHeaders: TableHeaderData,
    rows: TableRowData,
  },
  render: function Render(args) {
    return (
      <Router>
        <Table {...args} />
      </Router>
    );
  },
};

export const Caption: Story = {
  args: {
    caption: 'Table caption',
    columnHeaders: TableHeaderData,
    rows: TableRowData,
  },
  render: function Render(args) {
    return (
      <Router>
        <Table {...args} />
      </Router>
    );
  },
};
