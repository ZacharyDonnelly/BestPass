'use strict'

module.exports = {
  roots: ['<rootDir>/view'],
  collectCoverageFrom: ['view/**/*.{js,jsx,ts,tsx}', '!view/**/*.d.ts', '!view/**/index.js'],
  setupFiles: ['react-app-polyfill/jsdom'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testMatch: ['<rootDir>/view/**/__tests__/**/*.{js,jsx,ts,tsx}', '<rootDir>/**/*.{spec,test}.{js,jsx,ts,tsx}'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest'
  },
  resolver: 'jest-pnp-resolver',
  transformIgnorePatterns: ['node_modules'],
  modulePaths: ['<rootDir>/view'],
  moduleDirectories: ['node_modules', 'view'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy'
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
}
