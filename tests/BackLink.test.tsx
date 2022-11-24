import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../src/Helper/testHelper';
import { BackLink } from '../src/UI/BackLink/BackLink';

expect.extend(toHaveNoViolations);

describe('BackLink component is accessible', () => {
  it('must not fail any accessibility tests', async () => {
    const { container } = render(<BackLink to="#" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('BackLink renders correctly', () => {
  it('default tag renders correct content', async () => {
    render(<BackLink to="#" />);
    const backLink = screen.getByRole('link');
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveTextContent('Back');
    expect(backLink).toHaveClass('govuk-back-link');
  });
});
