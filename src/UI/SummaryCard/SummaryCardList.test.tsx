import React from 'react';
import {
  render,
  axe,
  toHaveNoViolations,
  screen,
  act,
  fireEvent,
} from '../../Helper/testHelper';
import { SummaryCardList } from './SummaryCardList';
import { CardListAction, SummaryCardListCardProps } from './SummaryCardProps';

expect.extend(toHaveNoViolations);

const cardsNoActions: SummaryCardListCardProps[] = [
  {
    title: 'Lead tenant',
    summaryList: [
      {
        key: 'Age',
        value: '38',
        links: [
          {
            to: '/update-age',
            text: 'Change',
          },
        ],
      },
      {
        key: 'Nationality',
        value: 'UK national resident in UK',
        links: [
          {
            to: '/update-nationality',
            text: 'Change',
          },
        ],
      },
      {
        key: 'Working situation',
        value: 'Part time – less than 30 hours a week',
        links: [
          {
            to: '/update-working',
            text: 'Change',
          },
        ],
      },
    ],
  },
  {
    title: 'Person 2',
    summaryList: [
      {
        key: 'Details known',
        value: 'Yes',
        links: [
          {
            to: '/update-details-known',
            text: 'Change',
          },
        ],
      },
      {
        key: 'Relationship to lead tenant',
        value: 'Partner',
        links: [
          {
            to: '/update-relationship',
            text: 'Change',
          },
        ],
      },
      {
        key: 'Age',
        value: '42',
        links: [
          {
            to: '/update-age',
            text: 'Change',
          },
        ],
      },
      {
        key: 'Working situation',
        value: 'Unable to work because of long-term sickness or disability',
        links: [
          {
            to: '/update-working',
            text: 'Change',
          },
        ],
      },
    ],
  },
  {
    title: 'Person 3',
    summaryList: [
      {
        key: 'Details known',
        value: 'Yes',
        links: [
          {
            to: '/update-details-known',
            text: 'Change',
          },
        ],
      },
      {
        key: 'Relationship to lead tenant',
        value: 'Child',
        links: [
          {
            to: '/update-relationship',
            text: 'Change',
          },
        ],
      },
      {
        key: 'Age',
        value: '7',
        links: [
          {
            to: '/update-age',
            text: 'Change',
          },
        ],
      },
      {
        key: 'Working situation',
        value: 'Child under 16',
        links: [
          {
            to: '/update-working',
            text: 'Change',
          },
        ],
      },
    ],
  },
];

const cardsWithActions: SummaryCardListCardProps[] = [
  {
    title: 'University of Gloucestershire',
    summaryList: [
      {
        key: 'Course',
        value: (
          <>
            English (3DMD)
            <br />
            PGCE with QTS full time
          </>
        ),
      },
      {
        key: 'Location',
        value: (
          <>
            School name
            <br />
            Road, City, SW1 1AA
          </>
        ),
      },
    ],
    cardActions: [
      {
        text: 'Delete choice',
        extendedText:
          'of University of Gloucestershire (University of Gloucestershire)',
        action: 'delete',
      },
      {
        text: 'Withdraw',
        extendedText:
          'from University of Gloucestershire (University of Gloucestershire)',
        action: 'withdraw',
      },
    ],
  },
  {
    title: 'University of Bristol',
    summaryList: [
      {
        key: 'Course',
        value: (
          <>
            English (Q3X1)
            <br />
            PGCE with QTS full time
          </>
        ),
      },
      {
        key: 'Location',
        value: (
          <>
            School name
            <br />
            Road, City, SW2 1AA
          </>
        ),
      },
    ],
    cardActions: [
      {
        text: 'Delete choice',
        extendedText: 'of University of Bristol (University of Bristol)',
        action: 'delete',
      },
      {
        text: 'Withdraw',
        extendedText: 'from University of Bristol (University of Bristol)',
        action: 'withdraw',
      },
    ],
  },
];

describe('Summary Card List component is accessible', () => {
  it('must not fail any accessibility tests with empty list', async () => {
    const mockhandleAction = jest.fn();
    const { container } = render(
      <SummaryCardList
        identifier="empty"
        cards={[]}
        handleAction={mockhandleAction}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('must not fail any accessibility tests with a populated list', async () => {
    const mockhandleAction = jest.fn();
    const { container } = render(
      <SummaryCardList
        identifier="empty"
        cards={cardsNoActions}
        handleAction={mockhandleAction}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('must not fail any accessibility tests with a populated list with actions', async () => {
    const mockhandleAction = jest.fn();
    const { container } = render(
      <SummaryCardList
        identifier="empty"
        cards={cardsWithActions}
        handleAction={mockhandleAction}
      />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Summary Card List component renders correctly', () => {
  it('renders correctly with a populated list with no actions', async () => {
    const mockhandleAction = jest.fn();
    render(
      <SummaryCardList
        identifier="empty"
        cards={cardsNoActions}
        handleAction={mockhandleAction}
      />
    );

    const titles = screen.getAllByRole('heading', { level: 2 });
    expect(titles).toHaveLength(3);

    const heading1 = titles[0];
    expect(heading1).toHaveClass('govuk-summary-card__title');
    expect(heading1).toHaveTextContent('Lead tenant');
    const header1Wrapper = heading1.parentNode as HTMLElement;
    expect(header1Wrapper).toBeInTheDocument();
    expect(header1Wrapper).toHaveClass('govuk-summary-card__title-wrapper');
    const card1Wrapper = header1Wrapper.parentNode as HTMLElement;
    expect(card1Wrapper).toBeInTheDocument();
    expect(card1Wrapper).toHaveClass('govuk-summary-card');

    const heading2 = titles[1];
    expect(heading2).toHaveClass('govuk-summary-card__title');
    expect(heading2).toHaveTextContent('Person 2');
    const header2Wrapper = heading2.parentNode as HTMLElement;
    expect(header2Wrapper).toBeInTheDocument();
    expect(header2Wrapper).toHaveClass('govuk-summary-card__title-wrapper');
    const card2Wrapper = header2Wrapper.parentNode as HTMLElement;
    expect(card2Wrapper).toBeInTheDocument();
    expect(card2Wrapper).toHaveClass('govuk-summary-card');

    const heading3 = titles[2];
    expect(heading3).toHaveClass('govuk-summary-card__title');
    expect(heading3).toHaveTextContent('Person 3');
    const header3Wrapper = heading3.parentNode as HTMLElement;
    expect(header3Wrapper).toBeInTheDocument();
    expect(header3Wrapper).toHaveClass('govuk-summary-card__title-wrapper');
    const card3Wrapper = header3Wrapper.parentNode as HTMLElement;
    expect(card3Wrapper).toBeInTheDocument();
    expect(card3Wrapper).toHaveClass('govuk-summary-card');
  });
  it('renders correctly with a populated list with card actions', async () => {
    const mockhandleAction = jest.fn();
    render(
      <SummaryCardList
        identifier="actions"
        cards={cardsWithActions}
        handleAction={mockhandleAction}
      />
    );
    const titles = screen.getAllByRole('heading', { level: 2 });
    expect(titles).toHaveLength(2);

    const actionList1 = titles[0].nextSibling as HTMLUListElement;
    expect(actionList1).toBeInTheDocument();
    expect(actionList1).toHaveClass('govuk-summary-card__actions');
    const actionList1Items = actionList1.querySelectorAll('li');
    expect(actionList1Items).toHaveLength(2);

    expect(actionList1Items[0]).toHaveClass('govuk-summary-card__action');
    const actionList1Action1 = actionList1Items[0].childNodes[0] as HTMLElement;
    expect(actionList1Action1).toBeInTheDocument();
    expect(actionList1Action1).toHaveClass('govuk-link');
    expect(actionList1Action1).toHaveTextContent(
      'Delete choice of University of Gloucestershire (University of Gloucestershire)'
    );
    const actionList1Action1ExtendedText = actionList1Action1.querySelector(
      'span'
    ) as HTMLSpanElement;
    expect(actionList1Action1ExtendedText).toBeInTheDocument();
    expect(actionList1Action1ExtendedText).toHaveClass('govuk-visually-hidden');
    expect(actionList1Action1ExtendedText).toHaveTextContent(
      'of University of Gloucestershire (University of Gloucestershire)'
    );

    const actionList1Action2 = actionList1Items[1].childNodes[0] as HTMLElement;
    expect(actionList1Action2).toBeInTheDocument();
    expect(actionList1Action2).toHaveClass('govuk-link');
    expect(actionList1Action2).toHaveTextContent(
      'Withdraw from University of Gloucestershire (University of Gloucestershire)'
    );
    const actionList1Action2ExtendedText = actionList1Action2.querySelector(
      'span'
    ) as HTMLSpanElement;
    expect(actionList1Action2ExtendedText).toBeInTheDocument();
    expect(actionList1Action2ExtendedText).toHaveClass('govuk-visually-hidden');
    expect(actionList1Action2ExtendedText).toHaveTextContent(
      'from University of Gloucestershire (University of Gloucestershire)'
    );

    const actionList2 = titles[1].nextSibling as HTMLUListElement;
    expect(actionList2).toBeInTheDocument();
    expect(actionList2).toHaveClass('govuk-summary-card__actions');
    const actionList2Items = actionList2.querySelectorAll('li');
    expect(actionList2Items).toHaveLength(2);

    expect(actionList2Items[0]).toHaveClass('govuk-summary-card__action');
    const actionList2Action1 = actionList2Items[0].childNodes[0] as HTMLElement;
    expect(actionList2Action1).toBeInTheDocument();
    expect(actionList2Action1).toHaveClass('govuk-link');
    expect(actionList2Action1).toHaveTextContent(
      'Delete choice of University of Bristol (University of Bristol)'
    );

    const actionList2Action1ExtendedText = actionList2Action1.querySelector(
      'span'
    ) as HTMLSpanElement;
    expect(actionList2Action1ExtendedText).toBeInTheDocument();
    expect(actionList2Action1ExtendedText).toHaveClass('govuk-visually-hidden');
    expect(actionList2Action1ExtendedText).toHaveTextContent(
      'of University of Bristol (University of Bristol)'
    );

    const actionList2Action2 = actionList2Items[1].childNodes[0] as HTMLElement;
    expect(actionList2Action2).toBeInTheDocument();
    expect(actionList2Action2).toHaveClass('govuk-link');
    expect(actionList2Action2).toHaveTextContent(
      'Withdraw from University of Bristol (University of Bristol)'
    );

    const actionList2Action2ExtendedText = actionList2Action2.querySelector(
      'span'
    ) as HTMLSpanElement;
    expect(actionList2Action2ExtendedText).toBeInTheDocument();
    expect(actionList2Action2ExtendedText).toHaveClass('govuk-visually-hidden');
    expect(actionList2Action2ExtendedText).toHaveTextContent(
      'from University of Bristol (University of Bristol)'
    );
  });
});

describe('Summary Card List component functions correctly', () => {
  it('fires the correct action when a card action is clicked', async () => {
    const mockhandleAction = jest.fn();
    const { container } = render(
      <SummaryCardList
        identifier="action-clicks"
        cards={cardsWithActions}
        handleAction={mockhandleAction}
      />
    );
    const actionLinks = container.querySelectorAll('.govuk-link');
    expect(actionLinks).toHaveLength(4);

    act(() => {
      fireEvent.click(actionLinks[0]);
    });

    const action1EventData: CardListAction = {
      identifier: 'action-clicks',
      index: 0,
      action: 'delete',
    };
    expect(mockhandleAction).toHaveBeenCalledTimes(1);
    expect(mockhandleAction).toHaveBeenCalledWith(action1EventData);

    act(() => {
      fireEvent.click(actionLinks[1]);
    });

    const action2EventData: CardListAction = {
      identifier: 'action-clicks',
      index: 0,
      action: 'withdraw',
    };
    expect(mockhandleAction).toHaveBeenCalledTimes(2);
    expect(mockhandleAction).toHaveBeenCalledWith(action2EventData);

    act(() => {
      fireEvent.click(actionLinks[2]);
    });

    const action3EventData: CardListAction = {
      identifier: 'action-clicks',
      index: 1,
      action: 'delete',
    };
    expect(mockhandleAction).toHaveBeenCalledTimes(3);
    expect(mockhandleAction).toHaveBeenCalledWith(action3EventData);

    act(() => {
      fireEvent.click(actionLinks[3]);
    });

    const action4EventData: CardListAction = {
      identifier: 'action-clicks',
      index: 1,
      action: 'withdraw',
    };
    expect(mockhandleAction).toHaveBeenCalledTimes(4);
    expect(mockhandleAction).toHaveBeenCalledWith(action4EventData);
  });
});
