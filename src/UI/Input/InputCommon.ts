import { ChangeEvent, FocusEvent } from 'react';

export interface BaseTextInputProps {
  identifier: string;
  label: string;
  hint?: string;
  multiQuestion?: boolean;
  required?: boolean;
  labelClassExt?: string;
  inputClassExt?: string;
  error?: string;
  disabled?: boolean;
  value?: string;
}

export interface NonPasswordBaseInputProps extends BaseTextInputProps {
  spellCheck?: boolean;
}

export enum TextInputWidth {
  FluidFull = 1,
  FluidThreeQuarters = 2,
  FluidTwoThirds = 3,
  FluidHalf = 4,
  FluidThird = 5,
  FluidQuarter = 6,
  Char20 = 7,
  Char10 = 8,
  Char5 = 9,
  Char4 = 10,
  Char3 = 11,
  Char2 = 12,
}

export const TextInputWidthClass = new Map<number, string>([
  [TextInputWidth.FluidFull, 'govuk-!-width-full'],
  [TextInputWidth.FluidThreeQuarters, 'govuk-!-width-three-quarters'],
  [TextInputWidth.FluidTwoThirds, 'govuk-!-width-two-thirds'],
  [TextInputWidth.FluidHalf, 'govuk-!-width-one-half'],
  [TextInputWidth.FluidThird, 'govuk-!-width-one-third'],
  [TextInputWidth.FluidQuarter, 'govuk-!-width-one-quarter'],
  [TextInputWidth.Char20, 'govuk-input--width-20'],
  [TextInputWidth.Char10, 'govuk-input--width-10'],
  [TextInputWidth.Char5, 'govuk-input--width-5'],
  [TextInputWidth.Char4, 'govuk-input--width-4'],
  [TextInputWidth.Char3, 'govuk-input--width-3'],
  [TextInputWidth.Char2, 'govuk-input--width-2'],
]);

export enum PasswordState {
  Password = 1,
  Text = 2,
}

export const GetButtonTextFromPasswordState = new Map<number, string>([
  [PasswordState.Password, 'Show'],
  [PasswordState.Text, 'Hide'],
]);

export const GetInputTypeFromPasswordState = new Map<number, string>([
  [PasswordState.Password, 'password'],
  [PasswordState.Text, 'text'],
]);

export const GetAriaTextFromPasswordState = new Map<number, string>([
  [PasswordState.Password, 'Your password is hidden'],
  [PasswordState.Text, 'Your password is visible'],
]);

export interface TextInputProps extends NonPasswordBaseInputProps {
  inputMode?: 'numeric';
  inputType?: 'password' | 'email';
  prefix?: string;
  suffix?: string;
  autoComplete?: string;
  width?: TextInputWidth;
  inErrorState?: boolean;
  noContainer?: boolean;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (value: FocusEvent<HTMLInputElement>) => void;
}

export interface TextAreaProps extends NonPasswordBaseInputProps {
  rows?: number;
  ariaExtension?: string;
  onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (value: FocusEvent<HTMLTextAreaElement>) => void;
}

export interface TextCounterProps
  extends NonPasswordBaseInputProps,
    TextAreaProps {
  counterType: 'character' | 'word';
  maxCount: number;
  threshold?: number;
}

export interface PasswordInputProps extends NonPasswordBaseInputProps {
  width?: TextInputWidth;
  inErrorState?: boolean;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (value: FocusEvent<HTMLInputElement>) => void;
}

export interface CounterResult {
  message: string;
  count: number;
  valid: boolean;
}

export const countCharacters = (value: string): number => {
  return value.length;
};

export const countWords = (value: string): number => {
  const cleanValue = value.replace(/\s\s+/g, ' ');
  if (cleanValue.length > 0) {
    const words = cleanValue.split(' ');
    const cleanWords = words.filter((str) => {
      return /\S/.test(str);
    });
    return cleanWords.length;
  }
  return 0;
};

export const buildCounterText = (
  textValue: string,
  maximumCount: number,
  countType: string
): CounterResult => {
  const retVal: CounterResult = {
    message: '',
    count: 0,
    valid: false,
  };
  let newCount = 0;
  if (countType === 'character') {
    newCount = countCharacters(textValue);
  } else {
    newCount = countWords(textValue);
  }
  const remainingCount = maximumCount - newCount;
  if (newCount <= maximumCount) {
    retVal.message = `You have ${remainingCount} ${countType}s remaining`;
    retVal.valid = true;
  } else {
    retVal.message = `You have exceeeded the permitted ${countType} count by ${
      0 - remainingCount
    }`;
    retVal.valid = false;
  }

  retVal.count = newCount;

  return retVal;
};
