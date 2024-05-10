import React, { useState } from 'react';
import {
  PasswordInputProps,
  PasswordState,
  TextInputWidthClass,
  GetInputTypeFromPasswordState,
  GetButtonTextFromPasswordState,
  GetAriaTextFromPasswordState,
} from './InputCommon';

export function PasswordInput({
  identifier,
  label,
  hint,
  multiQuestion,
  required,
  labelClassExt,
  inputClassExt,
  error,
  value,
  disabled,
  width,
  inErrorState,
  onChange,
  onBlur,
}: PasswordInputProps) {
  const containerAttr = {
    className: error
      ? 'govuk-form-group govuk-form-group--error govuk-password-input'
      : 'govuk-form-group govuk-password-input',
  };

  const [inputState, setInputState] = useState(PasswordState.Password);

  const inputAttr = {
    required,
    'aria-required': required,
    type: GetInputTypeFromPasswordState.get(inputState),
    className:
      'govuk-input govuk-password-input__input govuk-js-password-input-input',
    'aria-describedby': '',
    'aria-invalid': false,
    disabled,
    'aria-disabled': disabled,
  };
  if (width) {
    inputAttr.className += ` ${TextInputWidthClass.get(width)}`;
  }
  if (inputClassExt) {
    inputAttr.className += ` ${inputClassExt}`;
  }
  if (error) {
    inputAttr['aria-describedby'] = `${identifier}-error `;
  }
  if (hint) {
    inputAttr['aria-describedby'] += `${identifier}-hint `;
  }
  inputAttr['aria-describedby'] += `${identifier}-label`;

  if (error || inErrorState) {
    inputAttr.className += ' govuk-input--error';
    inputAttr['aria-invalid'] = true;
  }

  let assignedClass = 'govuk-label govuk-label--l';
  if (labelClassExt) {
    if (multiQuestion) {
      assignedClass = `govuk-label ${labelClassExt}`;
    } else {
      assignedClass = `govuk-label govuk-label--l ${labelClassExt}`;
    }
  } else if (multiQuestion) {
    assignedClass = 'govuk-label';
  }
  const labelAttr = {
    className: assignedClass,
    id: `${identifier}-label`,
  };

  const handleShowPasswordClick = () => {
    if (inputState === PasswordState.Password) {
      setInputState(PasswordState.Text);
    } else {
      setInputState(PasswordState.Password);
    }
  };

  return (
    <div {...containerAttr} data-module="govuk-password-input">
      {multiQuestion ? (
        <label htmlFor={identifier} {...labelAttr}>
          {label}
        </label>
      ) : (
        <h1 className="govuk-label-wrapper">
          <label htmlFor={identifier} {...labelAttr}>
            {label}
          </label>
        </h1>
      )}

      {hint && (
        <div id={`${identifier}-hint`} className="govuk-hint">
          {hint}
        </div>
      )}

      {error && (
        <p id={`${identifier}-error`} className="govuk-error-message">
          <span className="govuk-visually-hidden">Error:</span> {error}
        </p>
      )}

      <div className="govuk-input__wrapper govuk-password-input__wrapper">
        <input
          id={identifier}
          name={identifier}
          {...inputAttr}
          value={value}
          spellCheck="false"
          autoComplete="current-password"
          autoCapitalize="none"
          onChange={onChange}
          onBlur={onBlur}
        />
        <div
          className="govuk-password-input__sr-status govuk-visually-hidden"
          aria-live="polite"
        >
          {GetAriaTextFromPasswordState.get(inputState)}
        </div>
        <button
          type="button"
          className="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle"
          data-module="govuk-button"
          aria-controls={identifier}
          aria-label={`${GetButtonTextFromPasswordState.get(inputState)} password`}
          onClick={() => handleShowPasswordClick()}
          onKeyDown={() => handleShowPasswordClick()}
        >
          {GetButtonTextFromPasswordState.get(inputState)}
        </button>
      </div>
    </div>
  );
}
