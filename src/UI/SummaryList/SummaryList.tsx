import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export interface SummaryListItemProps {
  key: string;
  value: React.ReactNode;
  link?: string;
  assistiveLinkText?: string;
}

export interface SummaryListProps {
  list: SummaryListItemProps[];
}

export function SummaryList({ list }: SummaryListProps) {
  return (
    <>
      {list?.length > 0 && (
        <dl className="govuk-summary-list">
          {list.map((item) => {
            const linkAttr = {
              'aria-label': item.assistiveLinkText,
              className: 'govuk-link',
            };
            return (
              <div className="govuk-summary-list__row" key={uuidv4()}>
                <dt className="govuk-summary-list__key">{item.key}</dt>
                <dd className="govuk-summary-list__value">{item.value}</dd>
                {item.link && (
                  <dd className="govuk-summary-list__actions">
                    <Link to={item.link} {...linkAttr}>
                      Change
                      <span className="govuk-visually-hidden">
                        {' '}
                        {item.key.toLowerCase()}
                      </span>
                    </Link>
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      )}
    </>
  );
}
