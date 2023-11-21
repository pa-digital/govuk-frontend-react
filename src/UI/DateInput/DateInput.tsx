import React, { useEffect, useState } from 'react';
import {
  DateInputState,
  UpdateDayElement,
  UpdateMonthElement,
  UpdateYearElement,
} from './DateInputCommon';
import { TextInput } from '../Input/TextInput';

export enum errorTypeEnum {
  all,
  day,
  month,
  year,
  dayMonth,
  monthYear,
  dayYear,
}

export interface DateInputProps {
  identifier: string;
  label: string;
  hint?: string;
  required?: boolean;
  errorType?: errorTypeEnum;
  error?: string;
  value?: DateInputState;
  multiQuestion?: boolean;
  onValueChange: (value: DateInputState) => void;
}

export function DateInput({
  identifier,
  label,
  hint,
  required,
  errorType,
  error,
  value,
  multiQuestion,
  onValueChange,
}: DateInputProps) {
  const [dateInputValue, setDateInputValue] = useState<DateInputState>(
    value || { day: '', month: '', year: '' }
  );
  const [initialDateSet, setinitialDateSet] = useState(true);
  const containerAttr = {
    className: error
      ? 'govuk-form-group govuk-form-group--error'
      : 'govuk-form-group',
  };
  const fieldSetAttr = {
    'aria-describedby': `${identifier}-legend`,
  };
  if (hint) {
    fieldSetAttr['aria-describedby'] =
      `${identifier}-hint ${fieldSetAttr['aria-describedby']}`;
  }
  if (error) {
    fieldSetAttr['aria-describedby'] =
      `${identifier}-error ${fieldSetAttr['aria-describedby']}`;
  }

  const calcInputErrorStates = (input: string): boolean => {
    switch (errorType) {
      case errorTypeEnum.all:
        return true;
      case errorTypeEnum.day:
        return input === 'day';
      case errorTypeEnum.month:
        return input === 'month';
      case errorTypeEnum.year:
        return input === 'year';
      case errorTypeEnum.dayMonth:
        return input === 'day' || input === 'month';
      case errorTypeEnum.monthYear:
        return input === 'month' || input === 'year';
      case errorTypeEnum.dayYear:
        return input === 'day' || input === 'year';
      default:
        return false;
    }
  };

  useEffect(() => {
    if (!initialDateSet) {
      onValueChange(dateInputValue);
    }
    setinitialDateSet(false);
  }, [dateInputValue]);

  const updateDayChangeElement = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = UpdateDayElement(e.target.value, dateInputValue);
    setDateInputValue(newValue);
  };

  const updateDayBlurElement = (e: React.FocusEvent<HTMLInputElement>) => {
    const newValue = UpdateDayElement(e.target.value, dateInputValue);
    setDateInputValue(newValue);
  };

  const updateMonthChangeElement = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = UpdateMonthElement(e.target.value, dateInputValue);
    setDateInputValue(newValue);
  };

  const updateMonthBlurElement = (e: React.FocusEvent<HTMLInputElement>) => {
    const newValue = UpdateMonthElement(e.target.value, dateInputValue);
    setDateInputValue(newValue);
  };

  const updateYearChangeElement = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = UpdateYearElement(e.target.value, dateInputValue);
    setDateInputValue(newValue);
  };

  const updateYearBlurElement = (e: React.FocusEvent<HTMLInputElement>) => {
    const newValue = UpdateYearElement(e.target.value, dateInputValue);
    setDateInputValue(newValue);
  };

  return (
    <div {...containerAttr}>
      <fieldset className="govuk-fieldset" role="group" {...fieldSetAttr}>
        {multiQuestion ? (
          <legend
            className="govuk-fieldset__legend"
            id={`${identifier}-legend`}
          >
            {label}
          </legend>
        ) : (
          <legend
            className="govuk-fieldset__legend govuk-fieldset__legend--l"
            id={`${identifier}-legend`}
          >
            <h1 className="govuk-fieldset__heading">{label}</h1>
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

        <div className="govuk-date-input" id={identifier}>
          <div className="govuk-date-input__item">
            <TextInput
              identifier={`${identifier}-day`}
              label="Day"
              multiQuestion
              inputMode="numeric"
              labelClassExt="govuk-date-input__label"
              inputClassExt="govuk-date-input__input govuk-input--width-2"
              required={required}
              inErrorState={calcInputErrorStates('day')}
              value={dateInputValue.day}
              onChange={updateDayChangeElement}
              onBlur={updateDayBlurElement}
            />
          </div>
          <div className="govuk-date-input__item">
            <TextInput
              identifier={`${identifier}-month`}
              label="Month"
              multiQuestion
              inputMode="numeric"
              labelClassExt="govuk-date-input__label"
              inputClassExt="govuk-date-input__input govuk-input--width-2"
              required={required}
              inErrorState={calcInputErrorStates('month')}
              value={dateInputValue.month}
              onChange={updateMonthChangeElement}
              onBlur={updateMonthBlurElement}
            />
          </div>
          <div className="govuk-date-input__item">
            <TextInput
              identifier={`${identifier}-year`}
              label="Year"
              multiQuestion
              inputMode="numeric"
              labelClassExt="govuk-date-input__label"
              inputClassExt="govuk-date-input__input govuk-input--width-4"
              required={required}
              inErrorState={calcInputErrorStates('year')}
              value={dateInputValue.year}
              onChange={updateYearChangeElement}
              onBlur={updateYearBlurElement}
            />
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default DateInput;
