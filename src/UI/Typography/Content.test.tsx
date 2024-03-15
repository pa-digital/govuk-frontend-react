import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../../Helper/testHelper';
import { Content } from './Content';

expect.extend(toHaveNoViolations);

describe('All Content is accessible', () => {
  it('default tag', async () => {
    const { container } = render(<Content>Paragraph of text</Content>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('p tag', async () => {
    const { container } = render(<Content as="p">Paragraph of text</Content>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('pre tag', async () => {
    const { container } = render(<Content as="pre">Dev text</Content>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('All Content renders correctly', () => {
  it('default tag renders correct content', async () => {
    render(<Content>Paragraph of text</Content>);
    const paragraph = screen.getByText('Paragraph of text');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass('govuk-body');
  });
  it('p tag renders correct content', async () => {
    render(<Content as="p">Paragraph of text</Content>);
    const paragraph = screen.getByText('Paragraph of text');
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass('govuk-body');
  });
  it('pre tag renders correct content', async () => {
    render(<Content as="pre">Dev text</Content>);
    const paragraph = screen.getByText('Dev text');
    expect(paragraph).toBeInTheDocument();
  });
});
