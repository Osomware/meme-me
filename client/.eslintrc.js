module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-console': 'error',
    'eol-last': ['error', 'always'],
    'no-duplicate-imports': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
