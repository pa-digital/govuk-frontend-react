import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../src/Helper/testHelper';
import { Table, TableCellDataProps, TableRowDataProps } from '../src/UI/Table/table';

export const TableHeaderData: TableCellDataProps[] = [
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

export const TableRowData: TableRowDataProps[] = [
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

expect.extend(toHaveNoViolations);

describe('Table component is accessible', () => {
  it('must not fail any accessibility tests when empty', async () => {
    const { container } = render(<Table columnHeaders={[]} rows={[]} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('must not fail any accessibility tests when just a caption', async () => {
    const { container } = render(
      <Table caption="caption" columnHeaders={[]} rows={[]} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('must not fail any accessibility tests when populated', async () => {
    const { container } = render(
      <Table columnHeaders={TableHeaderData} rows={TableRowData} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests when populated and with a caption', async () => {
    const { container } = render(
      <Table
        caption="caption"
        columnHeaders={TableHeaderData}
        rows={TableRowData}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Table component renders correctly', () => {
  it('must not render with no column headers', async () => {
    render(
      <Table caption="table caption" columnHeaders={[]} rows={TableRowData} />
    );
    const table = screen.queryByRole('table');
    expect(table).not.toBeInTheDocument();
  });

  it('must render correctly with only column headers', async () => {
    render(<Table columnHeaders={TableHeaderData} rows={[]} />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    expect(table).toHaveClass('govuk-table');

    // Test only header elements
    const monthYouHireHeader = screen.getByText('Month you apply');
    const bicycleHireHeader = screen.getByText('Rate for bicycles');
    const vehicleHireHeader = screen.getByText('Rate for vehicles');
    const bookingrequiredHeader = screen.getByText('Booking Required');

    expect(monthYouHireHeader).toBeInTheDocument();
    expect(monthYouHireHeader).toHaveClass('govuk-table__header');
    expect(monthYouHireHeader).toHaveAttribute('scope', 'col');

    expect(bicycleHireHeader).toBeInTheDocument();
    expect(bicycleHireHeader).toHaveClass(
      'govuk-table__header govuk-table__header--numeric'
    );
    expect(bicycleHireHeader).toHaveAttribute('scope', 'col');

    expect(vehicleHireHeader).toBeInTheDocument();
    expect(vehicleHireHeader).toHaveClass(
      'govuk-table__header govuk-table__header--numeric'
    );
    expect(vehicleHireHeader).toHaveAttribute('scope', 'col');

    expect(bookingrequiredHeader).toBeInTheDocument();
    expect(bookingrequiredHeader).toHaveClass('govuk-table__header');
    expect(bookingrequiredHeader).toHaveAttribute('scope', 'col');

    const tableHeaderRow = monthYouHireHeader.parentNode as HTMLElement;
    expect(tableHeaderRow).toBeInTheDocument();
    expect(tableHeaderRow).toHaveClass('govuk-table__row');

    const tableHeader = tableHeaderRow.parentNode as HTMLElement;
    expect(tableHeader).toBeInTheDocument();
    expect(tableHeader).toHaveClass('govuk-table__head');
  });

  it('must render correctly with column headers and rows but no caption', async () => {
    render(<Table columnHeaders={TableHeaderData} rows={TableRowData} />);
    const table = screen.getByRole('table');
    expect(table).toBeInTheDocument();
    expect(table).toHaveClass('govuk-table');

    // Test only column elements
    const januaryRowMonthCellData = screen.getByText('January');
    const januaryRowBicyleCellData = screen.getByText('£85');
    const januaryRowVehicleCellData = screen.getByText('£95');
    const januaryRowBookingRequiredCellData = screen.getByText('No');

    expect(januaryRowMonthCellData).toBeInTheDocument();
    expect(januaryRowMonthCellData).toHaveClass('govuk-table__header');
    expect(januaryRowMonthCellData).toHaveAttribute('scope', 'row');
    expect(januaryRowBicyleCellData).toBeInTheDocument();
    expect(januaryRowBicyleCellData).toHaveClass(
      'govuk-table__cell govuk-table__cell--numeric'
    );
    expect(januaryRowVehicleCellData).toBeInTheDocument();
    expect(januaryRowVehicleCellData).toHaveClass(
      'govuk-table__cell govuk-table__cell--numeric'
    );
    expect(januaryRowBookingRequiredCellData).toBeInTheDocument();
    expect(januaryRowBookingRequiredCellData).toHaveClass('govuk-table__cell');

    const februaryRowMonthCellData = screen.getByText('February');
    const februaryRowBicyleCellData = screen.getByText('£75');
    const februaryRowVehicleCellData = screen.getByText('£55');
    const februaryRowBookingRequiredCellData = screen.getByText('Advisable');

    expect(februaryRowMonthCellData).toBeInTheDocument();
    expect(februaryRowMonthCellData).toHaveClass('govuk-table__header');
    expect(februaryRowMonthCellData).toHaveAttribute('scope', 'row');
    expect(februaryRowBicyleCellData).toBeInTheDocument();
    expect(februaryRowBicyleCellData).toHaveClass(
      'govuk-table__cell govuk-table__cell--numeric'
    );
    expect(februaryRowVehicleCellData).toBeInTheDocument();
    expect(februaryRowVehicleCellData).toHaveClass(
      'govuk-table__cell govuk-table__cell--numeric'
    );
    expect(februaryRowBookingRequiredCellData).toBeInTheDocument();
    expect(februaryRowBookingRequiredCellData).toHaveClass('govuk-table__cell');

    const marchRowMonthCellData = screen.getByText('March');
    const marchRowBicyleCellData = screen.getByText('£165');
    const marchRowVehicleCellData = screen.getByText('£125');
    const marchRowBookingRequiredCellData = screen.getByText('Yes');

    expect(marchRowMonthCellData).toBeInTheDocument();
    expect(marchRowMonthCellData).toHaveClass('govuk-table__header');
    expect(marchRowMonthCellData).toHaveAttribute('scope', 'row');
    expect(marchRowBicyleCellData).toBeInTheDocument();
    expect(marchRowBicyleCellData).toHaveClass(
      'govuk-table__cell govuk-table__cell--numeric'
    );
    expect(marchRowVehicleCellData).toBeInTheDocument();
    expect(marchRowVehicleCellData).toHaveClass(
      'govuk-table__cell govuk-table__cell--numeric'
    );
    expect(marchRowBookingRequiredCellData).toBeInTheDocument();
    expect(marchRowBookingRequiredCellData).toHaveClass('govuk-table__cell');

    const januaryRow = januaryRowMonthCellData.parentNode as HTMLElement;
    expect(januaryRow).toBeInTheDocument();
    expect(januaryRow).toHaveClass('govuk-table__row');

    const tableBody = januaryRow.parentNode as HTMLElement;
    expect(tableBody).toBeInTheDocument();
    expect(tableBody).toHaveClass('govuk-table__body');
  });

  it('must render correctly with column headers and rows and caption', async () => {
    render(
      <Table
        caption="table caption"
        columnHeaders={TableHeaderData}
        rows={TableRowData}
      />
    );
    // Test only caption elements
    const caption = screen.getByText('table caption');
    expect(caption).toBeInTheDocument();
    expect(caption).toHaveClass('govuk-table__caption govuk-table__caption--m');
  });
});
