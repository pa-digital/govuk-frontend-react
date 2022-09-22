import React from 'react';
import { TextAreaProps } from './InputCommon';

export function TextArea({
  identifier,
  label,
  multiQuestion,
  required,
  labelClassExt,
  inputClassExt,
  hint,
  ariaExtension,
  error,
  spellCheck,
  value,
  rows = 5,
  disabled,
  onChange,
  onBlur,
}: TextAreaProps) {
  const containerAttr = {
    className: error
      ? 'govuk-form-group govuk-form-group--error'
      : 'govuk-form-group',
  };
  const inputAttr = {
    required,
    'aria-required': required,
    type: 'text',
    className: inputClassExt
      ? `govuk-textarea ${inputClassExt}`
      : 'govuk-textarea',
    spellCheck,
    'aria-describedby': '',
    'aria-invalid': false,
    rows,
    disabled,
    'aria-disabled': disabled,
  };
  if (ariaExtension) {
    inputAttr['aria-describedby'] = `${ariaExtension} `;
  }
  if (error) {
    inputAttr['aria-describedby'] += `${identifier}-error `;
    inputAttr['aria-invalid'] = true;
  }
  if (hint) {
    inputAttr['aria-describedby'] += `${identifier}-hint `;
  }
  inputAttr['aria-describedby'] += `${identifier}-label`;

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
      <textarea
        id={identifier}
        name={identifier}
        {...inputAttr}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
}
