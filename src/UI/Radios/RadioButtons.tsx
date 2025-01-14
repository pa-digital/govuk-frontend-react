import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RadioButton from './RadioButton';
import RadioButtonDivider from './RadioButtonDivider';
import { RadioButtonDataProps, RadioButtonsProps } from './RadioButtonCommon';

export const RadioButtons = memo(
  ({
    identifier,
    header,
    hint,
    data,
    error,
    compact,
    multiQuestion,
    render = 'vertical',
    required,
    onValueChange,
  }: RadioButtonsProps) => {
    const [radioButtonList, setRadioButtonList] =
      useState<RadioButtonDataProps[]>(data);
    const isFirstRender = useRef(true);
    useMemo(() => {}, []);

    const containerAttr = {
      className: error
        ? 'govuk-form-group govuk-form-group--error'
        : 'govuk-form-group',
    };
    const radioButtonsWrapperAttr = {
      className: compact ? 'govuk-radios govuk-radios--small' : 'govuk-radios',
    };
    radioButtonsWrapperAttr.className +=
      render === 'inline' ? ' govuk-radios--inline' : '';
    const fieldSetAttr = {
      'aria-describedby': '',
    };
    if (error) {
      fieldSetAttr['aria-describedby'] = `${identifier}-error `;
    }
    if (hint) {
      fieldSetAttr['aria-describedby'] += `${identifier}-hint `;
    }
    fieldSetAttr['aria-describedby'] += `${identifier}-legend`;

    const nonMultiLegendClass = {
      className: compact
        ? 'govuk-fieldset__legend govuk-fieldset__legend--m'
        : 'govuk-fieldset__legend govuk-fieldset__legend--l',
    };

    useEffect(() => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
      onValueChange(radioButtonList);
    }, [radioButtonList]);

    const handleOnChange = (value: string | boolean, radioValue: string) => {
      setRadioButtonList((prevList) =>
        prevList.map((radio) => {
          if (radio.value === radioValue) {
            const updatedRadio = {
              ...radio,
              checked: typeof value === 'boolean' ? value : true,
            };

            if (radio.conditionalInput) {
              updatedRadio.conditionalInput = {
                ...radio.conditionalInput,
                value:
                  typeof value === 'string'
                    ? value
                    : radio.conditionalInput.value || '',
              };
            }

            return updatedRadio;
          }
          return {
            ...radio,
            checked: false,
          };
        })
      );
    };

    return (
      <div {...containerAttr}>
        <fieldset className="govuk-fieldset" {...fieldSetAttr}>
          {multiQuestion ? (
            <legend
              className="govuk-fieldset__legend"
              id={`${identifier}-legend`}
            >
              {header}
            </legend>
          ) : (
            <legend {...nonMultiLegendClass} id={`${identifier}-legend`}>
              <h1 className="govuk-fieldset__heading">{header}</h1>
            </legend>
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

          <div data-module="govuk-radios" {...radioButtonsWrapperAttr}>
            {radioButtonList.map((element, index) => {
              return element.divider ? (
                <RadioButtonDivider text={element.text} key={uuidv4()} />
              ) : (
                <RadioButton
                  identifier={`${identifier}-${index + 1}`}
                  groupName={identifier}
                  text={element.text}
                  value={element.value}
                  hint={element.hint}
                  key={element.value}
                  checked={element.checked}
                  required={required}
                  conditionalInput={element.conditionalInput}
                  onChange={handleOnChange}
                />
              );
            })}
          </div>
        </fieldset>
      </div>
    );
  }
);
