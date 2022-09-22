import React from 'react';
import { CoreButtonProps, GetVariantClass } from './ButtonCommon';

export interface ButtonProps extends CoreButtonProps {
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  variant = 'primary',
  disabled,
  type = 'button',
  onClick,
  onKeyDown,
  children,
}: ButtonProps) {
  const buttonAttr = {
    disabled,
    'aria-disabled': disabled,
    type,
  };
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={`govuk-button${GetVariantClass(variant)}`}
      data-module="govuk-button"
      data-prevent-double-click
      onClick={onClick}
      onKeyDown={onKeyDown}
      {...buttonAttr}
    >
      {children}
    </button>
  );
}
