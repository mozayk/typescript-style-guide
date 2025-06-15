import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import globals from 'globals';
import reactRules from '../rules/react.js';
import reactHooksRules from '../rules/react-hooks.js';
import jsxA11yRules from '../rules/jsx-a11y.js';

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    plugins: {
      react: reactPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactRules.rules,
    },
  },
  {
    plugins: { 'react-hooks': reactHooksPlugin },
    rules: {
      ...reactHooksRules.rules,
    },
  },
  {
    plugins: { 'jsx-a11y': jsxA11yPlugin },
    rules: {
      ...jsxA11yRules.rules,
    },
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.es2022,
        ...globals.node,
        React: 'writable',
        JSX: 'readonly',
      },
    },
  },
];
