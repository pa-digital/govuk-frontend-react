import React, { ChangeEvent, useEffect, useState } from 'react';
import { RadioButtonProps } from './RadioButtonCommon';
import { toCamelCase } from '../Common/Helpers';

function RadioButton({
  identifier,
  groupName,
  text,
  value,
  hint,
  checked,
  required,
  conditionalInput,
  onChange,
}: RadioButtonProps) {
  const [checkBoxChecked, setCheckBoxChecked] = useState(checked);
  const [conditionalTextValue, setConditionalTextValue] = useState(
    conditionalInput?.value || ''
  );
  const conditionalInputRef = React.useRef<HTMLInputElement | null>(null);

  const radioButtonAttr = {
    'aria-describedby': hint && `${identifier}-item-hint`,
    'aria-required': required,
    required,
  };
  const conditionalWrapperAttr = {
    id: `${identifier}-${conditionalInput?.context}`,
    className: checked
      ? 'govuk-radios__conditional'
      : 'govuk-radios__conditional govuk-radios__conditional--hidden',
  };
  const conditionalStateWrapper = {
    className: conditionalInput?.error
      ? 'govuk-form-group govuk-form-group--error'
      : 'govuk-form-group',
  };
  const conditionalAttr = {
    id: `${identifier}-${conditionalInput?.identifier}`,
    name: toCamelCase(`${identifier}-${conditionalInput?.identifier}`),
    type: conditionalInput?.inputType || 'text',
    spellCheck: conditionalInput?.spellcheck || false,
    autoComplete: conditionalInput?.autoComplete || undefined,
    className: 'govuk-input',
    value: conditionalInput?.value,
    inputMode: conditionalInput?.inputMode || undefined,
    ref: conditionalInputRef,
  };

  const handleCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setCheckBoxChecked(isChecked);

    const valueToSend = isChecked
      ? conditionalInput
        ? conditionalTextValue
        : true
      : false;

    onChange(valueToSend, value);

    if (isChecked && conditionalInputRef.current) {
      conditionalInputRef.current.focus();
    }
  };

  const handleConditionalInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setConditionalTextValue(newValue);
    if (checkBoxChecked && conditionalInputRef.current) {
      onChange(newValue, value);
      conditionalInputRef.current.focus();
    }
  };

  useEffect(() => {
    setCheckBoxChecked(checked);
    if (conditionalInput?.value && conditionalInputRef.current) {
      setConditionalTextValue(conditionalInput.value);
      conditionalInputRef.current.focus();
    }
  }, [checked, conditionalInput?.value]);

  return (
    <>
      <div className="govuk-radios__item">
        <input
          className="govuk-radios__input"
          id={identifier}
          name={groupName}
          type="radio"
          value={value}
          checked={checked}
          {...radioButtonAttr}
          onChange={handleCheckChange}
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
      {conditionalInput && (
        <div {...conditionalWrapperAttr}>
          <div {...conditionalStateWrapper}>
            <label
              className="govuk-label"
              htmlFor={`${identifier}-${conditionalInput?.identifier}`}
            >
              {conditionalInput.label}
            </label>
            {conditionalInput.hint && (
              <div
                id={`${identifier}-${conditionalInput.identifier}-hint`}
                className="govuk-hint"
              >
                {conditionalInput.hint}
              </div>
            )}
            {conditionalInput.error && (
              <p
                id={`${identifier}-${conditionalInput.identifier}-error`}
                className="govuk-error-message"
              >
                <span className="govuk-visually-hidden">Error:</span>
                {conditionalInput.error}
              </p>
            )}
            {conditionalInput.prefix || conditionalInput.suffix ? (
              <div className="govuk-input__wrapper">
                {conditionalInput.prefix && (
                  <div className="govuk-input__prefix" aria-hidden="true">
                    {conditionalInput.prefix}
                  </div>
                )}
                <input
                  {...conditionalAttr}
                  onChange={handleConditionalInputChange}
                />
                {conditionalInput.suffix && (
                  <div className="govuk-input__suffix" aria-hidden="true">
                    {conditionalInput.suffix}
                  </div>
                )}
              </div>
            ) : (
              <input
                {...conditionalAttr}
                onChange={handleConditionalInputChange}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default RadioButton;
