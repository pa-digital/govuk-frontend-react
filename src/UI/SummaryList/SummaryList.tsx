import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

interface ValueField {
  appliedClassName: string;
  data: React.ReactNode;
}

export interface SummaryListItemLink {
  to: string;
  text: string;
  assistiveLinkText?: string;
}

export interface SummaryListItemProps {
  key: string;
  value: React.ReactNode | SummaryListItemLink;
  links?: SummaryListItemLink[];
}

export interface SummaryListProps {
  list: SummaryListItemProps[];
  hideBorders?: boolean;
}

export function SummaryList({ hideBorders, list }: SummaryListProps) {
  let classAttrName = 'govuk-summary-list';
  if (hideBorders) {
    classAttrName = classAttrName + ' govuk-summary-list--no-border';
  }
  const listClassAttr = {
    className: classAttrName,
  };

  const renderValueData = (
    value: React.ReactNode | SummaryListItemLink,
    anyActions: boolean,
    actionCount: number
  ): ValueField => {
    let retVal: ValueField = {
      appliedClassName:
        anyActions && actionCount === 0
          ? 'govuk-summary-list__row govuk-summary-list__row--no-actions'
          : 'govuk-summary-list__row ',
      data: <></>,
    };
    if (typeof value === 'string') {
      retVal.data = <>{value}</>;
    } else if (React.isValidElement(value)) {
      retVal.data = <>{value}</>;
    } else {
      const linkValue = value as SummaryListItemLink;
      retVal = {
        appliedClassName:
          'govuk-summary-list__row govuk-summary-list__row--no-actions',
        data: (
          <Link
            to={linkValue.to}
            className="govuk-link"
            aria-label={linkValue.assistiveLinkText || undefined}
          >
            {linkValue.text}
          </Link>
        ),
      };
    }
    return retVal;
  };

  return (
    <>
      {list && list.length > 0 && (
        <dl {...listClassAttr}>
          {list.map((item) => {
            const anyActions = list.some(
              (item) => Array.isArray(item.links) && item.links.length > 1
            );
            const valueFieldData = renderValueData(
              item.value,
              anyActions,
              item.links?.length || 0
            );
            return (
              <div className={valueFieldData.appliedClassName} key={uuidv4()}>
                <dt className="govuk-summary-list__key">{item.key}</dt>
                <dd className="govuk-summary-list__value">
                  {valueFieldData.data}
                </dd>
                {item.links && item.links.length === 1 && (
                  <dd className="govuk-summary-list__actions">
                    <Link
                      to={item.links[0].to}
                      className="govuk-link"
                      aria-label={item.links[0].assistiveLinkText || undefined}
                    >
                      {item.links[0].text}
                      <span className="govuk-visually-hidden">
                        {' '}
                        {item.key.toLowerCase()}
                      </span>
                    </Link>
                  </dd>
                )}
                {item.links && item.links.length > 1 && (
                  <dd className="govuk-summary-list__actions" key={uuidv4()}>
                    <ul className="govuk-summary-list__actions-list">
                      {item.links.map((link) => (
                        <li
                          className="govuk-summary-list__actions-list-item"
                          key={uuidv4()}
                        >
                          <Link
                            to={link.to}
                            className="govuk-link"
                            aria-label={link.assistiveLinkText || undefined}
                          >
                            {link.text}
                            <span className="govuk-visually-hidden">
                              {' '}
                              {item.key.toLowerCase()}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
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
