import reactLegacyPreset from './configs/presets/react-legacy.js';
import reactPreset from './configs/presets/react.js';
import jsxA11yRules from './rules/jsx-a11y.js';
import reactHooksRules from './rules/react-hooks.js';
import reactJsxRuntimeRules from './rules/react-jsx-runtime.js';
import reactRules from './rules/react.js';

/**
 * Mozayk ESLint configuration preset for React.
 *
 * @type {import("eslint").Linter.Config[]}
 */
export default [...reactPreset];

const configs = {
  react: reactPreset,
  reactLegacy: reactLegacyPreset,
};

const rules = {
  jsxA11y: jsxA11yRules.rules,
  react: reactRules.rules,
  reactHooks: reactHooksRules.rules,
  reactJsxRuntime: reactJsxRuntimeRules.rules,
};

export { configs, rules };
