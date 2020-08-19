module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
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
  plugins: ['react'],
  rules: {
    'import/no-extraneous-dependencies': false,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  },
  env: {
    jest: true,
    browser: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
};
