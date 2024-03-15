import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../../Helper/testHelper';
import { ExitPage } from './ExitPage';

expect.extend(toHaveNoViolations);

describe('Button component is accessible', () => {
  it('must not fail any accessibility tests', async () => {
    const { container } = render(
      <ExitPage
        to="https://www.bbc.co.uk/weather"
        text="Exit this page"
      ></ExitPage>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with assistive text', async () => {
    const { container } = render(
      <ExitPage
        to="https://www.bbc.co.uk/weather"
        text="Exit this page"
        assistiveText="Assistive text information"
      ></ExitPage>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('Button renders correctly', () => {
  it('default exit page button renders correctly', async () => {
    render(
      <ExitPage
        to="https://www.bbc.co.uk/weather"
        text="Exit this page"
      ></ExitPage>
    );
    const exitLink = screen.getByRole('button');
    expect(exitLink).toBeInTheDocument();
    expect(exitLink).toHaveTextContent('Exit this page');
    expect(exitLink).toHaveClass(
      'govuk-button govuk-button--warning govuk-exit-this-page__button govuk-js-exit-this-page-button'
    );
    expect(exitLink).toHaveAttribute('role', 'button');
    expect(exitLink).toHaveAttribute('data-module', 'govuk-button');
    expect(exitLink).toHaveAttribute('draggable', 'false');
    expect(exitLink).toHaveAttribute('href', 'https://www.bbc.co.uk/weather');
    expect(exitLink).toHaveAttribute('rel', 'nofollow noreferrer');
    expect(exitLink).not.toHaveAttribute('aria-label');

    const hiddenSpan = exitLink.querySelector('span');
    expect(hiddenSpan).toBeInTheDocument();
    expect(hiddenSpan).toHaveClass('govuk-visually-hidden');
    expect(hiddenSpan).toHaveTextContent('Emergency');

    const wrapper = exitLink.parentNode as HTMLElement;
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass('govuk-exit-this-page');
    expect(wrapper).toHaveAttribute('data-module', 'govuk-exit-this-page');
  });
  it('exit page button renders correctly with assistive text', async () => {
    render(
      <ExitPage
        to="https://www.bbc.co.uk/weather"
        text="Exit this page"
        assistiveText="Assistive text information"
      ></ExitPage>
    );
    const exitLink = screen.getByRole('button');
    expect(exitLink).toHaveAttribute(
      'aria-label',
      'Assistive text information'
    );
  });
});
