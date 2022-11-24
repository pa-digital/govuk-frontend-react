import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
} from '../src/Helper/testHelper';
import { SummaryList, SummaryListItemProps } from '../src/UI/SummaryList/SummaryList';

expect.extend(toHaveNoViolations);

export const SummaryData: SummaryListItemProps[] = [
  {
    key: 'Name',
    value: 'Sarah Philips',
    link: '/update-name',
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
    link: '/update-contact',
    assistiveLinkText: 'Change your phone number or email address',
  },
];

describe('Summary List compcomponent is accessible', () => {
  it('must not fail any accessibility tests with empty list', async () => {
    const { container } = render(<SummaryList list={[]} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('must not fail any accessibility tests with populated list', async () => {
    const { container } = render(<SummaryList list={SummaryData} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Summary List renders correctly', () => {
  it('renders correctly', async () => {
    render(<SummaryList list={SummaryData} />);

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
    const dobListRow = nameDT.parentNode as HTMLElement;
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
    const contactListRow = nameDT.parentNode as HTMLElement;
    expect(contactListRow).toBeInTheDocument();
    expect(contactListRow).toHaveClass('govuk-summary-list__row');

    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveTextContent('Change name');
    expect(links[0]).toHaveClass('govuk-link');
    expect(links[0]).toHaveAttribute('href', '/update-name');
    const nameLinkDD = links[0].parentNode as HTMLElement;
    expect(nameLinkDD).toHaveClass('govuk-summary-list__actions');

    expect(links[1]).toHaveTextContent('Change contact details');
    expect(links[1]).toHaveClass('govuk-link');
    expect(links[1]).toHaveAttribute('href', '/update-contact');
    expect(links[1]).toHaveAttribute(
      'aria-label',
      'Change your phone number or email address'
    );
    const contactLinkDD = links[1].parentNode as HTMLElement;
    expect(contactLinkDD).toHaveClass('govuk-summary-list__actions');

    const wrapperDL = nameListRow.parentNode as HTMLElement;
    expect(wrapperDL).toBeInTheDocument();
    expect(wrapperDL).toHaveClass('govuk-summary-list');
  });
});
