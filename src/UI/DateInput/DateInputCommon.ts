export interface DateInputState {
  day: string;
  month: string;
  year: string;
}

export const UpdateDayElement = (
  day: string,
  currentDate: DateInputState
): DateInputState => {
  const newValue: DateInputState = {
    day: '',
    month: '',
    year: '',
  };
  newValue.day = day;
  newValue.month = currentDate.month;
  newValue.year = currentDate.year;
  return newValue;
};

export const UpdateMonthElement = (
  month: string,
  currentDate: DateInputState
): DateInputState => {
  const newValue: DateInputState = {
    day: '',
    month: '',
    year: '',
  };
  newValue.day = currentDate.day;
  newValue.month = month;
  newValue.year = currentDate.year;
  return newValue;
};

export const UpdateYearElement = (
  year: string,
  currentDate: DateInputState
): DateInputState => {
  const newValue: DateInputState = {
    day: '',
    month: '',
    year: '',
  };
  newValue.day = currentDate.day;
  newValue.month = currentDate.month;
  newValue.year = year;
  return newValue;
};

const validateLeapYearDate = (
  day: number,
  month: number,
  year: number
): boolean => {
  let validDate = true;
  const leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  if (leapYear) {
    if (month === 2) {
      validDate = day <= 29;
    } else {
      validDate = day <= 28;
    }
  } else if (month === 2) {
    validDate = day <= 28;
  }
  return validDate;
};

export const mapToDate = (dateValue: DateInputState): Date | undefined => {
  try {
    const dateRegex =
      /^([1-9]|0[1-9]|1\d|2\d|3[01])\/(0[1-9]|[1-9]|1[0-2])\/(19|20)\d{2}$/;
    if (
      !dateRegex.test(`${dateValue.day}/${dateValue.month}/${dateValue.year}`)
    ) {
      return undefined;
    }
    const day = parseInt(dateValue.day, 10);
    const month = parseInt(dateValue.month, 10);
    const year = parseInt(dateValue.year, 10);
    return validateLeapYearDate(day, month, year)
      ? new Date(year, month - 1, day)
      : undefined;
  } catch (error) {
    return undefined;
  }
};
