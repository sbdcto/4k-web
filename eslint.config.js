const prettier = require('eslint-plugin-prettier');
const typescriptParser = require('@typescript-eslint/parser');
const typescriptPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');

module.exports = [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser, // Specify the parser
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
    plugins: {
      prettier,
      typescriptPlugin,
      reactPlugin,
    },
    rules: {
      'prettier/prettier': 'error',
      semi: ['warn', 'always'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
