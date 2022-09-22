import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { NavLink, NavLinkProps } from '../NavLink/NavLink';

export interface NotificationParagraphProps {
  text: string;
  link: NavLinkProps;
}
export interface NotificationProps {
  identifier: string;
  heading: string;
  content: NotificationParagraphProps[];
}

export function Notification({
  identifier,
  heading,
  content,
}: NotificationProps) {
  return (
    <div
      className="govuk-notification-banner"
      role="region"
      aria-labelledby={`${identifier}-title`}
      data-module="govuk-notification-banner"
    >
      <div className="govuk-notification-banner__header">
        <h2
          className="govuk-notification-banner__title"
          id={`${identifier}-title`}
        >
          {heading}
        </h2>
      </div>
      <div className="govuk-notification-banner__content">
        {content.map((element) => (
          <p className="govuk-notification-banner__heading" key={uuidv4()}>
            {element.text}{' '}
            {element.link && (
              <NavLink
                to={element.link.to}
                text={element.link.text}
                assistiveText={element.link.assistiveText}
                external={element.link.external}
                overrideClass="govuk-notification-banner__link"
              />
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
