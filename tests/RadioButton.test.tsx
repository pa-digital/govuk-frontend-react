import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
  fireEvent,
} from '../src/Helper/testHelper';
import RadioButton from '../src/UI/Radios/RadioButton';

expect.extend(toHaveNoViolations);

describe('Radio Button component is accessible', () => {
  it('must not fail any accessibility tests with minimum configuration', async () => {
    const { container } = render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with minimum checked configuration', async () => {
    const { container } = render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        checked
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with required configuration', async () => {
    const { container } = render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        required
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with hint configuration', async () => {
    const { container } = render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        hint="this is a hint"
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Radio Button renders correctly', () => {
  it('default configuration renders correctly', async () => {
    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
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
    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        checked
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toBeChecked();
  });
  it('default required configuration renders correctly', async () => {
    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        required
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveClass('govuk-radios__input');
    expect(radio).toHaveAttribute('aria-required', 'true');
    expect(radio).toHaveAttribute('required');
  });
  it('hint configuration renders correctly', async () => {
    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        hint="this is a hint"
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
});

describe('Radio Button functions correctly', () => {
  it('default configuration onChange renders correctly', async () => {
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

    fireEvent.click(radio);

    expect(radio).toBeChecked();
    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it('default configuration onBlur renders correctly', async () => {
    const mockOnBlur = jest.fn();

    render(
      <RadioButton
        identifier="radio-1"
        groupName="radios"
        text="radio button label"
        value="rbvalue"
        onBlur={mockOnBlur}
      />
    );

    const radio = screen.getByRole('radio');
    expect(radio).toBeInTheDocument();
    expect(radio).not.toBeChecked();

    fireEvent.focus(radio);
    fireEvent.blur(radio);

    expect(radio).not.toBeChecked();
    expect(mockOnBlur).toHaveBeenCalledTimes(1);
  });
});
