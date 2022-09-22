import React, { ChangeEventHandler } from 'react';

export interface CheckBoxProps {
  identifier: string;
  groupName: string;
  text: string;
  value: string;
  hint?: string;
  checked?: boolean;
  onCheckChanged: ChangeEventHandler<HTMLInputElement>;
}

function CheckBox({
  identifier,
  groupName,
  text,
  value,
  hint,
  checked = false,
  onCheckChanged,
}: CheckBoxProps) {
  const checkBoxAttr = {
    'aria-describedby': hint && `${identifier}-item-hint`,
  };

  return (
    <div className="govuk-checkboxes__item">
      <input
        className="govuk-checkboxes__input"
        id={identifier}
        name={groupName}
        type="checkbox"
        value={value}
        defaultChecked={checked}
        {...checkBoxAttr}
        onChange={onCheckChanged}
      />
      <label
        className="govuk-label govuk-checkboxes__label"
        htmlFor={identifier}
      >
        {text}
      </label>

      {hint && (
        <div
          id={`${identifier}-item-hint`}
          className="govuk-hint govuk-checkboxes__hint"
        >
          {hint}
        </div>
      )}
    </div>
  );
}

export default CheckBox;
