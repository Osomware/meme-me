module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:@tanstack/eslint-plugin-query/recommended'
  ],
  parser: '@typescript-eslint/parser',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: ['react', '@tanstack/query'],
  rules: {
    'no-console': 'error',
    'eol-last': ['error', 'always'],
    'no-duplicate-imports': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/prefer-query-object-syntax': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
