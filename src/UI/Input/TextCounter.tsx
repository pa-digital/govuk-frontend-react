import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  buildCounterText,
  TextCounterProps,
  CounterResult,
} from './InputCommon';
import { TextArea } from './TextArea';

export function TextCounter({
  identifier,
  label,
  multiQuestion,
  required,
  labelClassExt,
  inputClassExt,
  hint,
  error,
  spellCheck,
  value,
  rows = 5,
  disabled,
  counterType,
  maxCount,
  threshold,
  onChange,
  onBlur,
}: TextCounterProps) {
  const [displayCounter, setDisplayCounter] = useState(false);
  const [counterMessage, setCounterMessage] = useState<CounterResult>();

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const countCheckResult = buildCounterText(
      e.target.value,
      maxCount,
      counterType
    );
    setCounterMessage(countCheckResult);
    return e;
  };
  useEffect(() => {
    if (counterMessage) {
      if (threshold && threshold > 0) {
        setDisplayCounter(counterMessage.count >= maxCount - threshold);
      } else {
        setDisplayCounter(true);
      }
    } else {
      setDisplayCounter(false);
    }
  }, [counterMessage]);

  useEffect(() => {
    const countCheckResult = buildCounterText(
      value || '',
      maxCount,
      counterType
    );
    setCounterMessage(countCheckResult);
  }, []);

  const infoAttr = {
    className: counterMessage?.valid
      ? 'govuk-hint govuk-character-count__message'
      : 'govuk-character-count__message govuk-character-count__status govuk-error-message',
  };

  return (
    <div
      className="govuk-character-count"
      data-module="govuk-character-count"
      data-maxlength={maxCount}
    >
      <TextArea
        identifier={identifier}
        label={label}
        multiQuestion={multiQuestion}
        required={required}
        labelClassExt={labelClassExt}
        inputClassExt={inputClassExt}
        hint={hint}
        ariaExtension={(displayCounter && `${identifier}-info`) || undefined}
        error={error}
        spellCheck={spellCheck}
        value={value}
        rows={rows}
        disabled={disabled}
        onChange={(e) => onChange(handleOnChange(e))}
        onBlur={onBlur}
      />

      {displayCounter && (
        <div id={`${identifier}-info`} {...infoAttr}>
          {counterMessage?.message}
        </div>
      )}
    </div>
  );
}
