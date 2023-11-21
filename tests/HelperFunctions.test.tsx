import { clone } from '../src/Helper/helperFunctions';
import { CheckBoxDataProps } from '../src/UI/Checkboxes/CheckboxList';

describe('clone functions correctly', () => {
  it('must return correct values for undefined object type', async () => {
    const result = clone<CheckBoxDataProps>(undefined);
    expect(result).toBeUndefined();
  });
  it('must return correct values for populated object type', async () => {
    const data: CheckBoxDataProps = {
      text: 'British',
      value: 'British',
      hint: 'including English, Scottish, Welsh and Northern Irish',
    };
    const expectedResult: CheckBoxDataProps = {
      text: 'British',
      value: 'British',
      hint: 'including English, Scottish, Welsh and Northern Irish',
    };
    const result = clone<CheckBoxDataProps>(data);
    expect(result).toMatchObject(expectedResult);
  });

  it('must return correct values for undefined array type', async () => {
    const result = clone<CheckBoxDataProps[]>(undefined);
    expect(result).toBeUndefined();
  });
  it('must return correct values for empty array type', async () => {
    const data: CheckBoxDataProps[] = [];
    const expectedResult: CheckBoxDataProps[] = [];
    const result = clone<CheckBoxDataProps[]>(data);
    expect(result.length).toBe(0);
    expect(result).toMatchObject(expectedResult);
  });
  it('must return correct values for populated array type', async () => {
    const data: CheckBoxDataProps[] = [
      {
        text: 'British',
        value: 'British',
        hint: 'including English, Scottish, Welsh and Northern Irish',
      },
      {
        text: 'Irish',
        value: 'Irish',
      },
      {
        text: 'Citizen of another country',
        value: 'Other',
      },
    ];
    const result = clone<CheckBoxDataProps[]>(data);
    expect(result.length).toBe(3);
    expect(result).toMatchObject(data);
  });
});
