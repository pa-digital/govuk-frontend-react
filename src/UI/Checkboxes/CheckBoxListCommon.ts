import { CheckBoxDataProps } from './CheckboxList';

export const mapCheckBoxListToArray = (data: CheckBoxDataProps[]): string[] => {
  const retVal: string[] = [];
  if (data) {
    data.forEach((element: CheckBoxDataProps) => {
      if (element.checked && !element.divider) {
        retVal.push(element.value);
      }
    });
  }
  return retVal;
};
