import { buildCounterText, countCharacters, countWords } from './InputCommon';

describe.each([
  ['', 0],
  ['test', 4],
  ['123', 3],
  ['multi word', 10],
])(
  'countCharacters must return correct values for text',
  (value, expectedCount) => {
    it(`countCharacters must return ${expectedCount} values for ${value}`, async () => {
      const count = countCharacters(value);
      expect(count).toBe(expectedCount);
    });
  }
);

describe.each([
  ['', 0],
  ['test', 1],
  ['123', 1],
  ['multi word', 2],
])('countWords must return correct values for text', (value, expectedCount) => {
  it(`countWords must return ${expectedCount} values for ${value}`, async () => {
    const count = countWords(value);
    expect(count).toBe(expectedCount);
  });
});

describe.each([
  [
    '',
    0,
    'character',
    { message: 'You have 0 characters remaining', count: 0, valid: true },
  ],
  [
    '  ',
    5,
    'character',
    { message: 'You have 3 characters remaining', count: 2, valid: true },
  ],
  [
    '   ',
    5,
    'character',
    { message: 'You have 2 characters remaining', count: 3, valid: true },
  ],
  [
    'test',
    10,
    'character',
    { message: 'You have 6 characters remaining', count: 4, valid: true },
  ],
  [
    'test',
    4,
    'character',
    { message: 'You have 0 characters remaining', count: 4, valid: true },
  ],
  [
    'test1',
    4,
    'character',
    {
      message: 'You have exceeeded the permitted character count by 1',
      count: 5,
      valid: false,
    },
  ],
  [
    '',
    0,
    'word',
    { message: 'You have 0 words remaining', count: 0, valid: true },
  ],
  [
    'test',
    1,
    'word',
    { message: 'You have 0 words remaining', count: 1, valid: true },
  ],
  [
    'test',
    4,
    'word',
    { message: 'You have 3 words remaining', count: 1, valid: true },
  ],
  [
    'test words',
    4,
    'word',
    { message: 'You have 2 words remaining', count: 2, valid: true },
  ],
  [
    'test words count',
    4,
    'word',
    { message: 'You have 1 words remaining', count: 3, valid: true },
  ],
  [
    'test words',
    1,
    'word',
    {
      message: 'You have exceeeded the permitted word count by 1',
      count: 2,
      valid: false,
    },
  ],
  [
    'test  words',
    4,
    'word',
    { message: 'You have 2 words remaining', count: 2, valid: true },
  ],
  [
    'test      words',
    4,
    'word',
    { message: 'You have 2 words remaining', count: 2, valid: true },
  ],
])(
  'buildCounterText must return correct result',
  (value, maxCount, countType, expectedResult) => {
    it(`buildCounterText must return correct response for '${value}' with a max Count of ${maxCount} in ${countType} mode`, async () => {
      const result = buildCounterText(value, maxCount, countType);
      expect(result.message).toEqual(expectedResult.message);
      expect(result.count).toBe(expectedResult.count);
      expect(result.valid).toBe(expectedResult.valid);
    });
  }
);
