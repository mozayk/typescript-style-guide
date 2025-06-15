import tsPreset from './configs/presets/ts.js';
import tsLintOnlyPreset from './configs/presets/ts-lint-only.js';
import importTypescriptRules from './rules/import-typescript.js';
import typescriptEslintRules from './rules/typescript-eslint.js';
import typescriptTypeCheckedRules from './rules/typescript-type-checked.js';
import typescriptRules from './rules/typescript.js';

/**
 * Mozayk ESLint configuration preset for TypeScript.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export default [...tsPreset];

const configs = {
  ts: tsPreset,
  tsLintOnly: tsLintOnlyPreset,
};

const rules = {
  importTypescript: importTypescriptRules.rules,
  typescriptEslint: typescriptEslintRules.rules,
  typescriptTypeChecked: typescriptTypeCheckedRules.rules,
  typescript: typescriptRules.rules,
};

export { configs, rules };
