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
      'no-trailing-spaces': 'error', // Запретить пробелы в конце строк
    },
  },
]);
