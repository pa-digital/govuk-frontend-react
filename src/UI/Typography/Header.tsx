import React from 'react';

export interface HeaderProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: any;
}
export const Header = ({ as = 'h1', children }: HeaderProps) => {
  const getElement = () => {
    switch (as) {
      case 'h2':
        return <h2 className="govuk-heading-l">{children}</h2>;
      case 'h3':
        return <h3 className="govuk-heading-m">{children}</h3>;
      case 'h4':
        return <h4 className="govuk-heading-s">{children}</h4>;
      default:
        return <h1 className="govuk-heading-xl">{children}</h1>;
    }
  };

  return getElement();
};
