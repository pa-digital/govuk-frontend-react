import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../../Helper/testHelper';
import { Breadcrumbs, BreadcrumbLink } from './Breadcrumbs';

expect.extend(toHaveNoViolations);

const BreadcrumbLinks: BreadcrumbLink[] = [
  {
    text: 'GDS Compliance',
    to: '/',
  },
  {
    text: 'Components',
    to: '/components',
  },
  {
    text: 'Inputs',
    to: '/inputs',
    assistiveText: 'standard inputs for a form',
  },
];

describe('Breadcrumb component is accessible', () => {
  it('must not fail any accessibility tests on default', async () => {
    const { container } = render(<Breadcrumbs links={BreadcrumbLinks} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests on collapse on mobile', async () => {
    const { container } = render(
      <Breadcrumbs collapseOnMobile links={BreadcrumbLinks} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
describe('Breadcrumb renders correctly', () => {
  beforeEach(() => {
    global.innerWidth = 1024;
    global.innerHeight = 800;
    global.dispatchEvent(new Event('resize'));
  });
  it('renders list element correctly', async () => {
    render(<Breadcrumbs links={BreadcrumbLinks} />);
    const breadcrumbList = screen.getByRole('list');
    expect(breadcrumbList).toBeInTheDocument();
    expect(breadcrumbList).toHaveClass('govuk-breadcrumbs__list');
  });
  it('list links correctly', async () => {
    render(<Breadcrumbs links={BreadcrumbLinks} />);
    const breadcrumbLinks = screen.getAllByRole('link');
    expect(breadcrumbLinks).toHaveLength(3);
    expect(breadcrumbLinks[0]).toHaveTextContent('GDS Compliance');
    expect(breadcrumbLinks[0]).toHaveClass('govuk-breadcrumbs__link');
    expect(breadcrumbLinks[0]).toHaveAttribute('href', '/');

    expect(breadcrumbLinks[1]).toHaveTextContent('Components');
    expect(breadcrumbLinks[1]).toHaveClass('govuk-breadcrumbs__link');
    expect(breadcrumbLinks[1]).toHaveAttribute('href', '/components');

    expect(breadcrumbLinks[2]).toHaveTextContent('Inputs');
    expect(breadcrumbLinks[2]).toHaveClass('govuk-breadcrumbs__link');
    expect(breadcrumbLinks[2]).toHaveAttribute('href', '/inputs');
    expect(breadcrumbLinks[2]).toHaveAttribute(
      'aria-label',
      'standard inputs for a form'
    );
  });
});
