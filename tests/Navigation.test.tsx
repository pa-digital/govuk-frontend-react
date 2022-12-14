import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
  fireEvent,
} from '../src/Helper/testHelper';
import { Navigation } from '../src/UI/Navigation/Navigation';
import { NavigationLink } from '../src/UI/Navigation/NavigationProps';

expect.extend(toHaveNoViolations);
const customGlobal: any = global;

const navLinks: NavigationLink[] = [
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/content',
    text: 'Content',
  },
  {
    to: '/examples',
    text: 'Examples',
    assistiveText: 'Some examples of the implementation of the GDS Frameworks',
  },
];

describe('Navigation component is accessible on and above desktop', () => {
  beforeEach(() => {
    global.innerWidth = 1024;
    global.innerHeight = 800;
    global.dispatchEvent(new Event('resize'));
  });
  it('empty links must not fail any accessibility tests', async () => {
    const { container } = render(<Navigation links={navLinks} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('populated links must not fail any accessibility tests', async () => {
    const { container } = render(<Navigation links={navLinks} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Navigation component is accessible below desktop', () => {
  beforeEach(() => {
    global.innerWidth = 320;
    global.innerHeight = 500;
    global.dispatchEvent(new Event('resize'));
  });
  it('empty links must not fail any accessibility tests', async () => {
    const { container } = render(<Navigation links={navLinks} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('populated links must not fail any accessibility tests', async () => {
    const { container } = render(<Navigation links={navLinks} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Navigation component renders correctly on and above desktop', () => {
  beforeEach(() => {
    customGlobal.innerWidth = 1024;
    customGlobal.innerHeight = 500;
    fireEvent(customGlobal, new Event('resize'));
  });
  it('must render navigation correctly', async () => {
    render(<Navigation links={navLinks} />);

    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveClass('govuk-header__navigation');

    const navList = screen.getByRole('list');
    expect(navList).toBeInTheDocument();
    expect(navList).toHaveClass('govuk-header__navigation-list');
    expect(navList).toHaveAttribute('id', 'navigation');
    expect(navList).toBeVisible();

    const navListItems = screen.getAllByRole('listitem');
    expect(navListItems).toHaveLength(3);
    expect(navListItems[0]).toHaveClass('govuk-header__navigation-item');
    expect(navListItems[1]).toHaveClass('govuk-header__navigation-item');
    expect(navListItems[2]).toHaveClass('govuk-header__navigation-item');

    const navListLinks = screen.getAllByRole('link');
    expect(navListLinks).toHaveLength(3);
    expect(navListLinks[0]).toHaveClass('govuk-header__link');
    expect(navListLinks[0]).toHaveTextContent('Home');
    expect(navListLinks[0]).toHaveAttribute('href', '/');
    expect(navListLinks[1]).toHaveClass('govuk-header__link');
    expect(navListLinks[1]).toHaveTextContent('Content');
    expect(navListLinks[1]).toHaveAttribute('href', '/content');
    expect(navListLinks[2]).toHaveClass('govuk-header__link');
    expect(navListLinks[2]).toHaveTextContent('Examples');
    expect(navListLinks[2]).toHaveAttribute('href', '/examples');
    expect(navListLinks[2]).toHaveAttribute(
      'aria-label',
      'Some examples of the implementation of the GDS Frameworks'
    );
  });
  it('must render button correctly', async () => {
    render(<Navigation links={navLinks} />);

    const navButton = screen.getByText('Menu');
    expect(navButton).toBeInTheDocument();
    expect(navButton).toHaveClass(
      'govuk-header__menu-button govuk-js-header-toggle'
    );
    expect(navButton).toHaveAttribute('aria-controls', 'navigation');
    expect(navButton).toHaveAttribute('aria-label', 'Show or hide menu');
    expect(navButton).not.toBeVisible();
    expect(navButton).not.toHaveAttribute('aria-expanded');
  });
});

describe('Navigation component renders correctly below desktop', () => {
  beforeEach(() => {
    customGlobal.innerWidth = 320;
    customGlobal.innerHeight = 500;
    fireEvent(customGlobal, new Event('resize'));
  });
  it('must render button correctly', async () => {
    render(<Navigation links={navLinks} />);

    const navList = screen.getByRole('list', { hidden: true });
    expect(navList).toBeInTheDocument();
    expect(navList).toHaveClass('govuk-header__navigation-list');
    expect(navList).toHaveAttribute('id', 'navigation');
    expect(navList).not.toBeVisible();

    const navButton = screen.getByRole('button', { hidden: true });
    expect(navButton).toBeInTheDocument();
    expect(navButton).toHaveClass(
      'govuk-header__menu-button govuk-js-header-toggle'
    );
    expect(navButton).toHaveAttribute('aria-controls', 'navigation');
    expect(navButton).toHaveAttribute('aria-label', 'Show or hide menu');
    expect(navButton).toBeVisible();
    expect(navButton).toHaveAttribute('aria-expanded', 'false');
    expect(navButton).toHaveTextContent('Menu');
  });

  it('button aria-expanded attribute must toggle correctly when menu is toggled', async () => {
    render(<Navigation links={navLinks} />);

    const navButton = screen.getByText('Menu');
    expect(navButton).toBeInTheDocument();

    fireEvent.click(navButton);
    expect(navButton).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(navButton);
    expect(navButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('navigation hidden attribute must toggle correctly when menu is toggled', async () => {
    render(<Navigation links={navLinks} />);

    const navButton = screen.getByText('Menu');
    expect(navButton).toBeInTheDocument();

    const navList = screen.getByRole('list', { hidden: true });
    expect(navList).toBeInTheDocument();
    expect(navList).not.toBeVisible();

    fireEvent.click(navButton);
    expect(navButton).toHaveAttribute('aria-expanded', 'true');
    expect(navList).toBeVisible();

    fireEvent.click(navButton);
    expect(navButton).toHaveAttribute('aria-expanded', 'false');
    expect(navList).not.toBeVisible();
  });
});
