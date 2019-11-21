/* eslint-disable no-import-assign */
module.exports = {
  ...require('./jest-common'),
  displayName: 'dom',
  testEnvironment: 'jest-environment-jsdom',
  setupTestFrameworkScriptFile: require.resolve('./setup-tests.js'),
}