import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
  userEvent,
} from '../../Helper/testHelper';
import { Select, SelectDataProps } from './Select';

expect.extend(toHaveNoViolations);

const SelectData: SelectDataProps[] = [
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

beforeAll(() => {
  (global as any).document.createRange = () => ({
    setStart: () => {},
    setEnd: () => {},
    commonAncestorContainer: {
      nodeName: 'BODY',
      ownerDocument: document,
    },
  });
});

describe('All Select configurations are accessible', () => {
  it('default select', async () => {
    const { container } = render(
      <Select identifier="select" label="label" options={SelectData} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('preselected tag', async () => {
    const { container } = render(
      <Select
        identifier="select"
        label="label"
        options={SelectData}
        value="2 Street Name,Second Address Line,Town,County,NW1 1AA"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('All Selects render correctly', () => {
  it('default select renders content correctly', async () => {
    render(<Select identifier="select" label="label" options={SelectData} />);

    const select = await screen.findByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveClass('govuk-select');
    expect(select).toHaveAttribute('id', 'select');
    expect(select).toHaveAttribute('name', 'select');
    expect(select).toHaveAttribute('aria-describedby', 'select-label');

    const options = await screen.findAllByRole('option');
    expect(options).toHaveLength(6);
    expect(options[0]).toHaveTextContent('--- Select your address ---');
    expect(options[0]).toHaveValue('');
    expect(options[1]).toHaveTextContent('1 Street Name, Town, County NW1 1AA');
    expect(options[1]).toHaveValue('1 Street Name,Town,County,NW1 1AA');
    expect(options[2]).toHaveTextContent(
      '2 Street Name, Second Address Line, Town, County NW1 1AA'
    );
    expect(options[2]).toHaveValue(
      '2 Street Name,Second Address Line,Town,County,NW1 1AA'
    );
    expect(options[3]).toHaveTextContent('3 Street Name, Town, County NW1 1AA');
    expect(options[3]).toHaveValue('3 Street Name,Town,County,NW1 1AA');
    expect(options[4]).toHaveTextContent(
      '4 Street Name, Second Address Line, Town, County NW1 1AA'
    );
    expect(options[4]).toHaveValue(
      '4 Street Name,Second Address Line,Town,County,NW1 1AA'
    );
    expect(options[5]).toHaveTextContent('5 Street Name, Town, County NW1 1AA');
    expect(options[5]).toHaveValue('5 Street Name,Town,County,NW1 1AA');
  });

  it('select renders pre-selected content correctly', async () => {
    render(
      <Select
        identifier="select"
        label="label"
        options={SelectData}
        value="2 Street Name,Second Address Line,Town,County,NW1 1AA"
      />
    );
    expect(
      (
        screen.getByRole('option', {
          name: '--- Select your address ---',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);
    expect(
      (
        screen.getByRole('option', {
          name: '1 Street Name, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);
    expect(
      (
        screen.getByRole('option', {
          name: '2 Street Name, Second Address Line, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(true);
    expect(
      (
        screen.getByRole('option', {
          name: '3 Street Name, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);
    expect(
      (
        screen.getByRole('option', {
          name: '4 Street Name, Second Address Line, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);
    expect(
      (
        screen.getByRole('option', {
          name: '5 Street Name, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);
  });

  it('select renders hint content correctly', async () => {
    render(
      <Select
        identifier="select"
        label="label"
        options={SelectData}
        hint="Please must select a value"
      />
    );

    const select = await screen.findByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute(
      'aria-describedby',
      'select-hint select-label'
    );

    const hint = await screen.findByText('Please must select a value');
    expect(hint).toBeInTheDocument();
    expect(hint).toHaveClass('govuk-hint');
    expect(hint).toHaveAttribute('id', 'select-hint');
  });

  it('select renders error content correctly', async () => {
    render(
      <Select
        identifier="select"
        label="label"
        options={SelectData}
        error="You must select a value"
      />
    );

    const select = await screen.findByRole('combobox');
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute(
      'aria-describedby',
      'select-error select-label'
    );
    expect(select).toHaveAttribute('aria-invalid', 'true');

    const error = await screen.findByText('You must select a value');
    expect(error).toBeInTheDocument();
    expect(error).toHaveClass('govuk-error-message');
    expect(error).toHaveAttribute('id', 'select-error');
  });
});

describe('Changing selected value functions correctly', () => {
  it('default select updates value correctly', async () => {
    window.document.getSelection = jest.fn();
    const initData: SelectDataProps[] = [];
    SelectData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
      });
    });

    const mockOnValueChange = jest.fn();
    render(
      <Select
        identifier="select"
        label="label"
        options={initData}
        onValueChange={mockOnValueChange}
      />
    );

    const select = await screen.findByRole('combobox');
    expect(select).toBeInTheDocument();
    await userEvent.selectOptions(select, '3 Street Name,Town,County,NW1 1AA');

    expect(
      (
        screen.getByRole('option', {
          name: '--- Select your address ---',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);
    expect(
      (
        screen.getByRole('option', {
          name: '1 Street Name, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);
    expect(
      (
        screen.getByRole('option', {
          name: '2 Street Name, Second Address Line, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);
    expect(
      (
        screen.getByRole('option', {
          name: '3 Street Name, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(true);
    expect(
      (
        screen.getByRole('option', {
          name: '4 Street Name, Second Address Line, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);
    expect(
      (
        screen.getByRole('option', {
          name: '5 Street Name, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);

    expect(mockOnValueChange).toHaveBeenCalledTimes(1);
  });

  it('pre-populated select updates value correctly', async () => {
    window.document.getSelection = jest.fn();
    const initData: SelectDataProps[] = [];
    SelectData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
      });
    });

    const mockOnValueChange = jest.fn();
    render(
      <Select
        identifier="select"
        label="label"
        options={initData}
        onValueChange={mockOnValueChange}
        value="2 Street Name,Second Address Line,Town,County,NW1 1AA"
      />
    );

    const select = await screen.findByRole('combobox');
    expect(select).toBeInTheDocument();
    await userEvent.selectOptions(select, '3 Street Name,Town,County,NW1 1AA');

    expect(mockOnValueChange).toHaveBeenCalledTimes(1);
    expect(
      (
        screen.getByRole('option', {
          name: '--- Select your address ---',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);
    expect(
      (
        screen.getByRole('option', {
          name: '1 Street Name, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);
    expect(
      (
        screen.getByRole('option', {
          name: '2 Street Name, Second Address Line, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);
    expect(
      (
        screen.getByRole('option', {
          name: '3 Street Name, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(true);
    expect(
      (
        screen.getByRole('option', {
          name: '4 Street Name, Second Address Line, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);
    expect(
      (
        screen.getByRole('option', {
          name: '5 Street Name, Town, County NW1 1AA',
        }) as HTMLOptionElement
      ).selected
    ).toBe(false);

    expect(mockOnValueChange).toHaveBeenCalledTimes(1);
  });
  it('select onBlur must fire correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    window.document.getSelection = jest.fn();
    const initData: SelectDataProps[] = [];
    SelectData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
      });
    });

    render(
      <Select
        identifier="select"
        label="label"
        options={initData}
        onValueChange={mockOnChange}
        onValueBlur={mockOnBlur}
      />
    );

    const select = await screen.findByRole('combobox');
    expect(select).toBeInTheDocument();

    select.focus();
    select.blur();
    expect(select).toHaveValue('');

    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });
});
