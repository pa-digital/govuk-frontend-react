import React from 'react';

export interface InsetProps {
  children: any;
}

export function Inset({ children }: InsetProps) {
  return <div className="govuk-inset-text">{children}</div>;
}
