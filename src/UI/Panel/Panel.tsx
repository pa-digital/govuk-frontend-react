import React from 'react';

export interface PanelProps {
  heading: string;
  children: any;
}
export function Panel({ heading, children }: PanelProps) {
  return (
    <div className="govuk-panel govuk-panel--confirmation">
      <h1 className="govuk-panel__title">{heading}</h1>
      <div className="govuk-panel__body">{children}</div>
    </div>
  );
}
