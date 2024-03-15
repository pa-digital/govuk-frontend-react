import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../../Helper/testHelper';
import { SummaryList, SummaryListItemProps } from './SummaryList';

expect.extend(toHaveNoViolations);

const NoActionSummaryData: SummaryListItemProps[] = [
  {
    key: 'Name',
    value: 'Sarah Philips',
  },
  {
    key: 'Date of birth',
    value: '5 January 1978',
  },
  {
    key: 'Contact details',
    value: (
      <>
        07700 900457
        <br />
        sarah.phillips@example.com
      </>
    ),
  },
];

const ActionSummaryData: SummaryListItemProps[] = [
  {
    key: 'Name',
    value: 'Sarah Philips',
    links: [
      {
        to: '/update-name',
        text: 'Change',
      },
    ],
  },
  {
    key: 'Date of birth',
    value: '5 January 1978',
  },
  {
    key: 'Contact details',
    value: (
      <>
        07700 900457
        <br />
        sarah.phillips@example.com
      </>
    ),
    links: [
      {
        to: '/add-contact',
        text: 'Add',
        assistiveLinkText: 'Add your phone number or email address',
      },
      {
        to: '/update-contact',
        text: 'Change',
        assistiveLinkText: 'Change your phone number or email address',
      },
    ],
  },
];

const MissingSummaryData: SummaryListItemProps[] = [
  {
    key: 'Name',
    value: 'Sarah Philips',
    links: [
      {
        to: '/update-name',
        text: 'Change',
      },
    ],
  },
  {
    key: 'Date of birth',
    value: '5 January 1978',
    links: [
      {
        to: '/update-name',
        text: 'Change',
      },
    ],
  },
  {
    key: 'Contact details',
    value: {
      to: '/enter-contact-info',
      text: 'Enter contact information',
    },
  },
];

describe('Summary List component is accessible', () => {
  it('must not fail any accessibility tests with empty list', async () => {
    const { container } = render(<SummaryList list={[]} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('must not fail any accessibility tests with no actions populated list', async () => {
    const { container } = render(<SummaryList list={NoActionSummaryData} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('must not fail any accessibility tests with actions populated list', async () => {
    const { container } = render(<SummaryList list={ActionSummaryData} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('must not fail any accessibility tests with populated list and no borders', async () => {
    const { container } = render(
      <SummaryList list={ActionSummaryData} hideBorders />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Summary List renders correctly', () => {
  it('renders no actions correctly', async () => {
    render(<SummaryList list={NoActionSummaryData} />);

    const nameDT = screen.getByText('Name');
    const nameDD = screen.getByText('Sarah Philips');
    expect(nameDT).toBeInTheDocument();
    expect(nameDD).toBeInTheDocument();
    expect(nameDT).toHaveClass('govuk-summary-list__key');
    expect(nameDD).toHaveClass('govuk-summary-list__value');
    const nameListRow = nameDT.parentNode as HTMLElement;
    expect(nameListRow).toBeInTheDocument();
    expect(nameListRow).toHaveClass('govuk-summary-list__row');

    const dobDT = screen.getByText('Date of birth');
    const dobDD = screen.getByText('5 January 1978');
    expect(dobDT).toBeInTheDocument();
    expect(dobDD).toBeInTheDocument();
    expect(dobDT).toHaveClass('govuk-summary-list__key');
    expect(dobDD).toHaveClass('govuk-summary-list__value');
    const dobListRow = dobDT.parentNode as HTMLElement;
    expect(dobListRow).toBeInTheDocument();
    expect(dobListRow).toHaveClass('govuk-summary-list__row');

    const contactDT = screen.getByText('Contact details');
    const contactDD = screen.getByText(
      /07700 900457sarah.phillips@example.com/
    );
    expect(contactDT).toBeInTheDocument();
    expect(contactDD).toBeInTheDocument();
    expect(contactDT).toHaveClass('govuk-summary-list__key');
    expect(contactDD).toHaveClass('govuk-summary-list__value');
    const contactListRow = contactDT.parentNode as HTMLElement;
    expect(contactListRow).toBeInTheDocument();
    expect(contactListRow).toHaveClass('govuk-summary-list__row');
  });
  it('renders actions correctly', async () => {
    render(<SummaryList list={ActionSummaryData} />);

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(3);
    expect(links[0]).toHaveTextContent('Change name');
    expect(links[0]).toHaveClass('govuk-link');
    expect(links[0]).toHaveAttribute('href', '/update-name');
    expect(links[0]).not.toHaveAttribute('aria-label');
    const nameLinkDD = links[0].parentNode as HTMLElement;
    expect(nameLinkDD).toHaveClass('govuk-summary-list__actions');

    expect(links[1]).toHaveTextContent('Add contact details');
    expect(links[1]).toHaveClass('govuk-link');
    expect(links[1]).toHaveAttribute('href', '/add-contact');
    expect(links[1]).toHaveAttribute(
      'aria-label',
      'Add your phone number or email address'
    );
    const link1Parent = links[1].parentNode as HTMLElement;
    expect(link1Parent).toHaveClass('govuk-summary-list__actions-list-item');

    expect(links[2]).toHaveTextContent('Change contact details');
    expect(links[2]).toHaveClass('govuk-link');
    expect(links[2]).toHaveAttribute('href', '/update-contact');
    expect(links[2]).toHaveAttribute(
      'aria-label',
      'Change your phone number or email address'
    );
    const link2Parent = links[2].parentNode as HTMLElement;
    expect(link2Parent).toHaveClass('govuk-summary-list__actions-list-item');

    const contactActionsUL = link1Parent.parentNode as HTMLElement;
    expect(contactActionsUL).toHaveClass('govuk-summary-list__actions-list');
    const contactActionsDD = contactActionsUL.parentNode as HTMLElement;
    expect(contactActionsDD).toHaveClass('govuk-summary-list__actions');
  });
  it('renders mixed actions rows correctly', async () => {
    render(<SummaryList list={ActionSummaryData} />);

    const nameDT = screen.getByText('Name');
    const nameListRow = nameDT.parentNode as HTMLElement;
    expect(nameListRow).toHaveClass('govuk-summary-list__row');

    const dobDT = screen.getByText('Date of birth');
    const dobListRow = dobDT.parentNode as HTMLElement;
    expect(dobListRow).toHaveClass(
      'govuk-summary-list__row govuk-summary-list__row--no-actions'
    );

    const contactDT = screen.getByText('Contact details');
    const contactListRow = contactDT.parentNode as HTMLElement;
    expect(contactListRow).toHaveClass('govuk-summary-list__row');
  });
  it('renders missing actions correctly', async () => {
    render(<SummaryList list={MissingSummaryData} />);

    const contactDT = screen.getByText('Contact details');
    const contactDD = contactDT.nextSibling as HTMLElement;
    expect(contactDD).toBeInTheDocument();
    expect(contactDD).toHaveClass('govuk-summary-list__value');
    const missingContactLink = contactDD.childNodes[0] as HTMLLinkElement;
    expect(missingContactLink).toHaveClass('govuk-link');
    expect(missingContactLink).toHaveTextContent('Enter contact information');
    expect(missingContactLink).toHaveAttribute('href', '/enter-contact-info');
    const contactListRow = contactDT.parentNode as HTMLElement;
    expect(contactListRow).toBeInTheDocument();
    expect(contactListRow).toHaveClass(
      'govuk-summary-list__row govuk-summary-list__row--no-actions'
    );
  });
  it('renders correctly with borders', async () => {
    const { container } = render(
      <SummaryList list={ActionSummaryData} hideBorders />
    );
    const listDL = container.querySelector('dl');
    expect(listDL).toBeInTheDocument();
    expect(listDL).toHaveClass('govuk-summary-list');
  });
  it('renders correctly with no borders', async () => {
    const { container } = render(
      <SummaryList list={ActionSummaryData} hideBorders />
    );
    const listDL = container.querySelector('dl');
    expect(listDL).toBeInTheDocument();
    expect(listDL).toHaveClass(
      'govuk-summary-list govuk-summary-list--no-border'
    );
  });
});
