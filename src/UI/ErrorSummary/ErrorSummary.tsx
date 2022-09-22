import React from 'react';
import { FieldError } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

export interface ErrorSummaryProps {
  identifier: string;
  errors: Record<string, unknown>;
}

export function ErrorSummary({ identifier, errors }: ErrorSummaryProps) {
  return (
    <>
      {errors && Object.keys(errors).length > 0 && (
        <div
          className="govuk-error-summary"
          aria-labelledby={`${identifier}-title`}
          role="alert"
          data-module="govuk-error-summary"
        >
          <h2 className="govuk-error-summary__title" id={`${identifier}-title`}>
            There is a problem
          </h2>
          <div className="govuk-error-summary__body">
            <ul className="govuk-list govuk-error-summary__list">
              {Object.entries(errors).map((value) => {
                const fieldName = value[0] as string;
                const error = value[1] as FieldError;
                return (
                  <li key={uuidv4()}>
                    <a href={`#${fieldName}`}>{error.message}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default ErrorSummary;
