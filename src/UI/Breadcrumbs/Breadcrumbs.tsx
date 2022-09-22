import React from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export interface BreadcrumbLink {
  to: string;
  text: string;
  assistiveText?: string;
}

export interface BreadcrumbsProps {
  collapseOnMobile?: boolean;
  links: BreadcrumbLink[];
}

export function Breadcrumbs({ collapseOnMobile, links }: BreadcrumbsProps) {
  const collapseOnMobileClass = collapseOnMobile
    ? 'govuk-breadcrumbs govuk-breadcrumbs--collapse-on-mobile'
    : 'govuk-breadcrumbs';
  return (
    <div className={collapseOnMobileClass}>
      <ol className="govuk-breadcrumbs__list">
        {links.map((link) => {
          const assistiveProps = {
            'aria-label': link.assistiveText,
          };
          return (
            <li className="govuk-breadcrumbs__list-item" key={uuidv4()}>
              <Link
                to={link.to}
                className="govuk-breadcrumbs__link"
                {...assistiveProps}
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
