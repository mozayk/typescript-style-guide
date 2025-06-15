# @mozayk/eslint-config-react

Mozayk ESLint configuration that adds React and JSX rules. This package provides a set of rules for maintaining consistent code quality across React projects following the [Mozayk TypeScript Style Guide](https://github.com/mozayk/typescript-style-guide#readme).

## Installation

```bash
npm install --save-dev \
  @mozayk/eslint-config-react \
  eslint@^9.7 \
  eslint-plugin-jsx-a11y@^6.10 \
  eslint-plugin-react@^7.35 \
  eslint-plugin-react-hooks@^5
```

or

```bash
yarn add --dev \
  @mozayk/eslint-config-react \
  eslint@^9.7 \
  eslint-plugin-jsx-a11y@^6.10 \
  eslint-plugin-react@^7.35 \
  eslint-plugin-react-hooks@^5
```

## Usage

1. Create or update your `eslint.config.js`:

```javascript
import { configs as mozaykReactConfigs } from '@mozayk/eslint-config-react';

/** @type {import("eslint").Linter.Config[]} */
export default [...mozaykReactConfigs.react];
```

2. Add scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --max-warnings 0"
  }
}
```

## Extending the Configuration

You can extend the base configuration and add your own rules:

```javascript
import { configs as mozaykBaseConfigs } from '@mozayk/eslint-config-base';
import { configs as mozaykTypeScriptConfigs } from '@mozayk/eslint-config-typescript';
import { configs as mozaykReactConfigs } from '@mozayk/eslint-config-react';
import * as typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...mozaykBaseConfigs.js,
  ...mozaykTypeScriptConfigs.ts,
  ...mozaykReactConfigs.react,
  {
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        jsxPragma: null,
        sourceType: 'module',
        projectService: true,
      },
      globals: {
        ...globals.browser,
        ...globals.es2022,
        ...globals.node,
        React: 'writable',
        JSX: 'readonly',
      },
    },
    rules: {
      // Your custom rules here
    },
  },
];
```

## Other Packages

- [`@mozayk/eslint-config-base`](https://www.npmjs.com/package/@mozayk/eslint-config-base) for JavaScript projects.
- [`@mozayk/eslint-config-typescript`](https://www.npmjs.com/package/@mozayk/eslint-config-typescript) for TypeScript support.
- [`@mozayk/prettier-config`](https://www.npmjs.com/package/@mozayk/prettier-config) for Prettier configuration.
