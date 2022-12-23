// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/components/$1',
    '^pages/(.*)$': '<rootDir>/pages/$1',
    '^redux/(.*)$': '<rootDir>/redux/$1',
    '^styles/(.*)$': '<rootDir>/styles/$1',
    '^ts/(.*)$': '<rootDir>/ts/$1',
    '^utils/(.*)$': '<rootDir>/utils/$1',
  },
  moduleDirectories: ['node_modules'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
