import React, { ChangeEventHandler, FocusEventHandler } from 'react';

export interface RadioButtonProps {
  identifier: string;
  groupName: string;
  text: string;
  value: string;
  hint?: string;
  checked?: boolean;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

function RadioButton({
  identifier,
  groupName,
  text,
  value,
  hint,
  checked = false,
  required,
  onChange,
  onBlur,
}: RadioButtonProps) {
  const radioButtonAttr = {
    'aria-describedby': hint && `${identifier}-item-hint`,
    'aria-required': required,
    required,
  };
  return (
    <div className="govuk-radios__item">
      <input
        className="govuk-radios__input"
        id={identifier}
        name={groupName}
        type="radio"
        value={value}
        defaultChecked={checked}
        {...radioButtonAttr}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label className="govuk-label govuk-radios__label" htmlFor={identifier}>
        {text}
      </label>
      {hint && (
        <div
          id={`${identifier}-item-hint`}
          className="govuk-hint govuk-radios__hint"
        >
          {hint}
        </div>
      )}
    </div>
  );
}

export default RadioButton;
