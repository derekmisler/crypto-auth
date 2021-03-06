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
    FORTMATIC_KEY: 'someKey'
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
    indent: [ERROR, 2],
    'jsx-quotes': [ERROR, 'prefer-single'],
    'react/jsx-no-bind': OFF,
    'react/jsx-indent-props': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARN
  },
};
