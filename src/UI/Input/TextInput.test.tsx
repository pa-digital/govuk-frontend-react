import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
  userEvent,
} from '../../Helper/testHelper';
import { TextInput } from './TextInput';

expect.extend(toHaveNoViolations);

describe('Input component is accessible', () => {
  it('must not fail any accessibility tests with minimal configuration', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    const { container } = render(
      <TextInput
        identifier="input"
        label="label"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with only label & error configured', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    const { container } = render(
      <TextInput
        identifier="input"
        label="label"
        error="Error message"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with all configured as valid empty', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    const { container } = render(
      <TextInput
        identifier="input"
        label="label"
        hint="hint"
        multiQuestion
        required
        inputType="password"
        labelClassExt="labelExtClass"
        inputClassExt="labelExtClass"
        autoComplete="given-name"
        spellCheck
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with all configured as valid', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    const { container } = render(
      <TextInput
        identifier="input"
        label="label"
        hint="hint"
        multiQuestion
        required
        inputType="password"
        labelClassExt="labelExtClass"
        inputClassExt="labelExtClass"
        autoComplete="given-name"
        spellCheck
        value="this is a value"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with all configured as in error state', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    const { container } = render(
      <TextInput
        identifier="input"
        label="label"
        hint="hint"
        multiQuestion
        required
        inputType="password"
        labelClassExt="labelExtClass"
        inputClassExt="labelExtClass"
        autoComplete="given-name"
        error="Error message"
        inErrorState
        spellCheck
        value="this is a value"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with all configured as disabled', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    const { container } = render(
      <TextInput
        identifier="input"
        label="label"
        hint="hint"
        multiQuestion
        required
        inputType="password"
        labelClassExt="labelExtClass"
        inputClassExt="labelExtClass"
        autoComplete="given-name"
        spellCheck
        value="this is a value"
        disabled
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Input renders correctly', () => {
  it('input must have all standard attributes configured correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('govuk-input');
    expect(input).toHaveAttribute('id', 'inputName');
    expect(input).toHaveAttribute('name', 'inputName');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).toHaveAttribute('aria-describedby', 'inputName-label');
    expect(input).toHaveAttribute('aria-invalid', 'false');
  });

  it('input must correctly add width class', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        width={5}
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('govuk-input govuk-input--width-5');
  });

  it('input must have type attribute set correctly for a password input', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        inputType="password"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'password');
  });

  it('input must have type attribute set correctly for an email input', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        inputType="email"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'email');
  });

  it('input must have input mode attribute set correctly for a numeric input', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label"
        identifier="inputName"
        inputMode="numeric"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label');
    expect(input).toHaveAttribute('inputmode', 'numeric');
  });

  it('input must have all required attributes configured correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        required
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('aria-required', 'true');
  });

  it('input must have spellcheck configured correctly where enabled', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        spellCheck
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('spellcheck', 'true');
  });

  it('input must have auto complete configured correctly where enabled', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        autoComplete="given-name"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('autocomplete', 'given-name');
  });

  it('input must have label attributes configured correctly when single question and no override', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const label = screen.getByText('label text');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('govuk-label govuk-label--l');
    expect(label).toHaveAttribute('for', 'inputName');
    const labelWrapper = screen.getByRole('heading', { level: 1 });
    expect(labelWrapper).toBeInTheDocument();
    expect(labelWrapper).toHaveClass('govuk-label-wrapper');
  });

  it('input must have label attributes configured correctly when single question and class override', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        labelClassExt="class-override"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const label = screen.getByText('label text');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('govuk-label govuk-label--l class-override');
    expect(label).toHaveAttribute('for', 'inputName');
    const labelWrapper = screen.getByRole('heading', { level: 1 });
    expect(labelWrapper).toBeInTheDocument();
    expect(labelWrapper).toHaveClass('govuk-label-wrapper');
  });

  it('input must have label attributes configured correctly when multi question and no override', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        multiQuestion
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const label = screen.getByText('label text');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('govuk-label');
    expect(label).toHaveAttribute('for', 'inputName');
  });

  it('input must have label attributes configured correctly when multi question and class override', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        multiQuestion
        labelClassExt="class-override"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const label = screen.getByText('label text');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('govuk-label class-override');
    expect(label).toHaveAttribute('for', 'inputName');
  });

  it('input must have class attributes configured correctly when class is not overriden', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('govuk-input');
  });

  it('input must have class attributes configured correctly when class overriden', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        inputClassExt="class-override"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('govuk-input class-override');
  });

  it('input must have disabled attributes configured correctly when disabled', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label"
        identifier="inputName"
        disabled
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('aria-disabled', 'true');
    expect(input).toHaveAttribute('disabled');
  });

  it('input must be disabled attributes configured correctly when enabled', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeEnabled();
  });

  it('input must render hint correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label"
        identifier="inputName"
        hint="this is the hint"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute(
      'aria-describedby',
      'inputName-hint inputName-label'
    );
    const hint = await screen.findByText('this is the hint');
    expect(hint).toBeInTheDocument();
    expect(hint).toHaveClass('govuk-hint');
    expect(hint).toHaveAttribute('id', 'inputName-hint');
  });
  it('input must render error correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label"
        identifier="inputName"
        error="this is the error"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute(
      'aria-describedby',
      'inputName-error inputName-label'
    );
    expect(input).toHaveAttribute('aria-invalid', 'true');
    const error = await screen.findByText('this is the error');
    expect(error).toBeInTheDocument();
    expect(error).toHaveClass('govuk-error-message');
    expect(error).toHaveAttribute('id', 'inputName-error');

    const wrapper = input.parentNode as HTMLElement;
    expect(wrapper).toHaveClass('govuk-input__wrapper');
    expect(wrapper).toBeInTheDocument();

    const container = wrapper.parentNode as HTMLElement;
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('govuk-form-group govuk-form-group--error');
  });

  it('input must correctly add prefix', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        prefix="£"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const prefix = await screen.findByText('£');
    expect(prefix).toBeInTheDocument();
    expect(prefix).toHaveClass('govuk-input__prefix');
    expect(prefix).toHaveAttribute('aria-hidden', 'true');

    const prefixWrapper = prefix.parentNode as HTMLElement;
    expect(prefixWrapper).toBeInTheDocument();
    expect(prefixWrapper).toHaveClass('govuk-input__wrapper');
  });

  it('input must correctly add suffix', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        suffix="kg"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );

    const suffix = await screen.findByText('kg');
    expect(suffix).toBeInTheDocument();
    expect(suffix).toHaveClass('govuk-input__suffix');
    expect(suffix).toHaveAttribute('aria-hidden', 'true');

    const suffixWrapper = suffix.parentNode as HTMLElement;
    expect(suffixWrapper).toBeInTheDocument();
    expect(suffixWrapper).toHaveClass('govuk-input__wrapper');
  });
});

describe('Input functions correctly', () => {
  it('input must be blank when setup blank', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
  });
  it('input must be correctly populate value when set', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        value="this is the value"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('this is the value');
  });
  it('input onChange must fire correctly', async () => {
    window.document.getSelection = jest.fn();
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeInTheDocument();

    await userEvent.type(input, '23');
    expect(input).toHaveValue('23');

    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });
  it('input onBlur must fire correctly', async () => {
    window.document.getSelection = jest.fn();
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextInput
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeInTheDocument();

    input.blur();
    expect(input).toHaveValue('');

    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });
});
