import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useWindowResize } from '../../Helper/useWindowResize';
import { NavigationProps } from './NavigationProps';
import './detachedNavigation.scss';

export function DetachedNavigation({ links }: NavigationProps) {
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
        <nav
          id="navigation"
          className="app-navigation js-app-navigation govuk-clearfix"
          role="navigation"
          aria-labelledby="navigation-heading"
          {...toggleMenuAttribute()}
        >
          <h2 className="govuk-visually-hidden" id="navigation-heading">
            Menu
          </h2>
          <button
            type="button"
            aria-controls="navigation"
            aria-label="Show or hide menu"
            className="govuk-header__menu-button govuk-js-header-toggle"
            {...toggleButtonAttribute()}
            onClick={() => toggleMenu()}
          >
            Menu
          </button>
          <ul className="app-navigation__list app-width-container">
            {links.map((link) => {
              const assistiveProps = {
                'aria-label': link.assistiveText,
              };
              return (
                <li className="app-navigation__list-item" key={uuidv4()}>
                  <Link
                    to={link.to}
                    className="govuk-link govuk-link--no-visited-state govuk-link--no-underline app-navigation__link js-app-navigation__link"
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
    </>
  );
}
