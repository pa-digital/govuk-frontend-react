import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../src/Helper/testHelper';
import { Tag } from '../src/UI/Tag/tag';

expect.extend(toHaveNoViolations);

describe('All Tags are accessible', () => {
  it('default tag', async () => {
    const { container } = render(<Tag>Default Tag</Tag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('undefined tag', async () => {
    const { container } = render(<Tag state={undefined}>Default Tag</Tag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('grey tag', async () => {
    const { container } = render(<Tag state="grey">Grey Tag</Tag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('green tag', async () => {
    const { container } = render(<Tag state="green">Green Tag</Tag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('turquoise tag', async () => {
    const { container } = render(<Tag state="turquoise">Turquoise Tag</Tag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('blue tag', async () => {
    const { container } = render(<Tag state="blue">Blue Tag</Tag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('purple tag', async () => {
    const { container } = render(<Tag state="purple">Purple Tag</Tag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('pink tag', async () => {
    const { container } = render(<Tag state="pink">Pink Tag</Tag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('red tag', async () => {
    const { container } = render(<Tag state="red">Red Tag</Tag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('orange tag', async () => {
    const { container } = render(<Tag state="orange">Orange Tag</Tag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('yellow tag', async () => {
    const { container } = render(<Tag state="yellow">Yellow Tag</Tag>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('All Tags render correctly', () => {
  it('default tag renders correct content', async () => {
    render(<Tag>Default Tag</Tag>);
    const tag = screen.getByText('Default Tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('govuk-tag');
  });
  it('undefined tag renders correct content', async () => {
    render(<Tag state={undefined}>Undefined Tag</Tag>);
    const tag = screen.getByText('Undefined Tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('govuk-tag');
  });
  it('grey tag renders correct content', async () => {
    render(<Tag state="grey">Grey Tag</Tag>);
    const tag = screen.getByText('Grey Tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('govuk-tag govuk-tag--grey');
  });
  it('green tag renders correct content', async () => {
    render(<Tag state="green">Green Tag</Tag>);
    const tag = screen.getByText('Green Tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('govuk-tag govuk-tag--green');
  });
  it('turquoise tag renders correct content', async () => {
    render(<Tag state="turquoise">Turquoise Tag</Tag>);
    const tag = screen.getByText('Turquoise Tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('govuk-tag govuk-tag--turquoise');
  });
  it('blue tag renders correct content', async () => {
    render(<Tag state="blue">Blue Tag</Tag>);
    const tag = screen.getByText('Blue Tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('govuk-tag govuk-tag--blue');
  });
  it('purple tag renders correct content', async () => {
    render(<Tag state="purple">Purple Tag</Tag>);
    const tag = screen.getByText('Purple Tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('govuk-tag govuk-tag--purple');
  });
  it('pink tag renders correct content', async () => {
    render(<Tag state="pink">Pink Tag</Tag>);
    const tag = screen.getByText('Pink Tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('govuk-tag govuk-tag--pink');
  });
  it('red tag renders correct content', async () => {
    render(<Tag state="red">Red Tag</Tag>);
    const tag = screen.getByText('Red Tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('govuk-tag govuk-tag--red');
  });
  it('orange tag renders correct content', async () => {
    render(<Tag state="orange">Orange Tag</Tag>);
    const tag = screen.getByText('Orange Tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('govuk-tag govuk-tag--orange');
  });
  it('yellow tag renders correct content', async () => {
    render(<Tag state="yellow">Yellow Tag</Tag>);
    const tag = screen.getByText('Yellow Tag');
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('govuk-tag govuk-tag--yellow');
  });
});
