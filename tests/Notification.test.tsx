import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../src/Helper/testHelper';
import { Notification } from '../src/UI/Notification/Notification';

expect.extend(toHaveNoViolations);

const singleNotification = [
  {
    text: 'paragraph text',
    link: {
      to: '/link',
      text: 'link text',
    },
  },
];

const multipleNotification = [
  {
    text: 'first paragraph text',
    link: {
      to: '/firstlink',
      text: 'first link text',
    },
  },
  {
    text: 'second paragraph text',
    link: {
      to: 'https://www.google.co.uk',
      external: true,
      assistiveText: 'Search via Google',
      text: 'search via Google',
    },
  },
];

describe('Notification component is accessible', () => {
  it('must not fail any accessibility tests for single content element', async () => {
    const { container } = render(
      <Notification
        identifier="govuk-notification-banner"
        heading="header"
        content={singleNotification}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
  it('must not fail any accessibility tests for multiple content element', async () => {
    const { container } = render(
      <Notification
        identifier="govuk-notification-banner"
        heading="header"
        content={multipleNotification}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Notification renders correctly', () => {
  it('renders a single notification correctly', async () => {
    render(
      <Notification
        identifier="govuk-notification-banner"
        heading="header"
        content={singleNotification}
      />
    );

    const notificationWrapper = screen.getByRole('region');
    expect(notificationWrapper).toBeInTheDocument();
    expect(notificationWrapper).toHaveAttribute(
      'aria-labelledby',
      'govuk-notification-banner-title'
    );
    expect(notificationWrapper).toHaveAttribute(
      'data-module',
      'govuk-notification-banner'
    );

    const header = screen.getByRole('heading', { level: 2 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('header');
    expect(header).toHaveClass('govuk-notification-banner__title');

    const headerContainer = header.parentNode as HTMLElement;
    expect(headerContainer).toBeInTheDocument();
    expect(headerContainer).toHaveClass('govuk-notification-banner__header');

    const notificationText = screen.getByText('paragraph text');
    expect(notificationText).toBeInTheDocument();
    expect(notificationText).toHaveClass('govuk-notification-banner__heading');

    const notificationLink = screen.getByRole('link');
    expect(notificationLink).toBeInTheDocument();
    expect(notificationLink).toHaveTextContent('link text');
    expect(notificationLink).toHaveClass('govuk-notification-banner__link');
  });

  it('renders a multiple notification correctly', async () => {
    render(
      <Notification
        identifier="govuk-notification-banner"
        heading="header"
        content={multipleNotification}
      />
    );

    const notificationWrapper = screen.getByRole('region');
    expect(notificationWrapper).toBeInTheDocument();
    expect(notificationWrapper).toHaveAttribute(
      'aria-labelledby',
      'govuk-notification-banner-title'
    );
    expect(notificationWrapper).toHaveAttribute(
      'data-module',
      'govuk-notification-banner'
    );

    const header = screen.getByRole('heading', { level: 2 });
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('header');
    expect(header).toHaveClass('govuk-notification-banner__title');

    const headerContainer = header.parentNode as HTMLElement;
    expect(headerContainer).toBeInTheDocument();
    expect(headerContainer).toHaveClass('govuk-notification-banner__header');

    const firstNotification = screen.getByText('first paragraph text');
    expect(firstNotification).toBeInTheDocument();
    expect(firstNotification).toHaveClass('govuk-notification-banner__heading');

    const secondNotification = screen.getByText('second paragraph text');
    expect(secondNotification).toBeInTheDocument();
    expect(secondNotification).toHaveClass(
      'govuk-notification-banner__heading'
    );

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveTextContent('first link text');
    expect(links[0]).toHaveClass('govuk-notification-banner__link');
    expect(links[0]).toHaveAttribute('href', '/firstlink');

    expect(links[1]).toHaveTextContent('search via Google');
    expect(links[1]).toHaveClass('govuk-notification-banner__link');
    expect(links[1]).toHaveAttribute('href', 'https://www.google.co.uk');
    expect(links[1]).toHaveAttribute('aria-label', 'Search via Google');
  });
});
