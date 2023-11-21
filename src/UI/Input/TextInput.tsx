import React from 'react';
import { TextInputProps, TextInputWidthClass } from './InputCommon';

export function TextInput({
  identifier,
  label,
  multiQuestion,
  required,
  inputType,
  inputMode,
  labelClassExt,
  inputClassExt,
  autoComplete,
  hint,
  prefix,
  suffix,
  width,
  error,
  inErrorState,
  spellCheck,
  disabled,
  value,
  onChange,
  onBlur,
}: TextInputProps) {
  const containerAttr = {
    className: error
      ? 'govuk-form-group govuk-form-group--error'
      : 'govuk-form-group',
  };
  const inputAttr = {
    required,
    'aria-required': required,
    type: inputType || 'text',
    className: 'govuk-input',
    autoComplete,
    spellCheck,
    'aria-describedby': '',
    'aria-invalid': false,
    disabled,
    'aria-disabled': disabled,
    inputMode,
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

  return (
    <div {...containerAttr}>
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
      <div className="govuk-input__wrapper">
        {prefix && (
          <div className="govuk-input__prefix" aria-hidden="true">
            {prefix}
          </div>
        )}

        <input
          id={identifier}
          name={identifier}
          {...inputAttr}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {suffix && (
          <div className="govuk-input__suffix" aria-hidden="true">
            {suffix}
          </div>
        )}
      </div>
    </div>
  );
}
