module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    quotes: 0,
    semi: 0,
    'no-console': 0,
    'space-before-function-paren': 0,
  },
}
