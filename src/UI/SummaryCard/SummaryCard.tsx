import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { SummaryList, SummaryListItemProps } from "../SummaryList/SummaryList";

export interface CardAction {
    text: string,
    extendedText: string;
    action: string
}

export interface SummaryCardProps {
    title: string,
    summaryList: SummaryListItemProps[],
    cardActions?: CardAction[],
    handleCardAction?: (action:string) => void;
}

export function SummaryCard({title, summaryList, cardActions, handleCardAction}: SummaryCardProps) {
   

    return (<div className="govuk-summary-card">
        <div className="govuk-summary-card__title-wrapper">
            <h2 className="govuk-summary-card__title">{title}</h2>
            {handleCardAction && cardActions && cardActions.length > 0 && 
                <ul className="govuk-summary-card__actions">
                    {cardActions.map((action) => (
                        <li className="govuk-summary-card__action" key={uuidv4()}> 
                            <div className="govuk-link" onClick={() => handleCardAction(action.action)}>
                                {action.text}<span className="govuk-visually-hidden"> {action.extendedText}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            }
        </div>
        <div className="govuk-summary-card__content">
            <SummaryList list={summaryList} />
        </div>
    </div>)
};

