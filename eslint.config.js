import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'quotes': ['error', 'single'],
      'no-trailing-spaces': 'error',
       'eol-last': ['error', 'always'],
       'no-multiple-empty-lines': ['error', { max: 0 }]
    },
  },
])
