import { TextInputWidth } from '../Input/InputCommon';

export interface RadioButtonConditionalInputProps {
  context: string;
  identifier: string;
  label: string;
  hint?: string;
  value?: string;
  autoComplete?: string;
  inputMode?: 'numeric';
  inputType?: 'email';
  spellcheck?: boolean;
  prefix?: string;
  suffix?: string;
  error?: string;
  width?: TextInputWidth;
}

export interface RadioButtonDataProps {
  text: string;
  value: string;
  hint?: string;
  divider?: boolean;
  checked?: boolean;
  conditionalInput?: RadioButtonConditionalInputProps;
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

export interface RadioButtonProps {
  identifier: string;
  groupName: string;
  text: string;
  value: string;
  hint?: string;
  checked?: boolean;
  required?: boolean;
  conditionalInput?: RadioButtonConditionalInputProps;
  onChange: (value: string | boolean, radioValue: string) => void;
}

export interface RadioButtonValue {
  radioValue: string;
  conditionalValue?: string;
}

export const MapRadioButtonsToSelected = (
  data: RadioButtonDataProps[]
): RadioButtonValue | undefined => {
  const selectedRadio = data.find((radio) => radio.checked);

  return selectedRadio
    ? {
        radioValue: selectedRadio.value,
        conditionalValue: selectedRadio.conditionalInput?.value,
      }
    : undefined;
};
