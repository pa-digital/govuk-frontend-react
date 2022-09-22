import React from 'react';
import { Link } from 'react-router-dom';

export function SkipLink() {
  return (
    <Link
      to="#content"
      className="govuk-skip-link"
      data-module="govuk-skip-link"
    >
      Skip to main content
    </Link>
  );
}
