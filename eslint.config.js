import js from '@eslint/js'
import globals from 'globals'
import i18next from 'eslint-plugin-i18next'
import prettier from 'eslint-plugin-prettier'
import reactHooks from 'eslint-plugin-react-hooks'
import { reactRefresh } from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist', 'node_modules']),

  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite(),
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      globals: globals.browser,
    },

    plugins: {
      i18next,
      prettier,
    },

    rules: {
      // Prettier
      'prettier/prettier': 'error',

      // Nu permitem texte hard-coded în JSX
      'i18next/no-literal-string': [
        'error',
        {
          markupOnly: true,
          ignoreCallee: ['t'],
          ignoreAttribute: ['className', 'data-testid', 'id', 'key', 'name', 'role', 'type'],
        },
      ],

      // Nu permitem console.log
      'no-console': 'error',

      // TypeScript
      '@typescript-eslint/no-explicit-any': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // General
      'no-var': 'error',
      'prefer-const': 'error',

      // React
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
])
