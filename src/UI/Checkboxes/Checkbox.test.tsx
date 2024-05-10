import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../../Helper/testHelper';
import Checkbox from './Checkbox';
import { userEvent } from '@storybook/test';

expect.extend(toHaveNoViolations);

describe('Checkbox component is accessible', () => {
  it('default values must not fail any accessibility tests', async () => {
    const mockOnCheckChanged = jest.fn();
    const { container } = render(
      <Checkbox
        identifier="box-1"
        groupName="boxes"
        text="box 1 label"
        value="box1"
        onCheckChanged={mockOnCheckChanged}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with a hint', async () => {
    const mockOnCheckChanged = jest.fn();
    const { container } = render(
      <Checkbox
        identifier="box-1"
        groupName="boxes"
        text="box 1 label"
        value="box1"
        hint="this is the hint text"
        onCheckChanged={mockOnCheckChanged}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests when checked', async () => {
    const mockOnCheckChanged = jest.fn();
    const { container } = render(
      <Checkbox
        identifier="box-1"
        groupName="boxes"
        text="box 1 label"
        value="box1"
        hint="this is the hint text"
        checked
        onCheckChanged={mockOnCheckChanged}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('Checkbox renders correctly', () => {
  it('default checkbox renders correctly', async () => {
    const mockOnCheckChanged = jest.fn();
    render(
      <Checkbox
        identifier="box-1"
        groupName="boxes"
        text="box 1 label"
        value="box1"
        onCheckChanged={mockOnCheckChanged}
      />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveClass('govuk-checkboxes__input');
    expect(checkbox).toHaveAttribute('id', 'box-1');
    expect(checkbox).toHaveAttribute('name', 'boxes');
    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox).toHaveAttribute('value', 'box1');

    const label = screen.getByText('box 1 label');
    expect(label).toHaveClass('govuk-label govuk-checkboxes__label');
    expect(label).toHaveAttribute('for', 'box-1');
  });

  it('default checkbox renders correctly when checked', async () => {
    const mockOnCheckChanged = jest.fn();
    render(
      <Checkbox
        identifier="box-1"
        groupName="boxes"
        text="box 1 label"
        value="box1"
        checked
        onCheckChanged={mockOnCheckChanged}
      />
    );
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('checkbox renders correctly with a hint', async () => {
    const mockOnCheckChanged = jest.fn();
    render(
      <Checkbox
        identifier="box-1"
        groupName="boxes"
        text="box 1 label"
        value="box1"
        hint="This is a hint"
        onCheckChanged={mockOnCheckChanged}
      />
    );
    const hint = screen.getByText('This is a hint');
    expect(hint).toBeInTheDocument();
    const hintId = hint.getAttribute('id');
    expect(hintId).toBe('box-1-item-hint');
    expect(hint).toHaveClass('govuk-hint govuk-checkboxes__hint');
    const checkBox = screen.getByRole('checkbox');
    const checkBoxAriaDescribedBy = checkBox?.getAttribute('aria-describedBy');
    expect(checkBoxAriaDescribedBy).toBe('box-1-item-hint');
  });
});

describe('Checkbox functions correctly', () => {
  it('checked values are updated correctly by a mouse click on a single checkbox', async () => {
    const mockOnCheckChanged = jest.fn();
    render(
      <Checkbox
        identifier="box-1"
        groupName="boxes"
        text="box 1 label"
        value="box1"
        hint="This is a hint"
        onCheckChanged={mockOnCheckChanged}
      />
    );

    const checkBox = screen.getByRole('checkbox');
    await userEvent.click(checkBox);

    expect(checkBox).toBeChecked();
    expect(mockOnCheckChanged).toHaveBeenCalledTimes(1);
  });

  it('checked values are updated correctly by a mouse click on a single checked checkbox', async () => {
    const mockOnCheckChanged = jest.fn();
    render(
      <Checkbox
        identifier="box-1"
        groupName="boxes"
        text="box 1 label"
        value="box1"
        hint="This is a hint"
        checked
        onCheckChanged={mockOnCheckChanged}
      />
    );

    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).toBeChecked();
    await userEvent.click(checkBox);
    expect(checkBox).not.toBeChecked();
    expect(mockOnCheckChanged).toHaveBeenCalledTimes(1);
  });

  it('checked values are updated correctly on checking and un-checking a single checkbox with a mouse click', async () => {
    const mockOnCheckChanged = jest.fn();
    render(
      <Checkbox
        identifier="box-1"
        groupName="boxes"
        text="box 1 label"
        value="box1"
        hint="This is a hint"
        onCheckChanged={mockOnCheckChanged}
      />
    );

    const checkBox = screen.getByRole('checkbox');
    expect(checkBox).not.toBeChecked();

    await userEvent.click(checkBox);
    expect(checkBox).toBeChecked();
    expect(mockOnCheckChanged).toHaveBeenCalledTimes(1);

    await userEvent.click(checkBox);
    expect(checkBox).not.toBeChecked();
    expect(mockOnCheckChanged).toHaveBeenCalledTimes(2);
  });
});
