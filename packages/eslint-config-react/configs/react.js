import globals from 'globals';
import reactLegacyConfig from './react-legacy.js';
import reactJsxRuntimeRules from '../rules/react-jsx-runtime.js';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...reactLegacyConfig,
  {
    rules: {
      ...reactJsxRuntimeRules.rules,
    },
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        jsxPragma: null,
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
