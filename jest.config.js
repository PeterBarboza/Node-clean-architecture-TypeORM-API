/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: ['src/**', '!src/configs'],
  testPathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/node_modules'],
}