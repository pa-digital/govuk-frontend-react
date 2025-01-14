import { toCamelCase } from './Helpers';

describe.each([
  ['', ''],
  ['radioButtons-1-emailAddress', 'RadioButtons1EmailAddress'],
  ['user-name_profile-id', 'UserNameProfileId'],
  ['example string', 'ExampleString'],
  ['nearlyCorrectCase', 'NearlyCorrectCase'],
  ['ExactlyCorrectCase', 'ExactlyCorrectCase'],
])(
  'toCamelCase must return correct values for text',
  (value, expectedValue) => {
    it(`toCamelCase must return ${expectedValue} values for ${value}`, async () => {
      const converted = toCamelCase(value);
      expect(converted).toBe(expectedValue);
    });
  }
);
