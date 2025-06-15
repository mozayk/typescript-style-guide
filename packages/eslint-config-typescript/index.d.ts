import type { Linter } from 'eslint';

declare const _default: Linter.Config[];
export default _default;

export const configs: {
  ts: Linter.Config[];
  tsLintOnly: Linter.Config[];
};

export const rules: {
  importTypescript: Linter.RulesRecord;
  typescriptEslint: Linter.RulesRecord;
  typescriptTypeChecked: Linter.RulesRecord;
  typescript: Linter.RulesRecord;
};
