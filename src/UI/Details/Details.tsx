import React from 'react';

export interface DetailsProps {
  title: string;
  children: any;
}

export function Details({ title, children }: DetailsProps) {
  return (
    <details className="govuk-details" data-module="govuk-details">
      <summary className="govuk-details__summary">
        <span className="govuk-details__summary-text">{title}</span>
      </summary>
      <div className="govuk-details__text">{children}</div>
    </details>
  );
}
