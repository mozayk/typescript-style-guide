import type { Linter } from 'eslint';

declare const _default: Linter.Config[];
export default _default;

export const configs: {
  react: Linter.Config[];
  reactLegacy: Linter.Config[];
};

export const rules: {
  jsxA11y: Linter.RulesRecord;
  react: Linter.RulesRecord;
  reactHooks: Linter.RulesRecord;
  reactJsxRuntime: Linter.RulesRecord;
};
