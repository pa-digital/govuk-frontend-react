import React, { memo, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CheckBox from './Checkbox';
import { CheckBoxDivider } from './CheckboxDivider';
import { setAllCheckBoxValues } from './CheckBoxListCommon';
import { clone } from '../../Helper/helperFunctions';

export interface CheckBoxDataProps {
  text: string;
  value: string;
  hint?: string;
  divider?: boolean;
  exclusive?: boolean;
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
  showToggle?: boolean;
  onValueChange: (values: CheckBoxDataProps[]) => void;
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
    showToggle,
    onValueChange,
  }: CheckBoxListProps) => {
    const [checkBoxList, setCheckBoxList] = useState<CheckBoxDataProps[]>(data);
    const [renderToggle, setRenderToggle] = useState(false);
    const [toggleText, setToggleText] = useState('Select all');
    const [allSelected, setAllSelected] = useState(false);

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
      let updatedList = clone<CheckBoxDataProps[]>(checkBoxList);
      console.log(JSON.stringify(e.target.value, null, 2));
      const valuesIndex = checkBoxList.findIndex(
        (x) => x.value === e.target.value
      );
      if (valuesIndex > -1) {
        const selectedCheckBox = updatedList[valuesIndex];
        if (selectedCheckBox.exclusive && e.target.checked) {
          updatedList = setAllCheckBoxValues(updatedList, false);
        }
        if (!selectedCheckBox.exclusive) {
          const exclusiveIndex = updatedList.findIndex((x) => x.exclusive);
          if (exclusiveIndex > 0) {
            updatedList = updatedList.map((item) => ({
              ...item,
              checked: item.exclusive ? false : item.checked,
            }));
          }
        }

        updatedList[valuesIndex].checked = e.target.checked;
      }
      if (showToggle) {
        if (updatedList.every((item) => item.checked)) {
          setAllSelected(true);
          setToggleText('De-Select all');
        }
        if (!e.target.checked) {
          setAllSelected(false);
          setToggleText('Select all');
        }
      }
      setCheckBoxList(updatedList);
      onValueChange(updatedList);
    };

    const handleToggleChange = () => {
      setToggleText(allSelected ? 'Select all' : 'De-Select all');
      setAllSelected(!allSelected);

      let iteratorCheckBoxes = clone<CheckBoxDataProps[]>(checkBoxList);
      iteratorCheckBoxes = setAllCheckBoxValues(
        iteratorCheckBoxes,
        !allSelected
      );
      setCheckBoxList(iteratorCheckBoxes);
      onValueChange(iteratorCheckBoxes);
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
            {showToggle && (
              <>
                <CheckBox
                  identifier={`${identifier}-toggle`}
                  groupName={identifier}
                  text={toggleText}
                  value={'All selected'}
                  key={uuidv4()}
                  checked={allSelected}
                  onCheckChanged={handleToggleChange}
                />
                <CheckBoxDivider text="or" key={uuidv4()} />
              </>
            )}
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
