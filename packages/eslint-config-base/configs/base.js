import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import eslintRules from '../rules/eslint.js';
import importRules from '../rules/import.js';

const javaScriptExtensions = ['.js', '.jsx', '.mjs', '.cjs'];

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    rules: {
      ...eslintRules.rules,
    },
  },
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...importRules.rules,
    },
  },
  {
    ignores: ['eslint.config.*'],
  },
  {
    files: javaScriptExtensions.map((ext) => `**/*${ext}`),
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
];
