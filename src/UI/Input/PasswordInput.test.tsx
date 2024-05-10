import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
  userEvent,
  fireEvent,
} from '../../Helper/testHelper';
import { PasswordInput } from './PasswordInput';
import { TextInputWidth } from './InputCommon';

expect.extend(toHaveNoViolations);

describe('Password Input component is accessible', () => {
  it('must not fail any accessibility tests with minimal configuration', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    const { container } = render(
      <PasswordInput
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
      <PasswordInput
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
      <PasswordInput
        identifier="input"
        label="label"
        hint="hint"
        multiQuestion
        required
        labelClassExt="labelExtClass"
        inputClassExt="labelExtClass"
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
      <PasswordInput
        identifier="input"
        label="label"
        hint="hint"
        multiQuestion
        required
        labelClassExt="labelExtClass"
        inputClassExt="labelExtClass"
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
      <PasswordInput
        identifier="input"
        label="label"
        hint="hint"
        multiQuestion
        required
        labelClassExt="labelExtClass"
        inputClassExt="labelExtClass"
        error="Error message"
        inErrorState
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
      <PasswordInput
        identifier="input"
        label="label"
        hint="hint"
        multiQuestion
        required
        labelClassExt="labelExtClass"
        inputClassExt="labelExtClass"
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

describe('Password Input renders correctly', () => {
  it('input must have all structural elements rendered correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    const wrapper = input.parentNode as HTMLDivElement;
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass(
      'govuk-input__wrapper govuk-password-input__wrapper'
    );

    const container = wrapper.parentNode as HTMLDivElement;
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('govuk-form-group govuk-password-input');
    expect(container.getAttribute('data-module')).toBe('govuk-password-input');
  });

  it('input must have all structural elements rendered correctly in error', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
        label="label"
        identifier="inputName"
        error="this is the error"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label');
    const wrapper = input.parentNode as HTMLDivElement;
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass(
      'govuk-input__wrapper govuk-password-input__wrapper'
    );

    const container = wrapper.parentNode as HTMLDivElement;
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass(
      'govuk-form-group govuk-form-group--error govuk-password-input'
    );
  });

  it('password input must have all standard attributes configured correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );

    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(
      'govuk-input govuk-password-input__input govuk-js-password-input-input'
    );
    expect(input).toHaveAttribute('id', 'inputName');
    expect(input).toHaveAttribute('name', 'inputName');
    expect(input).toHaveAttribute('type', 'password');
    expect(input).toHaveAttribute('aria-describedby', 'inputName-label');
    expect(input).toHaveAttribute('aria-invalid', 'false');
  });

  it('input must correctly add fluid width class', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
        label="label text"
        identifier="inputName"
        width={TextInputWidth.FluidFull}
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('govuk-input govuk-!-width-full');
  });

  it('input must correctly add char width class', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
        label="label text"
        identifier="inputName"
        width={TextInputWidth.Char10}
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass('govuk-input govuk-input--width-10');
  });

  it('input must have all required attributes configured correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
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

  it('input must have auto complete configured correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('autocomplete', 'current-password');
  });

  it('input must have label attributes configured correctly when single question and no override', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
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
      <PasswordInput
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
      <PasswordInput
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
      <PasswordInput
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
      <PasswordInput
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(
      'govuk-input govuk-password-input__input govuk-js-password-input-input'
    );
  });

  it('input must have class attributes configured correctly when class overriden', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
        label="label text"
        identifier="inputName"
        inputClassExt="class-override"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveClass(
      'govuk-input govuk-password-input__input govuk-js-password-input-input class-override'
    );
  });

  it('input must have disabled attributes configured correctly when disabled', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
        label="label"
        identifier="inputName"
        disabled
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label');
    expect(input).toBeDisabled();
    expect(input).toHaveAttribute('aria-disabled', 'true');
    expect(input).toHaveAttribute('disabled');
  });

  it('input must be disabled attributes configured correctly when enabled', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
        label="label"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label');
    expect(input).toBeEnabled();
  });

  it('input must render hint correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
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
      <PasswordInput
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

  it('input must render password toggle button correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
        label="label"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const button = screen.getByLabelText('Show password');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle'
    );
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('data-module', 'govuk-button');
    expect(button).toHaveAttribute('aria-controls', 'inputName');
    expect(button).toHaveAttribute('aria-label', 'Show password');
  });
  it('input must render aria explanation section correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
        label="label"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const button = screen.getByLabelText('Show password');
    const ariaSection = button.previousSibling as HTMLDivElement;

    expect(ariaSection).toBeInTheDocument();
    expect(ariaSection).toHaveClass(
      'govuk-password-input__sr-status govuk-visually-hidden'
    );
    expect(ariaSection).toHaveAttribute('aria-live', 'polite');
    expect(ariaSection).toHaveTextContent('Your password is hidden');
  });
});

describe('Password Input functions correctly', () => {
  it('input must be blank when setup blank', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
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
      <PasswordInput
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
      <PasswordInput
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();

    await userEvent.type(input, '23');
    expect(input).toHaveValue('23');

    expect(mockOnChange).toHaveBeenCalledTimes(2);
  });

  it('input onBlur must fire correctly', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    const input = await screen.findByLabelText('label text');
    expect(input).toBeInTheDocument();

    fireEvent.focus(input);
    fireEvent.blur(input);
    expect(input).toHaveValue('');

    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });

  it('input must be toggle from Show to Hide mode correctly with click', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    var input = await screen.findByLabelText('label text');
    var button = screen.getByLabelText('Show password');
    const ariaSection = button.previousSibling as HTMLDivElement;

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(input).toHaveAttribute('type', 'password');
    expect(button).toHaveTextContent('Show');
    expect(ariaSection).toHaveTextContent('Your password is hidden');

    await userEvent.click(button);

    expect(input).toHaveAttribute('type', 'text');
    expect(button).toHaveTextContent('Hide');
    expect(ariaSection).toHaveTextContent('Your password is visible');

    await userEvent.click(button);

    expect(input).toHaveAttribute('type', 'password');
    expect(button).toHaveTextContent('Show');
    expect(ariaSection).toHaveTextContent('Your password is hidden');
  });

  it('input must be toggle from Show to Hide mode correctly with keydown', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <PasswordInput
        label="label text"
        identifier="inputName"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
      />
    );
    var input = await screen.findByLabelText('label text');
    var button = screen.getByLabelText('Show password');
    const ariaSection = button.previousSibling as HTMLDivElement;

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(input).toHaveAttribute('type', 'password');
    expect(button).toHaveTextContent('Show');
    expect(ariaSection).toHaveTextContent('Your password is hidden');

    await userEvent.type(button, '{enter}');

    expect(input).toHaveAttribute('type', 'text');
    expect(button).toHaveTextContent('Hide');
    expect(ariaSection).toHaveTextContent('Your password is visible');

    await userEvent.click(button);

    expect(input).toHaveAttribute('type', 'password');
    expect(button).toHaveTextContent('Show');
    expect(ariaSection).toHaveTextContent('Your password is hidden');
  });
});
