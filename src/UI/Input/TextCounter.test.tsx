import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
  fireEvent,
} from '../../Helper/testHelper';
import { TextCounter } from './TextCounter';

expect.extend(toHaveNoViolations);

describe('Text Counter component is accessible', () => {
  it('must not fail any accessibility tests with character configuration', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    const { container } = render(
      <TextCounter
        identifier="input"
        label="label"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        counterType="character"
        maxCount={50}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with word configuration', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    const { container } = render(
      <TextCounter
        identifier="input"
        label="label"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        counterType="word"
        maxCount={50}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with threshold configuration', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    const { container } = render(
      <TextCounter
        identifier="input"
        label="label"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        counterType="character"
        maxCount={50}
        threshold={25}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Text Counter renders correctly for all configurations', () => {
  it('input must have all standard attributes configured correctly for character count', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextCounter
        identifier="counter"
        label="label"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        counterType="character"
        maxCount={50}
      />
    );

    const input = await screen.findByLabelText('label');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute(
      'aria-describedby',
      'counter-info counter-label'
    );

    const container = input.parentElement as HTMLElement;
    expect(container).toBeInTheDocument();
    expect(container).toHaveClass('govuk-form-group');

    const counter = await screen.findByText('You have 50 characters remaining');
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveAttribute('id', 'counter-info');
    expect(counter).toHaveClass('govuk-hint govuk-character-count__message');

    const wrapper = counter.parentNode as HTMLElement;
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass('govuk-character-count');
    expect(wrapper).toHaveAttribute('data-module', 'govuk-character-count');
    expect(wrapper).toHaveAttribute('data-maxlength', '50');
  });
  it('input must have all standard attributes configured correctly for word count', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextCounter
        identifier="counter"
        label="label"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        counterType="word"
        maxCount={20}
      />
    );

    const input = await screen.findByLabelText('label');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute(
      'aria-describedby',
      'counter-info counter-label'
    );

    const counter = await screen.findByText('You have 20 words remaining');
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveAttribute('id', 'counter-info');
    expect(counter).toHaveClass('govuk-hint govuk-character-count__message');
  });

  it('input must have all standard attributes configured correctly for hint', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextCounter
        identifier="counter"
        label="label"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        hint="this is the hint"
        counterType="character"
        maxCount={20}
      />
    );

    const input = await screen.findByLabelText('label');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute(
      'aria-describedby',
      'counter-info counter-hint counter-label'
    );

    const hint = await screen.findByText('this is the hint');
    expect(hint).toBeInTheDocument();

    const counter = await screen.findByText('You have 20 characters remaining');
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveAttribute('id', 'counter-info');
    expect(counter).toHaveClass('govuk-hint govuk-character-count__message');
  });

  it('input must have all standard attributes configured correctly for hint and error', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextCounter
        identifier="counter"
        label="label"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        hint="this is the hint"
        error="this is the error"
        counterType="character"
        maxCount={20}
      />
    );

    const input = await screen.findByLabelText('label');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute(
      'aria-describedby',
      'counter-info counter-error counter-hint counter-label'
    );

    const error = await screen.findByText('this is the error');
    expect(error).toBeInTheDocument();

    const errorContainer = input.parentElement as HTMLElement;
    expect(errorContainer).toBeInTheDocument();
    expect(errorContainer).toHaveClass(
      'govuk-form-group govuk-form-group--error'
    );

    const counter = await screen.findByText('You have 20 characters remaining');
    expect(counter).toBeInTheDocument();
    expect(counter).toHaveAttribute('id', 'counter-info');
    expect(counter).toHaveClass('govuk-hint govuk-character-count__message');
  });
});

describe('Text Counter functions correctly for all configurations', () => {
  it('input must correctly update character count', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextCounter
        identifier="counter"
        label="label"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        counterType="character"
        maxCount={50}
      />
    );

    const input = await screen.findByLabelText('label');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '23' } });
    expect(input).toHaveValue('23');

    const updatedCount = await screen.findByText(
      'You have 48 characters remaining'
    );
    expect(updatedCount).toBeInTheDocument();
  });

  it('input must correctly update word count', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextCounter
        identifier="counter"
        label="label"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        counterType="word"
        maxCount={50}
      />
    );

    const input = await screen.findByLabelText('label');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'text' } });
    expect(input).toHaveValue('text');

    const nonUpdatedCount = await screen.findByText(
      'You have 49 words remaining'
    );
    expect(nonUpdatedCount).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'multi word text' } });
    expect(input).toHaveValue('multi word text');

    const updatedCount = await screen.findByText('You have 47 words remaining');
    expect(updatedCount).toBeInTheDocument();
  });

  it('input must correctly show word count with threshold for character configuration', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextCounter
        identifier="counter"
        label="label"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        counterType="character"
        maxCount={10}
        threshold={7}
      />
    );

    const input = await screen.findByLabelText('label');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '1' } });
    expect(input).toHaveValue('1');
    let nonUpdatedCount = screen.queryByText('You have 9 characters remaining');
    expect(nonUpdatedCount).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: '12' } });
    expect(input).toHaveValue('12');
    nonUpdatedCount = screen.queryByText('You have 8 characters remaining');
    expect(nonUpdatedCount).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: '123' } });
    expect(input).toHaveValue('123');
    nonUpdatedCount = screen.queryByText('You have 7 characters remaining');
    expect(nonUpdatedCount).toBeInTheDocument();
  });

  it('input must correctly show word count with threshold for word configuration', async () => {
    const mockOnChange = jest.fn();
    const mockOnBlur = jest.fn();
    render(
      <TextCounter
        identifier="counter"
        label="label"
        onChange={mockOnChange}
        onBlur={mockOnBlur}
        counterType="word"
        maxCount={5}
        threshold={2}
      />
    );

    const input = await screen.findByLabelText('label');
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'this' } });
    expect(input).toHaveValue('this');
    let nonUpdatedCount = screen.queryByText('You have 4 words remaining');
    expect(nonUpdatedCount).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'this is' } });
    expect(input).toHaveValue('this is');
    nonUpdatedCount = screen.queryByText('You have 3 words remaining');
    expect(nonUpdatedCount).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'this is a' } });
    expect(input).toHaveValue('this is a');
    nonUpdatedCount = screen.queryByText('You have 2 words remaining');
    expect(nonUpdatedCount).toBeInTheDocument();
  });
});
