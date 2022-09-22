import React, { memo, useEffect, useMemo, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import CheckBox from './Checkbox';
import { CheckBoxDivider } from './CheckboxDivider';

export interface CheckBoxDataProps {
  text: string;
  value: string;
  hint?: string;
  divider?: boolean;
  checked?: boolean;
}

export interface CheckBoxListProps {
  identifier: string;
  header: string;
  hint?: string;
  data: CheckBoxDataProps[];
  error?: string;
  compact?: boolean;
  multiQuestion?: boolean;
  onValueChange?: (values: CheckBoxDataProps[]) => void;
}

export const CheckBoxList = memo(
  ({
    identifier,
    header,
    hint,
    data,
    error,
    compact,
    multiQuestion,
    onValueChange,
  }: CheckBoxListProps) => {
    const [checkBoxList, setCheckBoxList] = useState<CheckBoxDataProps[]>(data);
    const [renderToggle, setRenderToggle] = useState(false);
    useMemo(() => {}, []);

    const containerAttr = {
      className: error
        ? 'govuk-form-group govuk-form-group--error'
        : 'govuk-form-group',
    };
    const checkBoxesWrapperAttr = {
      className: compact
        ? 'govuk-checkboxes govuk-checkboxes--small'
        : 'govuk-checkboxes',
    };
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

    const handleOnChange = (e: any) => {
      if (onValueChange) {
        const updatedList = checkBoxList;
        const valuesIndex = checkBoxList.findIndex(
          (x) => x.value === e.target.value
        );
        if (valuesIndex > -1) {
          updatedList[valuesIndex].checked = e.target.checked;
        }
        onValueChange(updatedList);
        setCheckBoxList(updatedList);
      }
    };

    useEffect(() => {
      setRenderToggle(!renderToggle);
    }, [checkBoxList]);

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
            <legend
              className="govuk-fieldset__legend govuk-fieldset__legend--l"
              id={`${identifier}-legend`}
            >
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

          <div data-module="govuk-checkboxes" {...checkBoxesWrapperAttr}>
            {checkBoxList.map((element, index) => {
              return element.divider ? (
                <CheckBoxDivider text={element.text} key={uuidv4()} />
              ) : (
                <CheckBox
                  identifier={`${identifier}-${index + 1}`}
                  groupName={identifier}
                  text={element.text}
                  value={element.value}
                  hint={element.hint}
                  key={uuidv4()}
                  checked={element.checked}
                  onCheckChanged={handleOnChange}
                />
              );
            })}
          </div>
        </fieldset>
      </div>
    );
  }
);
