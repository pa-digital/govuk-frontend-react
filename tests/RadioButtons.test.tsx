import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
  fireEvent,
} from '../src/Helper/testHelper';
import { RadioButtons } from '../src/UI/Radios/RadioButtons';
import {
  NameChangeData,
  PreSelectedNameChangeData,
  SignInData,
} from './RadioButtonTestData';

expect.extend(toHaveNoViolations);

describe('Radio Buttons component is accessible', () => {
  it('must not fail any accessibility tests with minimum configuration', async () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        data={NameChangeData}
        onValueChange={mockOnChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with inline configuration', async () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        data={NameChangeData}
        render="inline"
        onValueChange={mockOnChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with compact configuration', async () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        data={NameChangeData}
        compact
        onValueChange={mockOnChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with multi question configuration', async () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        data={NameChangeData}
        multiQuestion
        onValueChange={mockOnChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with checked configuration', async () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        data={PreSelectedNameChangeData}
        onValueChange={mockOnChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with hint configuration', async () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        hint="This is the main hint"
        data={SignInData}
        onValueChange={mockOnChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with error configuration', async () => {
    const mockOnChange = jest.fn();
    const { container } = render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        data={NameChangeData}
        error="there is an error"
        onValueChange={mockOnChange}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Radio Buttons renders correctly', () => {
  it('default configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        data={NameChangeData}
        onValueChange={mockOnChange}
      />
    );

    const fieldset = screen.getByRole('group');
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveClass('govuk-fieldset');
    expect(fieldset).toHaveAttribute('aria-describedby', 'radioButtons-legend');

    const radioButtonGroupWrapper = fieldset.parentNode as HTMLElement;
    expect(radioButtonGroupWrapper).toBeInTheDocument();
    expect(radioButtonGroupWrapper).toHaveClass('govuk-form-group');

    const legendText = screen.getByRole('heading', { level: 1 });
    expect(legendText).toBeInTheDocument();
    expect(legendText).toHaveClass('govuk-fieldset__heading');
    expect(legendText).toHaveTextContent('header text');

    const legend = legendText.parentNode as HTMLElement;
    expect(legend).toBeInTheDocument();
    expect(legend).toHaveClass(
      'govuk-fieldset__legend govuk-fieldset__legend--l'
    );
    expect(legend).toHaveAttribute('id', 'radioButtons-legend');

    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(2);

    expect(radios[0]).not.toBeChecked();
    expect(radios[1]).not.toBeChecked();

    const radioElementWrapper = legend.nextSibling as HTMLElement;
    expect(radioElementWrapper).toBeInTheDocument();
    expect(radioElementWrapper).toHaveClass('govuk-radios');
    expect(radioElementWrapper).toHaveAttribute('data-module', 'govuk-radios');
  });
  it('compact configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        data={NameChangeData}
        compact
        onValueChange={mockOnChange}
      />
    );

    const legendText = screen.getByRole('heading', { level: 1 });
    expect(legendText).toBeInTheDocument();

    const legend = legendText.parentNode as HTMLElement;
    expect(legend).toBeInTheDocument();
    expect(legend).toHaveClass(
      'govuk-fieldset__legend govuk-fieldset__legend--m'
    );

    const radioElementWrapper = legend.nextSibling as HTMLElement;
    expect(radioElementWrapper).toBeInTheDocument();
    expect(radioElementWrapper).toHaveClass('govuk-radios govuk-radios--small');
  });
  it('multi question configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        data={NameChangeData}
        multiQuestion
        onValueChange={mockOnChange}
      />
    );

    const legend = screen.getByText('header text');
    expect(legend).toBeInTheDocument();
    expect(legend).toHaveClass('govuk-fieldset__legend');
    expect(legend).toHaveAttribute('id', 'radioButtons-legend');
  });
  it('inline configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        data={NameChangeData}
        render="inline"
        onValueChange={mockOnChange}
      />
    );

    const legendText = screen.getByRole('heading', { level: 1 });
    expect(legendText).toBeInTheDocument();

    const legend = legendText.parentNode as HTMLElement;
    expect(legend).toBeInTheDocument();
    expect(legend).toHaveClass(
      'govuk-fieldset__legend govuk-fieldset__legend--l'
    );

    const radioElementWrapper = legend.nextSibling as HTMLElement;
    expect(radioElementWrapper).toBeInTheDocument();
    expect(radioElementWrapper).toHaveClass(
      'govuk-radios govuk-radios--inline'
    );
  });
  it('checked configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        data={PreSelectedNameChangeData}
        onValueChange={mockOnChange}
      />
    );

    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(2);

    expect(radios[0]).toHaveAttribute('value', 'Yes');
    expect(radios[0]).not.toBeChecked();
    expect(radios[1]).toHaveAttribute('value', 'No');
    expect(radios[1]).toBeChecked();
  });
  it('hint configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        hint="This is the main hint"
        data={SignInData}
        onValueChange={mockOnChange}
      />
    );

    const fieldset = screen.getByRole('group');
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute(
      'aria-describedby',
      'radioButtons-hint radioButtons-legend'
    );

    const hint = screen.getByText('This is the main hint');
    expect(hint).toBeInTheDocument();
    expect(hint).toHaveClass('govuk-hint');
    expect(hint).toHaveAttribute('id', 'radioButtons-hint');

    const hint1 = screen.getByText(
      "You'll have a user ID if you've registered for Self Assessment or filed a tax return online before."
    );
    expect(hint1).toBeInTheDocument();
    expect(hint1).toHaveClass('govuk-hint govuk-radios__hint');
    expect(hint1).toHaveAttribute('id', 'radioButtons-1-item-hint');

    const hint2 = screen.getByText(
      "You'll have an account if you've already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
    );
    expect(hint2).toBeInTheDocument();
    expect(hint2).toHaveClass('govuk-hint govuk-radios__hint');
    expect(hint2).toHaveAttribute('id', 'radioButtons-2-item-hint');
  });
  it('error configuration renders correctly', async () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        data={NameChangeData}
        error="This is an error"
        onValueChange={mockOnChange}
      />
    );

    const fieldset = screen.getByRole('group');
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute(
      'aria-describedby',
      'radioButtons-error radioButtons-legend'
    );

    const radioButtonGroupWrapper = fieldset.parentNode as HTMLElement;
    expect(radioButtonGroupWrapper).toBeInTheDocument();
    expect(radioButtonGroupWrapper).toHaveClass(
      'govuk-form-group govuk-form-group--error'
    );

    const errorMessage = screen.getByText('This is an error');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('govuk-error-message');
    expect(errorMessage).toHaveAttribute('id', 'radioButtons-error');
  });
});

describe('Radio Buttons functions correctly', () => {
  beforeEach(() => {
    NameChangeData[0].checked = false;
    NameChangeData[1].checked = false;
  });
  it('radio button change functions correctly', async () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        data={NameChangeData}
        onValueChange={mockOnChange}
      />
    );

    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(2);

    expect(radios[0]).not.toBeChecked();
    expect(radios[1]).not.toBeChecked();

    fireEvent.click(radios[0]);

    expect(radios[0]).toBeChecked();
    expect(radios[1]).not.toBeChecked();

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
  it('radio button blur functions correctly', async () => {
    const mockOnChange = jest.fn();
    render(
      <RadioButtons
        identifier="radioButtons"
        header="header text"
        data={NameChangeData}
        onValueChange={mockOnChange}
      />
    );

    const radios = screen.getAllByRole('radio');
    expect(radios).toHaveLength(2);

    expect(radios[0]).not.toBeChecked();
    expect(radios[1]).not.toBeChecked();

    fireEvent.focus(radios[0]);
    fireEvent.blur(radios[0]);

    expect(radios[0]).not.toBeChecked();
    expect(radios[1]).not.toBeChecked();

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });
});
