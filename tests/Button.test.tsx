import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../src/Helper/testHelper';
import { Button } from '../src/UI/Buttons/Button';

expect.extend(toHaveNoViolations);

describe('Button component is accessible', () => {
  it('must not fail any accessibility tests by default', async () => {
    const { container } = render(<Button>button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with variant secondary', async () => {
    const { container } = render(<Button variant="secondary">button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests with variant warning', async () => {
    const { container } = render(<Button variant="warning">button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests when disabled', async () => {
    const { container } = render(<Button disabled>button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests when type is button', async () => {
    const { container } = render(<Button type="button">button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests when type is submit', async () => {
    const { container } = render(<Button type="submit">button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests when type is reset', async () => {
    const { container } = render(<Button type="reset">button</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('Button renders correctly', () => {
  it('default button renders correctly', async () => {
    render(<Button>button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('button');
    expect(button).toHaveClass('govuk-button ');
    var buttonType = button.getAttribute('type');
    expect(buttonType).toBe('button');
    var buttonModule = button.getAttribute('data-module');
    expect(buttonModule).toBe('govuk-button');
    var buttonDblClick = button.getAttribute('data-prevent-double-click');
    expect(buttonDblClick).toBe('true');
  });

  it('secondary button renders correctly', async () => {
    render(<Button variant="secondary">button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('govuk-button govuk-button--secondary');
  });

  it('warning button renders correctly', async () => {
    render(<Button variant="warning">button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('govuk-button govuk-button--warning');
  });
  it('disabled button renders correctly', async () => {
    render(<Button disabled>button</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('govuk-button');
    var buttonAria = button.getAttribute('aria-disabled');
    expect(buttonAria).toBe('true');
    var buttonDisabled = button.getAttribute('disabled');
    expect(buttonDisabled).toBe('');
  });
});
