import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../../Helper/testHelper';
import { CTAButton } from './CTAButton';

expect.extend(toHaveNoViolations);

describe('CTA Button component is accessible', () => {
  it('must not fail any accessibility tests by default', async () => {
    const { container } = render(<CTAButton to="#">button</CTAButton>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with mode secondary', async () => {
    const { container } = render(
      <CTAButton to="#" variant="secondary">
        button
      </CTAButton>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with mode warning', async () => {
    const { container } = render(
      <CTAButton to="#" variant="warning">
        button
      </CTAButton>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests when disabled', async () => {
    const { container } = render(
      <CTAButton to="#" disabled>
        button
      </CTAButton>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with assistive text', async () => {
    const { container } = render(
      <CTAButton to="#" assistiveText="User helpful text">
        button
      </CTAButton>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('CTA Button renders correctly', () => {
  it('default button renders correctly', async () => {
    render(<CTAButton to="/link">CTA Link</CTAButton>);
    const ctabutton = screen.getByRole('button');
    expect(ctabutton).toBeInTheDocument();
    expect(ctabutton).toHaveTextContent('CTA Link');
    expect(ctabutton).toHaveClass('govuk-button govuk-button--start');
    expect(ctabutton).toHaveAttribute('data-module', 'govuk-button');
    expect(ctabutton).toHaveAttribute('draggable', 'false');
    expect(ctabutton).toHaveAttribute('href', '/link');
  });

  it('secondary button renders correctly', async () => {
    render(
      <CTAButton to="/link" variant="secondary">
        button
      </CTAButton>
    );
    const ctabutton = screen.getByRole('button');
    expect(ctabutton).toBeInTheDocument();
    expect(ctabutton).toHaveClass(
      'govuk-button govuk-button--secondary govuk-button--start'
    );
  });

  it('warning button renders correctly', async () => {
    render(
      <CTAButton to="/link" variant="warning">
        button
      </CTAButton>
    );
    const ctabutton = screen.getByRole('button');
    expect(ctabutton).toBeInTheDocument();
    expect(ctabutton).toHaveClass(
      'govuk-button govuk-button--warning govuk-button--start'
    );
  });
  it('disabled button renders correctly', async () => {
    render(
      <CTAButton to="/link" disabled>
        button
      </CTAButton>
    );
    const ctabutton = screen.getByRole('button');
    expect(ctabutton).toBeInTheDocument();
    expect(ctabutton).toHaveClass(
      'govuk-button govuk-button--start disabled-link'
    );
    expect(ctabutton).toHaveAttribute('aria-disabled', 'true');
  });
  it('button assistive text renders correctly', async () => {
    render(
      <CTAButton to="/link" assistiveText="Helpful text">
        button
      </CTAButton>
    );
    const ctabutton = screen.getByRole('button');
    expect(ctabutton).toBeInTheDocument();
    expect(ctabutton).toHaveAttribute('aria-label', 'Helpful text');
  });
});
