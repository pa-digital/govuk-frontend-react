import React, { ChangeEvent, FocusEvent, useEffect, useState } from 'react';

export interface SelectDataProps {
  text: string;
  value: string;
}

export interface SelectProps {
  identifier: string;
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  options: SelectDataProps[];
  value?: string;
  onValueChange?: (value: ChangeEvent<HTMLSelectElement>) => void;
  onValueBlur?: (value: FocusEvent<HTMLSelectElement>) => void;
}

export function Select({
  identifier,
  label,
  hint,
  required,
  options,
  value,
  error,
  onValueChange,
  onValueBlur,
}: SelectProps) {
  const [selectValue, setSelectValue] = useState(value);
  const containerAttr = {
    className: error
      ? 'govuk-form-group govuk-form-group--error'
      : 'govuk-form-group',
  };
  const selectAttr = {
    required,
    'aria-required': required,
    'aria-describedby': '',
    className: 'govuk-select',
    'aria-invalid': false,
  };
  if (error) {
    selectAttr['aria-describedby'] = `${identifier}-error `;
    selectAttr.className += ' govuk-input--error';
    selectAttr['aria-invalid'] = true;
  }
  if (hint) {
    selectAttr['aria-describedby'] += `${identifier}-hint `;
  }
  selectAttr['aria-describedby'] += `${identifier}-label`;

  const handleOnValueChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    if (onValueChange) {
      onValueChange(e);
    }
  };

  const handleOnValueBlur = (e: FocusEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    if (onValueBlur) {
      onValueBlur(e);
    }
  };

  useEffect(() => {}, [selectValue]);

  return (
    <div {...containerAttr}>
      <label
        id={`${identifier}-label`}
        className="govuk-label"
        htmlFor={identifier}
      >
        {label}
      </label>

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

      <select
        id={identifier}
        name={identifier}
        {...selectAttr}
        value={selectValue}
        onChange={handleOnValueChange}
        onBlur={handleOnValueBlur}
      >
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
    </div>
  );
}
