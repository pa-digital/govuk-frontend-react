import React from 'react';
import { Link } from 'react-router-dom';
import { CoreButtonProps, GetVariantClass } from './ButtonCommon';

export interface CTAButtonProps extends CoreButtonProps {
  to: string;
  assistiveText?: string;
}

interface DisabledCTAButtonProps extends CTAButtonProps {
  attrs: any;
}

function DisabledLink({
  to,
  variant,
  assistiveText,
  attrs,
  children,
}: DisabledCTAButtonProps) {
  const disabledAttr = {
    'aria-label': assistiveText,
    ...attrs,
  };
  return (
    <Link
      to={to}
      className={`govuk-button${GetVariantClass(
        variant
      )} govuk-button--start disabled-link`}
      aria-disabled
      {...disabledAttr}
    >
      {children}
      <svg
        className="govuk-button__start-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="17.5"
        height="19"
        viewBox="0 0 33 40"
        aria-hidden="true"
        focusable="false"
      >
        <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
      </svg>
    </Link>
  );
}

export function CTAButton({
  to,
  variant,
  assistiveText,
  disabled,
  children,
}: CTAButtonProps) {
  const ctaProps = {
    'aria-label': assistiveText,
    role: 'button',
    draggable: false,
    'data-module': 'govuk-button',
  };
  return (
    <>
      {disabled ? (
        <DisabledLink to={to} variant={variant} attrs={ctaProps}>
          {children}
        </DisabledLink>
      ) : (
        <Link
          to={to}
          className={`govuk-button${GetVariantClass(
            variant
          )} govuk-button--start`}
          {...ctaProps}
        >
          {children}
          <svg
            className="govuk-button__start-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="17.5"
            height="19"
            viewBox="0 0 33 40"
            aria-hidden="true"
            focusable="false"
          >
            <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
          </svg>
        </Link>
      )}
    </>
  );
}
