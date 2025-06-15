import { rules as mozaykBaseRules } from '@mozayk/eslint-config-base';
import importPlugin from 'eslint-plugin-import';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import * as typescriptParser from '@typescript-eslint/parser';
import importTypescriptRules from '../rules/import-typescript.js';
import typescriptEslintRules from '../rules/typescript-eslint.js';
import typescriptRules from '../rules/typescript.js';

const typeScriptExtensions = ['.ts', '.cts', '.mts', '.tsx'];
const allExtensions = [...typeScriptExtensions, '.js', '.jsx', '.mjs', '.cjs'];

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.Config} */
const typescriptLintOnlyFlatConfig = {
  plugins: {
    '@typescript-eslint': typescriptPlugin,
  },
  rules: {
    ...typescriptRules.rules,
  },
};

const typescriptLintOnlyConfig = /** @type {import("eslint").Linter.Config} */ (
  typescriptLintOnlyFlatConfig
);

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    plugins: {
      import: importPlugin,
    },
    settings: {
      'import/extensions': allExtensions,
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/parsers': {
        '@typescript-eslint/parser': typeScriptExtensions,
      },
      'import/resolver': {
        typescript: true,
        node: {
          extensions: allExtensions,
        },
      },
    },
    rules: {
      ...mozaykBaseRules.import,
      ...importTypescriptRules.rules,
    },
  },
  {
    rules: {
      ...typescriptEslintRules.rules,
    },
  },
  typescriptLintOnlyConfig,
  {
    files: allExtensions.map((ext) => `**/*${ext}`),
  },
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        sourceType: 'module',
      },
    },
  },
];
