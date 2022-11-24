import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../src/Helper/testHelper';
import { Header } from '../src/UI/Typography/Header';

expect.extend(toHaveNoViolations);

describe('All Headers are accessible', () => {
  it('default tag', async () => {
    const { container } = render(<Header>Heading</Header>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('h1 tag', async () => {
    const { container } = render(<Header as="h1">Heading</Header>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('h2 tag', async () => {
    const { container } = render(<Header as="h2">Heading</Header>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('h3 tag', async () => {
    const { container } = render(<Header as="h3">Heading</Header>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('h4 tag', async () => {
    const { container } = render(<Header as="h4">Heading</Header>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('All Headers render correctly', () => {
  it('default tag renders correct content', async () => {
    render(<Header>Heading 1</Header>);
    const header = screen.getByRole('heading', { level: 1 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Heading 1');
    expect(header).toHaveClass('govuk-heading-xl');
  });
  it('h1 tag renders correct content', async () => {
    render(<Header as="h1">Heading 1</Header>);
    const header = screen.getByRole('heading', { level: 1 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Heading 1');
    expect(header).toHaveClass('govuk-heading-xl');
  });
  it('h2 tag renders correct content', async () => {
    render(<Header as="h2">Heading 2</Header>);
    const header = screen.getByRole('heading', { level: 2 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Heading 2');
    expect(header).toHaveClass('govuk-heading-l');
  });
  it('h3 tag renders correct content', async () => {
    render(<Header as="h3">Heading 3</Header>);
    const header = screen.getByRole('heading', { level: 3 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Heading 3');
    expect(header).toHaveClass('govuk-heading-m');
  });
  it('h4 tag renders correct content', async () => {
    render(<Header as="h4">Heading 4</Header>);
    const header = screen.getByRole('heading', { level: 4 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Heading 4');
    expect(header).toHaveClass('govuk-heading-s');
  });
});
