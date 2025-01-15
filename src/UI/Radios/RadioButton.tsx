import React, { ChangeEvent, useEffect, useState } from 'react';
import { RadioButtonProps } from './RadioButtonCommon';
import { toCamelCase } from '../Common/Helpers';

function RadioButton({
  identifier,
  groupName,
  text,
  value,
  hint,
  checked = false,
  required,
  conditionalInput,
  onChange,
}: RadioButtonProps) {
  const [conditionalTextValue, setConditionalTextValue] = useState(
    conditionalInput?.value || ''
  );
  const conditionalInputRef = React.useRef<HTMLInputElement | null>(null);

  const radioButtonAttr = {
    'aria-describedby': hint && `${identifier}-item-hint`,
    'aria-required': required,
    'data-aria-controls': conditionalInput
      ? `${identifier}-${conditionalInput.context}`
      : undefined,
    required,
  };
  const conditionalWrapperAttr = {
    id: conditionalInput ? `${identifier}-${conditionalInput?.context}` : '',
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
    value: conditionalTextValue,
    inputMode: conditionalInput?.inputMode || undefined,
    ref: conditionalInputRef,
  };

  const handleCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
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
    if (checked && conditionalInputRef.current) {
      onChange(newValue, value);
      conditionalInputRef.current.focus();
    }
  };

  useEffect(() => {
    if (conditionalInput) {
      setConditionalTextValue(conditionalInput.value || '');
    }
  }, [conditionalInput]);

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
          aria-checked={checked ? 'true' : 'false'}
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
            <input
              {...conditionalAttr}
              onChange={handleConditionalInputChange}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default RadioButton;
