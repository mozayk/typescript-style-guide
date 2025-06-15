import { configs as mozaykBaseConfigs } from '@mozayk/eslint-config-base';
import { configs as mozaykTypeScriptConfigs } from './index.js';

/** @type {import("eslint").Linter.Config[]} */
export default [...mozaykBaseConfigs.js, ...mozaykTypeScriptConfigs.ts];
