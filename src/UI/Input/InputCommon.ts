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
  spellCheck?: boolean;
  disabled?: boolean;
  value?: string;
}

export interface TextInputProps extends BaseTextInputProps {
  inputMode?: 'numeric';
  inputType?: 'password' | 'email';
  prefix?: string;
  suffix?: string;
  autoComplete?: string;
  width?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  inErrorState?: boolean;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (value: FocusEvent<HTMLInputElement>) => void;
}

export interface TextAreaProps extends BaseTextInputProps {
  rows?: number;
  ariaExtension?: string;
  onChange: (value: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (value: FocusEvent<HTMLTextAreaElement>) => void;
}

export interface TextCounterProps extends BaseTextInputProps, TextAreaProps {
  counterType: 'character' | 'word';
  maxCount: number;
  threshold?: number;
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
