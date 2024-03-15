import {
  mapToDate,
  UpdateDayElement,
  UpdateMonthElement,
  UpdateYearElement,
} from './DateInputCommon';

describe('Update Element functions returns values correctly', () => {
  describe.each([
    [
      '',
      {
        day: '',
        month: '',
        year: '',
      },
      {
        day: '',
        month: '',
        year: '',
      },
    ],
    [
      '',
      {
        day: '1',
        month: '2',
        year: '1980',
      },
      {
        day: '',
        month: '2',
        year: '1980',
      },
    ],
    [
      '1',
      {
        day: '',
        month: '',
        year: '',
      },
      {
        day: '1',
        month: '',
        year: '',
      },
    ],
    [
      '5',
      {
        day: '1',
        month: '2',
        year: '1980',
      },
      {
        day: '5',
        month: '2',
        year: '1980',
      },
    ],
  ])(
    'UpdateDayElement must return correct values',
    (newDay, currentDate, expectedDate) => {
      it('day must be updated correctly', async () => {
        const newValue = UpdateDayElement(newDay, currentDate);
        expect(newValue.day).toBe(expectedDate.day);
        expect(newValue.month).toBe(expectedDate.month);
        expect(newValue.year).toBe(expectedDate.year);
      });
    }
  );
  describe.each([
    [
      '',
      {
        day: '',
        month: '',
        year: '',
      },
      {
        day: '',
        month: '',
        year: '',
      },
    ],
    [
      '',
      {
        day: '1',
        month: '1',
        year: '1980',
      },
      {
        day: '1',
        month: '',
        year: '1980',
      },
    ],
    [
      '1',
      {
        day: '',
        month: '',
        year: '',
      },
      {
        day: '',
        month: '1',
        year: '',
      },
    ],
    [
      '2',
      {
        day: '1',
        month: '1',
        year: '1980',
      },
      {
        day: '1',
        month: '2',
        year: '1980',
      },
    ],
  ])(
    'UpdateMonthElement must return correct values',
    (newDay, currentDate, expectedDate) => {
      it('month must be updated correctly', async () => {
        const newValue = UpdateMonthElement(newDay, currentDate);
        expect(newValue.day).toBe(expectedDate.day);
        expect(newValue.month).toBe(expectedDate.month);
        expect(newValue.year).toBe(expectedDate.year);
      });
    }
  );

  describe.each([
    [
      '',
      {
        day: '',
        month: '',
        year: '',
      },
      {
        day: '',
        month: '',
        year: '',
      },
    ],
    [
      '',
      {
        day: '1',
        month: '2',
        year: '1980',
      },
      {
        day: '1',
        month: '2',
        year: '',
      },
    ],
    [
      '2000',
      {
        day: '',
        month: '',
        year: '',
      },
      {
        day: '',
        month: '',
        year: '2000',
      },
    ],
    [
      '2000',
      {
        day: '1',
        month: '2',
        year: '1980',
      },
      {
        day: '1',
        month: '2',
        year: '2000',
      },
    ],
  ])(
    'UpdateYearElement must return correct values',
    (newDay, currentDate, expectedDate) => {
      it('year must be updated correctly', async () => {
        const newValue = UpdateYearElement(newDay, currentDate);
        expect(newValue.day).toBe(expectedDate.day);
        expect(newValue.month).toBe(expectedDate.month);
        expect(newValue.year).toBe(expectedDate.year);
      });
    }
  );

  describe.each([
    [
      {
        day: '',
        month: '',
        year: '',
      },
      undefined,
    ],
    [
      {
        day: '1',
        month: '',
        year: '',
      },
      undefined,
    ],
    [
      {
        day: '',
        month: '2',
        year: '',
      },
      undefined,
    ],
    [
      {
        day: '',
        month: '',
        year: '1980',
      },
      undefined,
    ],
    [
      {
        day: '1',
        month: '1',
        year: '',
      },
      undefined,
    ],
    [
      {
        day: '',
        month: '1',
        year: '1980',
      },
      undefined,
    ],
    [
      {
        day: '1',
        month: '',
        year: '1980',
      },
      undefined,
    ],
    [
      {
        day: '1',
        month: '2',
        year: '1980',
      },
      new Date(1980, 1, 1),
    ],
    [
      {
        day: '30',
        month: '2',
        year: '1980',
      },
      undefined,
    ],
    [
      {
        day: '29',
        month: '2',
        year: '1980',
      },
      new Date(1980, 1, 29),
    ],
    [
      {
        day: '29',
        month: '2',
        year: '1981',
      },
      undefined,
    ],
    [
      {
        day: '28',
        month: '2',
        year: '1981',
      },
      new Date(1981, 1, 28),
    ],
    [
      {
        day: '50',
        month: '1',
        year: '1980',
      },
      undefined,
    ],
    [
      {
        day: '1',
        month: '13',
        year: '1980',
      },
      undefined,
    ],
  ])('mapToDate must return correct values', (dateValue, expectedDate) => {
    it(`mapToDate must return correct value for ${JSON.stringify(
      dateValue
    )}`, async () => {
      const mappedDate = mapToDate(dateValue);
      expect(mappedDate).toEqual(expectedDate);
    });
  });
});
