module.exports = {
  testTimeout: 10000,
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: [
    'src/UI/**/*.{js,ts,tsx}',
    'src/Helper/**/*.{js,ts,tsx}',
    '!src/Helper/testHelper.tsx',
    '!src/stories/*.{tsx, mdx}',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
