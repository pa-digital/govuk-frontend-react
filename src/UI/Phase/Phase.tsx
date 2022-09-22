import React from 'react';

export interface PhaseProps {
  phase: string;
  children?: any;
}

export function Phase({ phase, children }: PhaseProps) {
  return (
    <div className="govuk-phase-banner">
      <p className="govuk-phase-banner__content">
        <strong className="govuk-tag govuk-phase-banner__content__tag">
          {phase}
        </strong>
        {children && (
          <span className="govuk-phase-banner__text">{children}</span>
        )}
      </p>
    </div>
  );
}
