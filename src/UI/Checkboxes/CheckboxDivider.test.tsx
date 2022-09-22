import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../../Helper/testHelper';
import { CheckBoxDivider } from './CheckboxDivider';

expect.extend(toHaveNoViolations);

describe('Checkbox Divider component is accessible', () => {
  it('default values must not fail any accessibility tests', async () => {
    const { container } = render(<CheckBoxDivider />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('specified values must not fail any accessibility tests', async () => {
    const { container } = render(<CheckBoxDivider text="blah" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('Checkbox Divider renders correctly', () => {
  it('checkbox divider renders correctly with default values', async () => {
    render(<CheckBoxDivider />);
    const checkboxDivider = screen.getByText('or');
    expect(checkboxDivider).toBeInTheDocument();
    expect(checkboxDivider).toHaveClass('govuk-checkboxes__divider');
  });
  it('checkbox divider renders correctly with specified text', async () => {
    render(<CheckBoxDivider text="blah" />);
    const checkboxDivider = screen.getByText('blah');
    expect(checkboxDivider).toBeInTheDocument();
    expect(checkboxDivider).toHaveClass('govuk-checkboxes__divider');
  });
});
