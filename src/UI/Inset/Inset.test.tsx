import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../../Helper/testHelper';
import { Inset } from './Inset';

expect.extend(toHaveNoViolations);

describe('Inset component is accessible', () => {
  it('valid values must not fail any accessibility tests', async () => {
    const { container } = render(<Inset>text</Inset>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('Inset renders correctly', () => {
  it('renders correct content', async () => {
    render(<Inset>text</Inset>);
    const inset = screen.getByText('text');
    expect(inset).toBeInTheDocument();
    expect(inset).toHaveClass('govuk-inset-text');
  });
});
