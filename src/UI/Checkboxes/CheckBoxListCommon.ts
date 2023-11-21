import { clone } from '../../Helper/helperFunctions';
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

export const setAllCheckBoxValues = (
  data: CheckBoxDataProps[],
  checked: boolean
): CheckBoxDataProps[] => {
  const iteratorCheckBoxes = clone<CheckBoxDataProps[]>(data);
  iteratorCheckBoxes.forEach((checkBox) => {
    checkBox.checked = checked;
  });
  return iteratorCheckBoxes;
};
