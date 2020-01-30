const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  extends: [
    'eslint-config-synacor'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    camelcase: ERROR,
    semi: [ERROR, 'never'],
    'no-alert': OFF,
    'class-methods-use-this': OFF,
    'arrow-parens': [ERROR, 'as-needed'],
    'global-require': OFF,
    'no-underscore-dangle': OFF,
    'no-unreachable': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN
  },
};
