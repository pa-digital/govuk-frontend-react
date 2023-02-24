import React from 'react';
import {
  render,
  screen,
  axe,
  toHaveNoViolations,
  act,
  fireEvent,
} from '../src/Helper/testHelper';
import { CardAction, SummaryCard } from '../src/UI/SummaryCard/SummaryCard';
import { SummaryListItemProps } from '../src/UI/SummaryList/SummaryList';

expect.extend(toHaveNoViolations);

const SummaryData: SummaryListItemProps[] = [
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

const ActionsData: CardAction[] = [
    {
        text: "Record Payment",
        extendedText: "from this tenant",
        action: "payment"
    },
    {
        text: "Evict Tenant",
        extendedText: "from this property",
        action: "evict"
    }
]

describe('Summary Card component is accessible', () => {
  it('must not fail any accessibility tests with empty list', async () => {
    const { container } = render(<SummaryCard title="Empty Card" summaryList={[]} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('must not fail any accessibility tests with populated list', async () => {
    const { container } = render(<SummaryCard title="Populated Card" summaryList={SummaryData} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('must not fail any accessibility tests with populated list and actions', async () => {
    const mockHandleCardAction = jest.fn();
    const { container } = render(<SummaryCard title="Populated Card" summaryList={SummaryData} cardActions={ActionsData} handleCardAction={mockHandleCardAction}  />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Summary Card without actions renders correctly', () => {
  it('renders correctly', async () => {
    render(<SummaryCard title="Populated Card" summaryList={SummaryData} />);

    //Summary Card Element Tests
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('govuk-summary-card__title');
    expect(title).toHaveTextContent("Populated Card");

    const titleWrapper = title.parentNode as HTMLElement;
    expect(titleWrapper).toBeInTheDocument();
    expect(titleWrapper).toHaveClass('govuk-summary-card__title-wrapper');

    const cardWrapper = titleWrapper.parentNode as HTMLElement;
    expect(cardWrapper).toBeInTheDocument();
    expect(cardWrapper).toHaveClass('govuk-summary-card');

    //Summary List Element Tests
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

describe('Summary Card with actions renders correctly', () => {
    it('renders correctly with an empty actions list', async () => {
        const mockHandleCardAction = jest.fn();
      render(<SummaryCard title="Populated Action Card" summaryList={SummaryData} cardActions={[]} handleCardAction={mockHandleCardAction} />);
  
      const title = screen.getByRole('heading', { level: 2 });
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass('govuk-summary-card__title');
      expect(title).toHaveTextContent("Populated Action Card");
  
      const titleWrapper = title.parentNode as HTMLElement;
      expect(titleWrapper).toBeInTheDocument();
      expect(titleWrapper).toHaveClass('govuk-summary-card__title-wrapper');
  
      const cardWrapper = titleWrapper.parentNode as HTMLElement;
      expect(cardWrapper).toBeInTheDocument();
      expect(cardWrapper).toHaveClass('govuk-summary-card');

      const actions = screen.queryByRole('list');
      expect(actions).not.toBeInTheDocument();

    });

    it('renders correctly with an populated actions list and no handler', async () => {
      render(<SummaryCard title="Populated Action Card" summaryList={SummaryData} cardActions={[]} />);
  
      const title = screen.getByRole('heading', { level: 2 });
      expect(title).toBeInTheDocument();
      expect(title).toHaveClass('govuk-summary-card__title');
      expect(title).toHaveTextContent("Populated Action Card");
  
      const titleWrapper = title.parentNode as HTMLElement;
      expect(titleWrapper).toBeInTheDocument();
      expect(titleWrapper).toHaveClass('govuk-summary-card__title-wrapper');
  
      const cardWrapper = titleWrapper.parentNode as HTMLElement;
      expect(cardWrapper).toBeInTheDocument();
      expect(cardWrapper).toHaveClass('govuk-summary-card');

            const actions = screen.queryByRole('list');
      expect(actions).not.toBeInTheDocument();

    });

    it('renders correctly with populated array of actions', async () => {
        const mockHandleCardAction = jest.fn();
      render(<SummaryCard title="Populated Action Card" summaryList={SummaryData} cardActions={ActionsData} handleCardAction={mockHandleCardAction} />);
  
      const actionContainer = screen.getByRole("list");
      expect(actionContainer).toBeInTheDocument();
      expect(actionContainer).toHaveClass('govuk-summary-card__actions');

      const actions = screen.getAllByRole("listitem");
      expect(actions).toHaveLength(2)

      const firstAction = actions[0];
      expect(firstAction).toBeInTheDocument();
      expect(firstAction).toHaveClass('govuk-summary-card__action');
      const firstActionElement = firstAction.firstChild as HTMLElement;
      expect(firstActionElement).toBeInTheDocument();
      expect(firstActionElement).toHaveClass("govuk-link");
      expect(firstActionElement).toHaveTextContent("Record Payment");
      const firstActionHiddenElement = screen.getByText("from this tenant");
      expect(firstActionHiddenElement).toBeInTheDocument();
      expect(firstActionHiddenElement).toHaveClass('govuk-visually-hidden');

      const secondAction = actions[1];
      expect(secondAction).toBeInTheDocument();
      expect(secondAction).toHaveClass('govuk-summary-card__action');
      const secondActionElement = secondAction.firstChild as HTMLElement;
      expect(secondActionElement).toBeInTheDocument();
      expect(secondActionElement).toHaveClass("govuk-link");
      expect(secondActionElement).toHaveTextContent("Evict Tenant");
      const secondActionHiddenElement = screen.getByText("from this property");
      expect(secondActionHiddenElement).toBeInTheDocument();
      expect(secondActionHiddenElement).toHaveClass('govuk-visually-hidden');

    });
});

describe('Summary Card with actions functions correctly', () => {
    it('functions correctly', async () => {
        const mockHandleCardAction = jest.fn();
      render(<SummaryCard title="Populated Action Card" summaryList={SummaryData} cardActions={ActionsData} handleCardAction={mockHandleCardAction} />);
   
      const firstAction = screen.getByText("Record Payment");
      expect(firstAction).toBeInTheDocument();
      act(() => {
        fireEvent.click(firstAction);
      });
      expect(mockHandleCardAction).toHaveBeenCalledTimes(1);
      expect(mockHandleCardAction).toHaveBeenCalledWith("payment");

      const secondAction = screen.getByText("Evict Tenant");
      expect(secondAction).toBeInTheDocument();
      act(() => {
        fireEvent.click(secondAction);
      });
      expect(mockHandleCardAction).toHaveBeenCalledTimes(2);
      expect(mockHandleCardAction).toHaveBeenCalledWith("evict");
    });
});