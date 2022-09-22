import React from 'react';

export interface ContentProps {
  as?: 'p' | 'pre';
  children: any;
}
export const Content = ({ as = 'p', children }: ContentProps) => {
  const getElement = () => {
    switch (as) {
      case 'pre':
        return <pre>{children}</pre>;
      default:
        return <p className="govuk-body">{children}</p>;
    }
  };

  return getElement();
};
