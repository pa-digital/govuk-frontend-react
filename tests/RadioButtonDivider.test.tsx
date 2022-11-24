import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../src/Helper/testHelper';
import RadioButtonDivider from '../src/UI/Radios/RadioButtonDivider';

expect.extend(toHaveNoViolations);

describe('Radio Button component is accessible', () => {
  it('must not fail any accessibility tests with minimum configuration', async () => {
    const { container } = render(<RadioButtonDivider />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with text configuration', async () => {
    const { container } = render(<RadioButtonDivider text="divider text" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Radio Button renders correctly', () => {
  it('default configuration renders correctly', async () => {
    render(<RadioButtonDivider />);

    const radioDivider = screen.getByText('or');
    expect(radioDivider).toBeInTheDocument();
    expect(radioDivider).toHaveClass('govuk-radios__divider');
  });
  it('text configuration renders correctly', async () => {
    render(<RadioButtonDivider text="divider text" />);

    const radioDivider = screen.getByText('divider text');
    expect(radioDivider).toBeInTheDocument();
    expect(radioDivider).toHaveClass('govuk-radios__divider');
  });
});
