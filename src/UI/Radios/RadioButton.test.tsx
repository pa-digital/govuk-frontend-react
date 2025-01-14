import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
  userEvent,
} from '../../Helper/testHelper';
import RadioButton from './RadioButton';
import { RadioButtonConditionalInputProps } from './RadioButtonCommon';

expect.extend(toHaveNoViolations);

describe('Radio Button component is accessible', () => {
  it('must not fail any accessibility tests with minimum configuration', async () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        onChange={mockOnChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with minimum checked configuration', async () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        checked
        onChange={mockOnChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with required configuration', async () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        required
        onChange={mockOnChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with hint configuration', async () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        hint="this is a hint"
        onChange={mockOnChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with default conditional configuration', async () => {
    const mockOnChange = jest.fn();
    const condInput = {
      context: 'contact-by-email',
      identifier: 'email',
      label: 'Email address',
      inputType: 'email',
    } as RadioButtonConditionalInputProps;
    const { container } = render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        checked
        conditionalInput={condInput}
        onChange={mockOnChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with populated conditional configuration', async () => {
    const mockOnChange = jest.fn();
    const condInput = {
      context: 'contact-by-email',
      identifier: 'email',
      label: 'Email address',
      inputType: 'email',
      value: 'test@test.com',
    } as RadioButtonConditionalInputProps;
    const { container } = render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        checked
        conditionalInput={condInput}
        onChange={mockOnChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Radio Button renders correctly', () => {
  it('default configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveClass('govuk-radios__input');
    expect(radio).toHaveAttribute('id', 'radio-1');
    expect(radio).toHaveAttribute('name', 'radios');
    expect(radio).toHaveAttribute('type', 'radio');
    expect(radio).toHaveAttribute('value', 'rbvalue');
    expect(radio).not.toBeChecked();

    const label = screen.getByText('radio button label');
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('govuk-label govuk-radios__label');
    expect(label).toHaveAttribute('for', 'radio-1');

    const radioWrapper = radio.parentNode as HTMLElement;
    expect(radioWrapper).toBeInTheDocument();
    expect(radioWrapper).toHaveClass('govuk-radios__item');
  });
  it('default checked configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        checked
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toBeChecked();
  });
  it('default required configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        required
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveClass('govuk-radios__input');
    expect(radio).toHaveAttribute('aria-required', 'true');
    expect(radio).toHaveAttribute('required');
  });
  it('hint configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        hint="this is a hint"
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute('aria-describedby', 'radio-1-item-hint');

    const hint = screen.getByText('this is a hint');
    expect(hint).toBeInTheDocument();
    expect(hint).toHaveClass('govuk-hint govuk-radios__hint');
    expect(hint).toHaveAttribute('id', 'radio-1-item-hint');
  });
  it('non-checked conditional input configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    const condInput = {
      context: 'contact-by-phone',
      identifier: 'phone',
      label: 'Phone number',
      inputMode: 'numeric',
      spellcheck: true,
      autoComplete: 'telephone',
    } as RadioButtonConditionalInputProps;
    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        conditionalInput={condInput}
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    const conditionalInput = screen.getByRole('textbox');
    expect(conditionalInput).toBeInTheDocument();
    const conditionalInputValiditityStateWrapper =
      conditionalInput.parentNode as HTMLDivElement;
    expect(conditionalInputValiditityStateWrapper).toBeInTheDocument();
    expect(conditionalInputValiditityStateWrapper).toHaveClass(
      'govuk-form-group'
    );
    const conditionalInputWrapper =
      conditionalInputValiditityStateWrapper.parentNode as HTMLDivElement;
    expect(conditionalInputWrapper).toBeInTheDocument();
    expect(conditionalInputWrapper).toHaveClass(
      'govuk-radios__conditional govuk-radios__conditional--hidden'
    );
  });
  it('checked conditional input configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    const condInput = {
      context: 'contact-by-phone',
      identifier: 'phone',
      label: 'Phone number',
      inputMode: 'numeric',
      spellcheck: true,
      autoComplete: 'telephone',
    } as RadioButtonConditionalInputProps;
    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        checked
        conditionalInput={condInput}
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toBeChecked();

    const conditionalInput = screen.getByRole('textbox');
    expect(conditionalInput).toBeInTheDocument();
    expect(conditionalInput).toHaveClass('govuk-input');
    expect(conditionalInput).toHaveAttribute('id', 'radio-1-phone');
    expect(conditionalInput).toHaveAttribute('name', 'Radio1Phone');
    expect(conditionalInput).toHaveAttribute('type', 'text');
    expect(conditionalInput).toHaveAttribute('spellCheck', 'true');
    expect(conditionalInput).toHaveAttribute('autoComplete', 'telephone');

    const conditionalInputValiditityStateWrapper =
      conditionalInput.parentNode as HTMLDivElement;
    expect(conditionalInputValiditityStateWrapper).toBeInTheDocument();
    expect(conditionalInputValiditityStateWrapper).toHaveClass(
      'govuk-form-group'
    );
    const conditionalInputWrapper =
      conditionalInputValiditityStateWrapper.parentNode as HTMLDivElement;
    expect(conditionalInputWrapper).toBeInTheDocument();
    expect(conditionalInputWrapper).toHaveClass('govuk-radios__conditional');
  });
  it('checked populated conditional input configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    const condInput = {
      context: 'contact-by-phone',
      identifier: 'phone',
      label: 'Phone number',
      inputMode: 'numeric',
      spellcheck: true,
      autoComplete: 'telephone',
      value: 'test',
    } as RadioButtonConditionalInputProps;
    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        checked
        conditionalInput={condInput}
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toBeChecked();

    const conditionalInput = screen.getByRole('textbox');
    expect(conditionalInput).toBeInTheDocument();
    expect(conditionalInput).toHaveClass('govuk-input');
    expect(conditionalInput).toHaveAttribute('id', 'radio-1-phone');
    expect(conditionalInput).toHaveAttribute('name', 'Radio1Phone');
    expect(conditionalInput).toHaveAttribute('type', 'text');
    expect(conditionalInput).toHaveAttribute('spellCheck', 'true');
    expect(conditionalInput).toHaveAttribute('autoComplete', 'telephone');
    expect(conditionalInput).toHaveAttribute('value', 'test');

    const conditionalInputValiditityStateWrapper =
      conditionalInput.parentNode as HTMLDivElement;
    expect(conditionalInputValiditityStateWrapper).toBeInTheDocument();
    expect(conditionalInputValiditityStateWrapper).toHaveClass(
      'govuk-form-group'
    );
    const conditionalInputWrapper =
      conditionalInputValiditityStateWrapper.parentNode as HTMLDivElement;
    expect(conditionalInputWrapper).toBeInTheDocument();
    expect(conditionalInputWrapper).toHaveClass('govuk-radios__conditional');
    expect(conditionalInputWrapper).toHaveAttribute(
      'id',
      'radio-1-contact-by-phone'
    );
  });
  it('checked error conditional input configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    const condInput = {
      context: 'contact-by-phone',
      identifier: 'phone',
      label: 'Phone number',
      inputMode: 'numeric',
      spellcheck: true,
      autoComplete: 'telephone',
      error: 'You must enter a valid phone number',
    } as RadioButtonConditionalInputProps;
    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        checked
        conditionalInput={condInput}
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toBeChecked();

    const conditionalInput = screen.getByRole('textbox');
    expect(conditionalInput).toBeInTheDocument();
    expect(conditionalInput).toHaveClass('govuk-input');
    expect(conditionalInput).toHaveAttribute('id', 'radio-1-phone');
    expect(conditionalInput).toHaveAttribute('name', 'Radio1Phone');
    expect(conditionalInput).toHaveAttribute('type', 'text');
    expect(conditionalInput).toHaveAttribute('spellCheck', 'true');
    expect(conditionalInput).toHaveAttribute('autoComplete', 'telephone');

    const conditionalInputErrorContainer = screen.getByRole('paragraph');
    expect(conditionalInputErrorContainer).toBeInTheDocument();
    expect(conditionalInputErrorContainer).toHaveClass('govuk-error-message');
    expect(conditionalInputErrorContainer).toHaveAttribute(
      'id',
      'radio-1-phone-error'
    );
    expect(conditionalInputErrorContainer).toHaveTextContent(
      'You must enter a valid phone number'
    );
    const conditionalInputHiddenErrorText =
      conditionalInputErrorContainer.firstChild as HTMLSpanElement;
    expect(conditionalInputHiddenErrorText).toBeInTheDocument();
    expect(conditionalInputHiddenErrorText).toHaveClass(
      'govuk-visually-hidden'
    );
    expect(conditionalInputHiddenErrorText).toHaveTextContent('Error:');

    const conditionalInputValiditityStateWrapper =
      conditionalInput.parentNode as HTMLDivElement;
    expect(conditionalInputValiditityStateWrapper).toBeInTheDocument();
    expect(conditionalInputValiditityStateWrapper).toHaveClass(
      'govuk-form-group govuk-form-group--error'
    );
    const conditionalInputWrapper =
      conditionalInputValiditityStateWrapper.parentNode as HTMLDivElement;
    expect(conditionalInputWrapper).toBeInTheDocument();
    expect(conditionalInputWrapper).toHaveClass('govuk-radios__conditional');
  });
});

describe('Radio Button functions correctly', () => {
  it('default configuration onChange functions correctly', async () => {
    const mockOnChange = jest.fn();

    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).not.toBeChecked();

    await userEvent.click(radio);

    expect(radio).toBeChecked();
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(true, 'rbvalue');
  });
  it('conditional configuration onChange functions correctly', async () => {
    const mockOnChange = jest.fn();
    const condInput = {
      context: 'contact-by-email',
      identifier: 'email',
      label: 'Email Address',
      inputType: 'email',
      spellcheck: false,
      autoComplete: 'telephone',
    } as RadioButtonConditionalInputProps;
    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        conditionalInput={condInput}
        onChange={mockOnChange}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).not.toBeChecked();

    await userEvent.click(radio);

    const conditionalInput = screen.getByRole('textbox');
    expect(conditionalInput).toBeInTheDocument();

    expect(radio).toBeChecked();

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenLastCalledWith('', 'rbvalue');

    await userEvent.type(conditionalInput, 'test@test.com');

    expect(mockOnChange).toHaveBeenCalledTimes(14);
    expect(mockOnChange).toHaveBeenLastCalledWith('m', 'rbvalue');
  });
});
