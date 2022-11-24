import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../src/Helper/testHelper';
import { Details } from '../src/UI/Details/Details';

expect.extend(toHaveNoViolations);

describe('Details component is accessible', () => {
  it('must not fail any accessibility tests', async () => {
    const { container } = render(<Details title="title">Content</Details>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('Details renders correctly', () => {
  it('renders correct content', async () => {
    render(<Details title="title">Content</Details>);

    const detailsTitle = screen.getByText('title');
    const detailsContent = screen.getByText('Content');
    expect(detailsTitle).toBeInTheDocument();
    expect(detailsTitle).toHaveClass('govuk-details__summary-text');

    const detailsSummary = detailsTitle.parentNode as HTMLElement;
    expect(detailsSummary).toBeInTheDocument();
    expect(detailsSummary).toHaveClass('govuk-details__summary');

    expect(detailsContent).toBeInTheDocument();
    expect(detailsContent).toHaveClass('govuk-details__text');

    const detailsWrapper = detailsContent.parentNode as HTMLElement;
    expect(detailsWrapper).toBeInTheDocument();
    expect(detailsWrapper).toHaveClass('govuk-details');
    expect(detailsWrapper).toHaveAttribute('data-module', 'govuk-details');
  });
});
