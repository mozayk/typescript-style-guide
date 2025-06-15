import typescriptTypeCheckedRules from '../rules/typescript-type-checked.js';
import typescriptLintOnlyConfig from './typescript-lint-only.js';
import * as typescriptParser from '@typescript-eslint/parser';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...typescriptLintOnlyConfig,
  {
    rules: {
      ...typescriptTypeCheckedRules.rules,
    },
  },
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        sourceType: 'module',
        projectService: true,
      },
    },
  },
];
