import {
  MapRadioButtonsToSelected,
  RadioButtonDataProps,
} from './RadioButtonCommon';

describe('mapRadioButtonsToSelected functions correctly', () => {
  it('must return undefined when data is an empty array', () => {
    expect(MapRadioButtonsToSelected([])).toBeUndefined();
  });

  it('must return undefined when no radio button is selected', () => {
    const data: RadioButtonDataProps[] = [
      { text: 'Option 1', value: '1', checked: false },
      { text: 'Option 2', value: '2', checked: false },
    ];
    expect(MapRadioButtonsToSelected(data)).toBeUndefined();
  });

  it('must return correct values when a single radio button is selected without conditional input', () => {
    const data: RadioButtonDataProps[] = [
      { text: 'Option 1', value: '1', checked: true },
    ];
    expect(MapRadioButtonsToSelected(data)).toEqual({
      radioValue: '1',
      conditionalValue: undefined,
    });
  });

  it('must return correct values when a single radio button is selected with conditional input', () => {
    const data: RadioButtonDataProps[] = [
      {
        text: 'Option 1',
        value: '1',
        checked: true,
        conditionalInput: {
          context: 'test',
          identifier: '1',
          label: 'Label',
          value: 'ConditionalValue',
        },
      },
    ];
    expect(MapRadioButtonsToSelected(data)).toEqual({
      radioValue: '1',
      conditionalValue: 'ConditionalValue',
    });
  });

  it('must return correct values when multiple radio buttons are present with one selected', () => {
    const data: RadioButtonDataProps[] = [
      { text: 'Option 1', value: '1', checked: false },
      {
        text: 'Option 2',
        value: '2',
        checked: true,
        conditionalInput: {
          context: 'test',
          identifier: '2',
          label: 'Label',
          value: 'ConditionalValue2',
        },
      },
      { text: 'Option 3', value: '3', checked: false },
    ];
    expect(MapRadioButtonsToSelected(data)).toEqual({
      radioValue: '2',
      conditionalValue: 'ConditionalValue2',
    });
  });

  it('must return undefined when multiple radio buttons are present but none are selected', () => {
    const data: RadioButtonDataProps[] = [
      { text: 'Option 1', value: '1', checked: false },
      { text: 'Option 2', value: '2', checked: false },
      { text: 'Option 3', value: '3', checked: false },
    ];
    expect(MapRadioButtonsToSelected(data)).toBeUndefined();
  });

  it('must handle edge case where radio button has missing fields', () => {
    const data: RadioButtonDataProps[] = [
      { text: 'Option 1', value: '1', checked: true },
      { text: 'Option 2', value: '', checked: false }, // Missing value
      {
        text: 'Option 3',
        value: '3',
        checked: false,
        conditionalInput: undefined,
      },
    ];
    expect(MapRadioButtonsToSelected(data)).toEqual({
      radioValue: '1',
      conditionalValue: undefined,
    });
  });
});
