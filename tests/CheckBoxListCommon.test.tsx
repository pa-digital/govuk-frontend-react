import { mapCheckBoxListToArray } from '../src/UI/Checkboxes/CheckBoxListCommon';
import {
  CheckBoxData,
  DividerCheckBoxData,
  DataCheckCheckBoxData,
} from './CheckboxList.test';
import { CheckBoxDataProps } from '../src/UI/Checkboxes/CheckboxList';

describe('mapCheckBoxListToArray functions correctly', () => {
  it('must return correct mapped values for single checked list', async () => {
    const mappedValue = mapCheckBoxListToArray(DataCheckCheckBoxData);
    expect(mappedValue.length).toBe(1);
    expect(mappedValue[0]).toBe('Irish');
  });
  it('must return correct mapped values for multiple checked list', async () => {
    const initData: CheckBoxDataProps[] = [];
    CheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });

    initData[0].checked = true;
    initData[2].checked = true;

    const mappedValue = mapCheckBoxListToArray(initData);
    expect(mappedValue.length).toBe(2);
    expect(mappedValue[0]).toBe('British');
    expect(mappedValue[1]).toBe('Other');
  });
  it('must return correct mapped values for unchecked list with a divider', async () => {
    const mappedValue = mapCheckBoxListToArray(DividerCheckBoxData);
    expect(mappedValue.length).toBe(0);
  });
  it('must return correct mapped values for checked list with a divider', async () => {
    const initData: CheckBoxDataProps[] = [];
    DividerCheckBoxData.forEach((data) => {
      initData.push({
        text: data.text,
        value: data.value,
        hint: data.hint,
        divider: data.divider,
        checked: data.checked,
      });
    });

    initData[1].checked = true;
    const mappedValue = mapCheckBoxListToArray(initData);
    expect(mappedValue.length).toBe(1);
    expect(mappedValue[0]).toBe('Irish');
  });
  it('must return correct mapped values for empty checked list', async () => {
    const initData: CheckBoxDataProps[] = [];
    const mappedValue = mapCheckBoxListToArray(initData);
    expect(mappedValue.length).toBe(0);
  });
});
