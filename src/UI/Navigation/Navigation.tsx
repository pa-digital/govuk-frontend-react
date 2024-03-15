import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useWindowResize } from '../../Helper/useWindowResize';
import { HeaderNavigationProps } from './NavigationProps';

export function Navigation({
  identifier,
  links,
  serviceNameDetails,
}: HeaderNavigationProps) {
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
    <header className="govuk-header" role="banner" data-module="govuk-header">
      <div className="govuk-header__container govuk-width-container">
        <div className="govuk-header__content">
          {serviceNameDetails && (
            <Link
              to={serviceNameDetails.to}
              aria-label={serviceNameDetails.assistiveText || undefined}
              className="govuk-header__link govuk-header__service-name"
            >
              {serviceNameDetails.text}
            </Link>
          )}
          {links.length > 0 && (
            <nav aria-label="Menu" className="govuk-header__navigation">
              <button
                type="button"
                aria-controls={identifier}
                aria-label="Show or hide menu"
                className="govuk-header__menu-button govuk-js-header-toggle"
                {...toggleButtonAttribute()}
                onClick={() => toggleMenu()}
              >
                Menu
              </button>

              <ul
                id={identifier}
                className="govuk-header__navigation-list"
                {...toggleMenuAttribute()}
              >
                {links.map((link) => {
                  const assistiveProps = {
                    'aria-label': link.assistiveText,
                  };
                  return (
                    <li
                      className="govuk-header__navigation-item"
                      key={uuidv4()}
                    >
                      <Link
                        to={link.to}
                        className="govuk-header__link"
                        {...assistiveProps}
                      >
                        {link.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
