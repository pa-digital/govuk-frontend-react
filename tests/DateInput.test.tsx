import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
  userEvent,
} from '../src/Helper/testHelper';
import { DateInput, errorTypeEnum } from '../src/UI/DateInput/DateInput';

expect.extend(toHaveNoViolations);

describe('Date Input component is accessible', () => {
  it('must not fail any accessibility tests with minimal configuration', async () => {
    const mockOnValueChange = jest.fn();
    const { container } = render(
      <DateInput
        identifier="input"
        label="label"
        onValueChange={mockOnValueChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with only label & error configured', async () => {
    const mockOnValueChange = jest.fn();
    const { container } = render(
      <DateInput
        identifier="input"
        label="label"
        error="Error message"
        onValueChange={mockOnValueChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with all configured as valid', async () => {
    const mockOnValueChange = jest.fn();
    const { container } = render(
      <DateInput
        identifier="input"
        label="label"
        hint="hint"
        required
        value={{ day: '1', month: '2', year: '1980' }}
        onValueChange={mockOnValueChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with all configured as in error state', async () => {
    const mockOnValueChange = jest.fn();
    const { container } = render(
      <DateInput
        identifier="input"
        label="label"
        hint="hint"
        required
        error="Error message"
        value={{ day: '1', month: '2', year: '1980' }}
        onValueChange={mockOnValueChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with all configured as multi question', async () => {
    const mockOnValueChange = jest.fn();
    const { container } = render(
      <DateInput
        identifier="input"
        label="label"
        hint="hint"
        multiQuestion
        required
        onValueChange={mockOnValueChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Date Input renders correctly', () => {
  it('Date Input must have all standard attributes configured correctly', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <DateInput
        label="label text"
        identifier="dob"
        onValueChange={mockOnValueChange}
      />
    );

    const dayInput = screen.getByLabelText('Day');
    const dayInputLabel = screen.getByText('Day');
    const monthInput = screen.getByLabelText('Month');
    const monthInputLabel = screen.getByText('Month');
    const yearInput = screen.getByLabelText('Year');
    const yearInputLabel = screen.getByText('Year');

    expect(dayInput).toBeInTheDocument();
    expect(dayInput).toHaveAttribute('id', 'dob-day');
    expect(dayInput).toHaveAttribute('name', 'dob-day');
    expect(dayInput).toHaveAttribute('type', 'text');
    expect(dayInput).toHaveAttribute('inputmode', 'numeric');
    expect(dayInput).toHaveClass(
      'govuk-date-input__input govuk-input--width-2'
    );
    expect(dayInputLabel).toBeInTheDocument();
    expect(dayInputLabel).toHaveAttribute('for', 'dob-day');
    expect(dayInputLabel).toHaveClass('govuk-label govuk-date-input__label');

    const dayInputWrapper = dayInput.parentNode as HTMLElement;
    const dayInputGroupElement = dayInputWrapper.parentNode as HTMLElement;
    expect(dayInputGroupElement).toBeInTheDocument();
    expect(dayInputGroupElement).toHaveClass('govuk-form-group');
    const dayInputItemElement = dayInputGroupElement.parentNode as HTMLElement;
    expect(dayInputItemElement).toBeInTheDocument();
    expect(dayInputItemElement).toHaveClass('govuk-date-input__item');

    expect(monthInput).toBeInTheDocument();
    expect(monthInput).toHaveAttribute('id', 'dob-month');
    expect(monthInput).toHaveAttribute('name', 'dob-month');
    expect(monthInput).toHaveAttribute('type', 'text');
    expect(monthInput).toHaveAttribute('inputmode', 'numeric');
    expect(monthInput).toHaveClass(
      'govuk-date-input__input govuk-input--width-2'
    );
    expect(monthInputLabel).toBeInTheDocument();
    expect(monthInputLabel).toHaveAttribute('for', 'dob-month');
    expect(monthInputLabel).toHaveClass('govuk-label govuk-date-input__label');

    const monthInputWrapper = monthInput.parentNode as HTMLElement;
    const monthInputGroupElement = monthInputWrapper.parentNode as HTMLElement;
    expect(monthInputGroupElement).toBeInTheDocument();
    expect(monthInputGroupElement).toHaveClass('govuk-form-group');
    const monthInputItemElement =
      monthInputGroupElement.parentNode as HTMLElement;
    expect(monthInputItemElement).toBeInTheDocument();
    expect(monthInputItemElement).toHaveClass('govuk-date-input__item');

    expect(yearInput).toBeInTheDocument();
    expect(yearInput).toHaveAttribute('id', 'dob-year');
    expect(yearInput).toHaveAttribute('name', 'dob-year');
    expect(yearInput).toHaveAttribute('inputmode', 'numeric');
    expect(yearInput).toHaveAttribute('type', 'text');
    expect(yearInput).toHaveAttribute('inputmode', 'numeric');
    expect(yearInput).toHaveClass(
      'govuk-input govuk-date-input__input govuk-input--width-4'
    );
    expect(yearInputLabel).toBeInTheDocument();
    expect(yearInputLabel).toHaveAttribute('for', 'dob-year');
    expect(yearInputLabel).toHaveClass('govuk-label govuk-date-input__label');

    const yearInputWrapper = yearInput.parentNode as HTMLElement;
    const yearInputGroupElement = yearInputWrapper.parentNode as HTMLElement;
    expect(yearInputGroupElement).toBeInTheDocument();
    expect(yearInputGroupElement).toHaveClass('govuk-form-group');
    const yearInputItemElement =
      yearInputGroupElement.parentNode as HTMLElement;
    expect(yearInputItemElement).toBeInTheDocument();
    expect(yearInputItemElement).toHaveClass('govuk-date-input__item');

    const dateInputsContainer = dayInputItemElement.parentNode as HTMLElement;
    expect(dateInputsContainer).toBeInTheDocument();
    expect(dateInputsContainer).toHaveAttribute('id', 'dob');
    expect(dateInputsContainer).toHaveClass('govuk-date-input');
  });

  it('Date Input must legend configured correctly for standard mode', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <DateInput
        label="label text"
        identifier="dob"
        onValueChange={mockOnValueChange}
      />
    );

    const fieldset = screen.getByRole('group');
    expect(fieldset).toBeInTheDocument();
    const legend = fieldset.firstChild as HTMLElement;
    expect(legend).toBeInTheDocument();
    expect(legend).toHaveAttribute('id', 'dob-legend');
    expect(legend).toHaveClass(
      'govuk-fieldset__legend govuk-fieldset__legend--l'
    );

    const legendHeading = screen.getByRole('heading', { level: 1 });
    expect(legendHeading).toBeInTheDocument();
    expect(legendHeading).toHaveTextContent('label text');
    expect(legendHeading).toHaveClass('govuk-fieldset__heading');
  });

  it('Date Input must legend configured correctly for multi question mode', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <DateInput
        label="label text"
        identifier="dob"
        multiQuestion
        onValueChange={mockOnValueChange}
      />
    );

    const fieldset = screen.getByRole('group');
    expect(fieldset).toBeInTheDocument();
    const legend = fieldset.firstChild as HTMLElement;
    expect(legend).toBeInTheDocument();
    expect(legend).toHaveAttribute('id', 'dob-legend');
    expect(legend).toHaveClass('govuk-fieldset__legend');
    expect(legend).toHaveTextContent('label text');
  });

  describe.each([
    ['', 'govuk-form-group'],
    ['error', 'govuk-form-group govuk-form-group--error'],
  ])(
    'Wrapper must have correct class assigned in error or non-error mode',
    (error, expectedClass) => {
      it(`must render wrapper correctly when error value is ${error}`, async () => {
        const mockOnValueChange = jest.fn();
        render(
          <DateInput
            label="label text"
            identifier="dob"
            error={error}
            onValueChange={mockOnValueChange}
          />
        );
        const fieldset = screen.getByRole('group');
        const wrapper = fieldset.parentNode as HTMLElement;
        expect(wrapper).toBeInTheDocument();
        expect(wrapper).toHaveClass(expectedClass);
      });
    }
  );

  describe.each([
    ['', '', 'dob-legend', 'no hint and no error'],
    ['error', '', 'dob-error dob-legend', 'only error'],
    ['', 'hint', 'dob-hint dob-legend', 'only hint'],
    ['error', 'hint', 'dob-error dob-hint dob-legend', 'hint and error'],
  ])(
    'Fieldset must have aria-describedby set correctly',
    (error, hint, expectedValue, mode) => {
      it(`must render aria-describedby correctly for ${mode}`, async () => {
        const mockOnValueChange = jest.fn();
        render(
          <DateInput
            label="label text"
            identifier="dob"
            error={error}
            hint={hint}
            onValueChange={mockOnValueChange}
          />
        );
        const fieldset = screen.getByRole('group');
        expect(fieldset).toBeInTheDocument();
        expect(fieldset).toHaveAttribute('aria-describedby', expectedValue);
        expect(fieldset).toHaveClass('govuk-fieldset');
      });
    }
  );

  it('input must have all required attributes configured correctly', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <DateInput
        label="label text"
        identifier="dob"
        required
        onValueChange={mockOnValueChange}
      />
    );
    const dayInput = screen.getByLabelText('Day');
    const monthInput = screen.getByLabelText('Month');
    const yearInput = screen.getByLabelText('Year');

    expect(dayInput).toBeInTheDocument();
    expect(dayInput).toHaveAttribute('required');
    expect(dayInput).toHaveAttribute('aria-required', 'true');
    expect(monthInput).toBeInTheDocument();
    expect(monthInput).toHaveAttribute('required');
    expect(monthInput).toHaveAttribute('aria-required', 'true');
    expect(yearInput).toBeInTheDocument();
    expect(yearInput).toHaveAttribute('required');
    expect(yearInput).toHaveAttribute('aria-required', 'true');
  });

  it('input must render hint correctly', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <DateInput
        label="label text"
        identifier="dob"
        hint="This is your birthday"
        required
        onValueChange={mockOnValueChange}
      />
    );

    const hint = await screen.findByText('This is your birthday');
    expect(hint).toBeInTheDocument();
    expect(hint).toHaveClass('govuk-hint');
    expect(hint).toHaveAttribute('id', 'dob-hint');
  });

  describe.each([
    [
      errorTypeEnum.all,
      'govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error',
      'true',
      'govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error',
      'true',
      'govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error',
      'true',
    ],
    [
      errorTypeEnum.day,
      'govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error',
      'true',
      'govuk-input govuk-date-input__input govuk-input--width-2',
      'false',
      'govuk-input govuk-date-input__input govuk-input--width-4',
      'false',
    ],
    [
      errorTypeEnum.month,
      'govuk-input govuk-date-input__input govuk-input--width-2',
      'false',
      'govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error',
      'true',
      'govuk-input govuk-date-input__input govuk-input--width-4',
      'false',
    ],
    [
      errorTypeEnum.year,
      'govuk-input govuk-date-input__input govuk-input--width-2',
      'false',
      'govuk-input govuk-date-input__input govuk-input--width-2',
      'false',
      'govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error',
      'true',
    ],
    [
      errorTypeEnum.dayMonth,
      'govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error',
      'true',
      'govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error',
      'true',
      'govuk-input govuk-date-input__input govuk-input--width-4',
      'false',
    ],
    [
      errorTypeEnum.monthYear,
      'govuk-input govuk-date-input__input govuk-input--width-2',
      'false',
      'govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error',
      'true',
      'govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error',
      'true',
    ],
    [
      errorTypeEnum.dayYear,
      'govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error',
      'true',
      'govuk-input govuk-date-input__input govuk-input--width-2',
      'false',
      'govuk-input govuk-date-input__input govuk-input--width-4 govuk-input--error',
      'true',
    ],
  ])(
    'Each element of the date input must render the correct error mode',
    (
      errorType,
      dayClass,
      dayInvalid,
      monthClass,
      monthInvalid,
      yearClass,
      yearInvalid
    ) => {
      it(`input must render error correctly for error type ${errorType.toString()}`, async () => {
        const mockOnValueChange = jest.fn();
        render(
          <DateInput
            label="label text"
            identifier="dob"
            errorType={errorType}
            error="This is the error"
            onValueChange={mockOnValueChange}
          />
        );

        const dayInput = screen.getByLabelText('Day');
        const monthInput = screen.getByLabelText('Month');
        const yearInput = screen.getByLabelText('Year');

        expect(dayInput).toHaveClass(dayClass);
        expect(dayInput).toHaveAttribute('aria-invalid', dayInvalid);
        expect(monthInput).toHaveClass(monthClass);
        expect(monthInput).toHaveAttribute('aria-invalid', monthInvalid);
        expect(yearInput).toHaveClass(yearClass);
        expect(yearInput).toHaveAttribute('aria-invalid', yearInvalid);

        const error = await screen.findByText('This is the error');
        expect(error).toBeInTheDocument();
        expect(error).toHaveClass('govuk-error-message');
        expect(error).toHaveAttribute('id', 'dob-error');
      });
    }
  );
});

describe('Input functions correctly', () => {
  it('input must be blank when setup blank', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <DateInput
        label="label text"
        identifier="dob"
        onValueChange={mockOnValueChange}
      />
    );
    const dayInput = screen.getByLabelText('Day');
    const monthInput = screen.getByLabelText('Month');
    const yearInput = screen.getByLabelText('Year');

    expect(dayInput).toHaveValue('');
    expect(monthInput).toHaveValue('');
    expect(yearInput).toHaveValue('');
    expect(mockOnValueChange).toHaveBeenCalledTimes(0);
  });
  it('input must be correctly populate value when set', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <DateInput
        label="label text"
        identifier="dob"
        value={{ day: '1', month: '2', year: '1980' }}
        onValueChange={mockOnValueChange}
      />
    );
    const dayInput = screen.getByLabelText('Day');
    const monthInput = screen.getByLabelText('Month');
    const yearInput = screen.getByLabelText('Year');

    expect(dayInput).toHaveValue('1');
    expect(monthInput).toHaveValue('2');
    expect(yearInput).toHaveValue('1980');
    expect(mockOnValueChange).toHaveBeenCalledTimes(0);
  });
  it('date input must be correctly updated when day value changed', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <DateInput
        label="label text"
        identifier="dob"
        onValueChange={mockOnValueChange}
      />
    );

    const dayInput = screen.getByLabelText('Day');
    expect(dayInput).toHaveValue('');

    await userEvent.type(dayInput, '1');

    expect(dayInput).toHaveValue('1');
    expect(mockOnValueChange).toHaveBeenCalledTimes(1);
    expect(mockOnValueChange).toHaveBeenLastCalledWith({
      day: '1',
      month: '',
      year: '',
    });
  });
  it('date input must not be updated when day value blurred', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <DateInput
        label="label text"
        identifier="dob"
        onValueChange={mockOnValueChange}
        value={{ day: '1', month: '2', year: '1980' }}
      />
    );

    const dayInput = screen.getByLabelText('Day');
    expect(dayInput).toHaveValue('1');
    dayInput.blur();
    expect(dayInput).toHaveValue('1');
    expect(mockOnValueChange).toHaveBeenCalledTimes(0);
  });
  it('date input must be correctly updated when month value changed', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <DateInput
        label="label text"
        identifier="dob"
        onValueChange={mockOnValueChange}
      />
    );

    const monthInput = screen.getByLabelText('Month');
    await userEvent.type(monthInput, '2');
    expect(monthInput).toHaveValue('2');
    expect(mockOnValueChange).toHaveBeenCalledTimes(1);
    expect(mockOnValueChange).toHaveBeenLastCalledWith({
      day: '',
      month: '2',
      year: '',
    });
  });
  it('date input must not be updated when month value blurred', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <DateInput
        label="label text"
        identifier="dob"
        onValueChange={mockOnValueChange}
        value={{ day: '1', month: '2', year: '1980' }}
      />
    );

    const monthInput = screen.getByLabelText('Month');
    expect(monthInput).toHaveValue('2');
    monthInput.blur();
    expect(monthInput).toHaveValue('2');
    expect(mockOnValueChange).toHaveBeenCalledTimes(0);
  });
  it('date input must be correctly updated when year value changed', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <DateInput
        label="label text"
        identifier="dob"
        onValueChange={mockOnValueChange}
      />
    );

    const yearInput = screen.getByLabelText('Year');
    await userEvent.type(yearInput, '1980');
    expect(yearInput).toHaveValue('1980');
    expect(mockOnValueChange).toHaveBeenCalledTimes(4);
    expect(mockOnValueChange).toHaveBeenLastCalledWith({
      day: '',
      month: '',
      year: '1980',
    });
  });
  it('date input must not be updated when year value blurred', async () => {
    const mockOnValueChange = jest.fn();
    render(
      <DateInput
        label="label text"
        identifier="dob"
        onValueChange={mockOnValueChange}
        value={{ day: '1', month: '2', year: '1980' }}
      />
    );

    const yearInput = screen.getByLabelText('Year');
    expect(yearInput).toHaveValue('1980');
    yearInput.blur();
    expect(yearInput).toHaveValue('1980');
    expect(mockOnValueChange).toHaveBeenCalledTimes(0);
  });
});
