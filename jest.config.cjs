
module.exports = {
  setupFilesAfterEnv: ['./src/test/setupTest.js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testRegex: '\\.test\\.ts$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  globals: {
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
};
