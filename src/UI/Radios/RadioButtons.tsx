import React, { memo, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import RadioButton from './RadioButton';
import RadioButtonDivider from './RadioButtonDivider';

export interface RadioButtonDataProps {
  text: string;
  value: string;
  hint?: string;
  divider?: boolean;
  checked?: boolean;
}

export interface RadioButtonsProps {
  identifier: string;
  header: string;
  hint?: string;
  data: RadioButtonDataProps[];
  error?: string;
  compact?: boolean;
  multiQuestion?: boolean;
  render?: 'vertical' | 'inline';
  required?: boolean;
  onValueChange: (values: RadioButtonDataProps[]) => void;
}

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
    const [radioButtonList, setRadioButtonList] = useState<
      RadioButtonDataProps[]
    >([]);
    const [renderToggle, setRenderToggle] = useState(false);
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

    const handleOnChange = (e: any) => {
      const updatedList = radioButtonList;
      updatedList.forEach((button) => {
        // eslint-disable-next-line no-param-reassign
        button.checked = false;
      });
      const valuesIndex = updatedList.findIndex(
        (x) => x.value === e.target.value
      );
      if (valuesIndex > -1) {
        updatedList[valuesIndex].checked = e.target.checked;
      }
      setRadioButtonList(updatedList);
      onValueChange(updatedList);
      setRenderToggle(!renderToggle);
    };

    useEffect(() => {
      setRadioButtonList(data);
    }, [data]);

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
            {data.map((element, index) => {
              return element.divider ? (
                <RadioButtonDivider text={element.text} key={uuidv4()} />
              ) : (
                <RadioButton
                  identifier={`${identifier}-${index + 1}`}
                  groupName={identifier}
                  text={element.text}
                  value={element.value}
                  hint={element.hint}
                  key={uuidv4()}
                  checked={element.checked}
                  required={required}
                  onChange={(e: any) => handleOnChange(e)}
                  onBlur={(e: any) => handleOnChange(e)}
                />
              );
            })}
          </div>
        </fieldset>
      </div>
    );
  }
);
