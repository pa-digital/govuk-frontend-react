import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
  fireEvent,
} from '../../Helper/testHelper';
import { TextArea } from './TextArea';

expect.extend(toHaveNoViolations);

describe('TextArea component is accessible', () => {
  it('must not fail any accessibility tests with minimal configuration', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    const { container } = render(
      <TextArea
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
      <TextArea
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
      <TextArea
        identifier="input"
        label="label"
        hint="hint"
        multiQuestion
        required
        labelClassExt="labelExtClass"
        inputClassExt="labelExtClass"
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
      <TextArea
        identifier="input"
        label="label"
        hint="hint"
        multiQuestion
        required
        labelClassExt="labelExtClass"
        inputClassExt="labelExtClass"
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
      <TextArea
        identifier="input"
        label="label"
        hint="hint"
        multiQuestion
        required
        labelClassExt="labelExtClass"
        inputClassExt="labelExtClass"
        error="Error message"
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
      <TextArea
        identifier="input"
        label="label"
        hint="hint"
        multiQuestion
        required
        labelClassExt="labelExtClass"
        inputClassExt="labelExtClass"
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

describe('TextArea renders correctly', () => {
  it('input must have all standard attributes configured correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextArea
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('id', 'inputName');
    expect(input).toHaveAttribute('name', 'inputName');
    expect(input).toHaveAttribute('aria-describedby', 'inputName-label');
    expect(input).toHaveAttribute('aria-invalid', 'false');
  });

  it('input must have all required attributes configured correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextArea
        label="label text"
        identifier="inputName"
        required
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('required');
    expect(input).toHaveAttribute('aria-required', 'true');
  });

  it('input must have spellcheck configured correctly where enabled', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextArea
        label="label text"
        identifier="inputName"
        spellCheck
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('spellcheck', 'true');
  });

  it('input must have label attributes configured correctly when single question and no override', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextArea
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
      <TextArea
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
      <TextArea
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
      <TextArea
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
      <TextArea
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('govuk-textarea');
  });

  it('input must have class attributes configured correctly when class overriden', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextArea
        label="label text"
        identifier="inputName"
        inputClassExt="class-override"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('govuk-textarea class-override');
  });

  it('input must have disabled attributes configured correctly when disabled', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextArea
        label="label text"
        identifier="inputName"
        disabled
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('aria-disabled', 'true');
    expect(input).toHaveAttribute('disabled');
  });

  it('input must be disabled attributes configured correctly when enabled', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextArea
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeEnabled();
  });

  it('input must render hint correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextArea
        label="label text"
        identifier="inputName"
        hint="this is the hint"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
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
      <TextArea
        label="label text"
        identifier="inputName"
        error="this is the error"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
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

    const container = input.parentNode as HTMLElement;
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('govuk-form-group govuk-form-group--error');
  });
});

describe('Input functions correctly', () => {
  it('input must be blank when setup blank', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextArea
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
  });
  it('input must be correctly populate value when set', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextArea
        label="label text"
        identifier="inputName"
        value="this is the value"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('this is the value');
  });
  it('input onChange must fire correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextArea
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '23' } });
    expect(input).toHaveValue('23');

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
  it('input onBlur must fire correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextArea
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByRole('textbox');
    expect(input).toBeInTheDocument();

    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(input).toHaveValue('');

    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });
});
