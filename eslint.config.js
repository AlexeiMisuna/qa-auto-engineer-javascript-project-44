import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'quotes': ['error', 'single'], // Использовать одинарные кавычки
      'semi': ['error', 'always'], // Всегда использовать точки с запятой
      'no-trailing-spaces': 'error', // Запретить пробелы в конце строк
      'arrow-parens': ['error', 'as-needed'], // Запретить скобки для единственного аргумента
    },
  },
]);
