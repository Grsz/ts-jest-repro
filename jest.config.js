const path = require('node:path');
const { createJsWithTsEsmPreset } = require('ts-jest')

const esmModules = ['wouter'];

module.exports = {
  testEnvironment: 'node',
  ...createJsWithTsEsmPreset(),
  // transform: {
  //   '^.+\\.[tj]sx?$': [
  //     'ts-jest',
  //     {
  //       useESM: true,
  //     },
  //   ],
  // },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    `<rootDir>/node_modules/.pnpm/(?!(${esmModules.join('|')})@)`,
    `${path.join(__dirname, '../..')}/node_modules/.pnpm/(?!(${esmModules.join('|')})@)`,
    `node_modules/(?!.pnpm|${esmModules.join('|')})`,
  ],
  modulePathIgnorePatterns: [
    '<rootDir>/test/__fixtures__',
    // '<rootDir>/node_modules',
    '<rootDir>/dist',
  ],
  // preset: 'ts-jest',
  moduleNameMapper: {
    // '^@/(.*)$': ['<rootDir>/src/$1'],
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
};
