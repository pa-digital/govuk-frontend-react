import React from 'react';
import { NavLinkProps } from '../NavLink/NavLink';

export function ExitPage({
  to,
  text,
  assistiveText,
}: NavLinkProps & React.HTMLProps<HTMLLinkElement>) {
  const navAttr = {
    'aria-label': assistiveText,
  };
  return (
    <div className="govuk-exit-this-page" data-module="govuk-exit-this-page">
      <a
        href={to}
        role="button"
        draggable="false"
        className="govuk-button govuk-button--warning govuk-exit-this-page__button govuk-js-exit-this-page-button"
        data-module="govuk-button"
        rel="nofollow noreferrer"
        {...navAttr}
      >
        <span className="govuk-visually-hidden">Emergency</span> {text}
      </a>
    </div>
  );
}
