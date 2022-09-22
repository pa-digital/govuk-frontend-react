import React from 'react';
import { Link } from 'react-router-dom';

export interface BackLinkProps {
  to: string;
}
export function BackLink({ to }: BackLinkProps) {
  return (
    <Link to={to} className="govuk-back-link">
      Back
    </Link>
  );
}
