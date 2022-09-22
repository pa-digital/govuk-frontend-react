import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../../Helper/testHelper';
import { SkipLink } from './SkipLink';

expect.extend(toHaveNoViolations);

describe('Skiplink component is accessible', () => {
  it('valid values must not fail any accessibility tests', async () => {
    const { container } = render(<SkipLink />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('Skiplink renders correctly', () => {
  it('renders correct content', async () => {
    render(<SkipLink />);
    const skipLink = screen.getByRole('link');
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveTextContent('Skip to main content');
    expect(skipLink).toHaveClass('govuk-skip-link');
    expect(skipLink).toHaveAttribute('href', '/#content');
    expect(skipLink).toHaveAttribute('data-module', 'govuk-skip-link');
  });
});
