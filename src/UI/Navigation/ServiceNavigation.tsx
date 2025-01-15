import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { HeaderNavigationProps } from './NavigationProps';
import { useWindowResize } from '../../Helper/useWindowResize';

export function ServiceNavigation({
  links,
  identifier,
  serviceNameDetails,
}: HeaderNavigationProps) {
  const location = useLocation();
  const size = useWindowResize();
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const updateMenu = useCallback(() => {
    if (size.width > 750) {
      setShowMenuButton(false);
    } else {
      setShowMenuButton(true);
    }
  }, [size.width]);

  const toggleMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  useEffect(() => {}, [mobileMenuVisible, showMenuButton]);

  useEffect(() => {
    updateMenu();
  }, [size.width]);

  const toggleButtonAttribute = () => {
    if (showMenuButton) {
      return {
        'aria-expanded': mobileMenuVisible,
      };
    }
    return {
      hidden: true,
    };
  };

  const toggleMenuAttribute = () => {
    if (mobileMenuVisible || size.width > 750) {
      return {};
    }
    return {
      hidden: true,
    };
  };
  return (
    <>
      {links.length > 0 && (
        <section
          className="govuk-service-navigation"
          data-module="govuk-service-navigation"
          aria-label="Service information"
        >
          <div className="govuk-width-container">
            <div className="govuk-service-navigation__container">
              {serviceNameDetails && (
                <span className="govuk-service-navigation__service-name">
                  <Link
                    to={serviceNameDetails.to}
                    className="govuk-service-navigation__link"
                    aria-label={
                      serviceNameDetails.assistiveText
                        ? serviceNameDetails.assistiveText
                        : undefined
                    }
                  >
                    {serviceNameDetails.text}
                  </Link>
                </span>
              )}
              <nav
                aria-label="Menu"
                className="govuk-service-navigation__wrapper"
                id={identifier}
                {...toggleMenuAttribute()}
              >
                <button
                  type="button"
                  className="govuk-service-navigation__toggle govuk-js-service-navigation-toggle"
                  aria-controls={`${identifier}-navigation`}
                  aria-label="Show or hide menu"
                  {...toggleButtonAttribute()}
                  onClick={() => toggleMenu()}
                >
                  Menu
                </button>
                <ul
                  className="govuk-service-navigation__list"
                  id={`${identifier}-navigation`}
                >
                  {links.map((link) => {
                    const isActive = link.to === location.pathname;

                    const liProps = {
                      className: isActive
                        ? 'govuk-service-navigation__item govuk-service-navigation__item--active'
                        : 'govuk-service-navigation__item',
                    };

                    const linkProps = {
                      'aria-label': link.assistiveText,
                      className: 'govuk-service-navigation__link',
                      ...(isActive && { 'aria-current': true }),
                    };

                    return (
                      <li key={uuidv4()} {...liProps}>
                        <Link to={link.to} {...linkProps}>
                          {link.text}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
