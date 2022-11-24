import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../src/Helper/testHelper';
import { Phase } from '../src/UI/Phase/Phase';

expect.extend(toHaveNoViolations);

describe('Panel component is accessible', () => {
  it('must not fail any accessibility tests with no children', async () => {
    const { container } = render(<Phase phase="ALPHA" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with children', async () => {
    const { container } = render(<Phase phase="ALPHA">text content</Phase>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('Panel renders correctly', () => {
  it('renders correct content without content', async () => {
    render(<Phase phase="ALPHA" />);

    const phaseText = screen.getByText('ALPHA');
    expect(phaseText).toBeInTheDocument();
    expect(phaseText).toHaveClass('govuk-tag govuk-phase-banner__content__tag');

    const phaseParaWrap = phaseText.parentNode as HTMLElement;
    expect(phaseParaWrap).toBeInTheDocument();
    expect(phaseParaWrap).toHaveClass('govuk-phase-banner__content');

    const phaselWrapper = phaseParaWrap.parentNode as HTMLElement;
    expect(phaselWrapper).toBeInTheDocument();
    expect(phaselWrapper).toHaveClass('govuk-phase-banner');
  });
  it('renders correct content with content', async () => {
    render(<Phase phase="ALPHA">text content</Phase>);

    const phaseContent = screen.getByText('text content');
    expect(phaseContent).toBeInTheDocument();
    expect(phaseContent).toHaveClass('govuk-phase-banner__text');
  });
});
