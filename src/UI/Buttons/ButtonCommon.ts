import { MouseEvent, KeyboardEvent } from 'react';

export interface CoreButtonProps {
  variant?: 'primary' | 'secondary' | 'warning' | 'inverse';
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
  children: string;
}

export const GetVariantClass = (variant: string | undefined): string => {
  switch (variant) {
    case 'secondary':
      return ' govuk-button--secondary';
    case 'warning':
      return ' govuk-button--warning';
    case 'inverse':
      return ' govuk-button--inverse';
    default:
      return '';
  }
};
