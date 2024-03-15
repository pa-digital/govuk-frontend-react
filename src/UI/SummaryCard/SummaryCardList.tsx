import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SummaryList } from '../SummaryList/SummaryList';
import { CardListAction, SummaryCardListProps } from './SummaryCardProps';

export function SummaryCardList({
  identifier,
  cards,
  handleAction,
}: SummaryCardListProps) {
  const mapCardAction = (index: number, action: string) => {
    const actionIdentifier: CardListAction = {
      identifier: identifier,
      index: index,
      action: action,
    };
    handleAction(actionIdentifier);
  };

  return (
    <>
      {cards.map((card, index) => {
        return (
          <div className="govuk-summary-card" key={uuidv4()}>
            <div className="govuk-summary-card__title-wrapper">
              <h2 className="govuk-summary-card__title">{card.title}</h2>
              {card.cardActions && card.cardActions.length > 0 && (
                <ul className="govuk-summary-card__actions">
                  {card.cardActions.map((action) => (
                    <li className="govuk-summary-card__action" key={uuidv4()}>
                      <div
                        className="govuk-link"
                        onClick={() => mapCardAction(index, action.action)}
                      >
                        {action.text}
                        <span className="govuk-visually-hidden">
                          {' '}
                          {action.extendedText}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="govuk-summary-card__content">
              <SummaryList list={card.summaryList} />
            </div>
          </div>
        );
      })}
    </>
  );
}
