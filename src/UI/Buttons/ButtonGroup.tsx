import React from 'react';

export interface ButtonGroupProps {
  children: any;
}

export function ButtonGroup({ children }: ButtonGroupProps) {
  return <div className="govuk-button-group">{children}</div>;
}
