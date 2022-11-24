import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../src/Helper/testHelper';
import { Panel } from '../src/UI/Panel/Panel';

expect.extend(toHaveNoViolations);

describe('Panel component is accessible', () => {
  it('must not fail any accessibility tests', async () => {
    const { container } = render(<Panel heading="heading">text content</Panel>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('Panel renders correctly', () => {
  it('renders correct content', async () => {
    render(<Panel heading="heading">text content</Panel>);

    const panelHeading = screen.getByRole('heading', { level: 1 });
    const panelText = screen.getByText('text content');
    expect(panelHeading).toBeInTheDocument();
    expect(panelHeading).toHaveClass('govuk-panel__title');
    expect(panelText).toBeInTheDocument();
    expect(panelText).toHaveClass('govuk-panel__body');

    const panelWrapper = panelHeading.parentNode as HTMLElement;
    expect(panelWrapper).toBeInTheDocument();
    expect(panelWrapper).toHaveClass('govuk-panel govuk-panel--confirmation');
  });
});
