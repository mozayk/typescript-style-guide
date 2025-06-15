import jsPreset from './configs/presets/js.js';
import eslintRules from './rules/eslint.js';
import importRules from './rules/import.js';

/**
 * Mozayk ESLint configuration preset for JavaScript.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export default [...jsPreset];

const configs = {
  js: jsPreset,
};

const rules = {
  eslint: eslintRules.rules,
  import: importRules.rules,
};

export { configs, rules };
