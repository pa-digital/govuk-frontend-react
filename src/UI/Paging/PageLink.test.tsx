import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../../Helper/testHelper';
import PageLink from './PageLink';

expect.extend(toHaveNoViolations);

describe('PageLink component is accessible', () => {
  it('default page link must not fail any accessibility tests', async () => {
    const mockOnClick = jest.fn();
    const { container } = render(
      <PageLink onClick={mockOnClick}>
        <>link text</>
      </PageLink>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('assistive text page link must not fail any accessibility tests', async () => {
    const mockOnClick = jest.fn();
    const { container } = render(
      <PageLink
        onClick={mockOnClick}
        assistiveText="link assistive text"
        rel="next"
      >
        <>link text</>
      </PageLink>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('PageLink renders correctly', () => {
  it('default page link renders correctly', async () => {
    const mockOnClick = jest.fn();
    render(
      <PageLink onClick={mockOnClick}>
        <>link text</>
      </PageLink>
    );
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    // expect(link).toHaveAttribute('href', '#');
    expect(link).toHaveClass('govuk-link govuk-pagination__link');
  });
  it('page link renders correctly with assistive text', async () => {
    const mockOnClick = jest.fn();
    render(
      <PageLink onClick={mockOnClick} assistiveText="assistive link text">
        <>link text</>
      </PageLink>
    );
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('aria-label', 'assistive link text');
  });
  it('page link renders correctly when rel set to prev', async () => {
    const mockOnClick = jest.fn();
    render(
      <PageLink onClick={mockOnClick} rel="prev">
        <>link text</>
      </PageLink>
    );
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('rel', 'prev');
  });
  it('page link renders correctly when rel set to next', async () => {
    const mockOnClick = jest.fn();
    render(
      <PageLink
        onClick={mockOnClick}
        assistiveText="link assistive text"
        rel="next"
      >
        <>link text</>
      </PageLink>
    );
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('rel', 'next');
  });
});
