import React from 'react';

export interface TagProps {
  state?:
    | 'grey'
    | 'green'
    | 'turquoise'
    | 'blue'
    | 'purple'
    | 'pink'
    | 'red'
    | 'orange'
    | 'yellow';
  children?: React.ReactNode;
}

export function Tag({ state, children }: TagProps) {
  const tagAttr = {
    className: state ? `govuk-tag govuk-tag--${state}` : 'govuk-tag',
  };
  return <strong {...tagAttr}>{children}</strong>;
}
