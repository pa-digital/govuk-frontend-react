import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../src/Helper/testHelper';
import { Warning } from '../src/UI/Warning/Warning';

expect.extend(toHaveNoViolations);

describe('All Warning is accessible', () => {
  it('Warning text', async () => {
    const { container } = render(<Warning>Paragraph of text</Warning>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('Warning renders correctly', () => {
  it('Warning renders correct content', async () => {
    render(<Warning>Paragraph of text</Warning>);
    const warningIcon = screen.getByText('!');
    expect(warningIcon).toBeInTheDocument();
    expect(warningIcon).toHaveClass('govuk-warning-text__icon');
    expect(warningIcon).toHaveAttribute('aria-hidden', 'true');
    const warningAssistive = screen.getByText('Warning');
    expect(warningAssistive).toBeInTheDocument();
    expect(warningAssistive).toHaveClass('govuk-warning-text__assistive');
    const warningContent = screen.getByText('Paragraph of text');
    expect(warningContent).toBeInTheDocument();
    expect(warningContent).toHaveClass('govuk-warning-text__text');
    const warningWrapper = warningContent.parentNode as HTMLElement;
    expect(warningWrapper).toBeInTheDocument();
    expect(warningWrapper).toHaveClass('govuk-warning-text');
  });
});
