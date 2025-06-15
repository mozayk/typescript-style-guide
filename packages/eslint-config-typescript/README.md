# @mozayk/eslint-config-typescript

Mozayk ESLint configuration for TypeScript support. This package provides a set of rules for maintaining consistent code quality across TypeScript projects following the [Mozayk TypeScript Style Guide](https://github.com/mozayk/typescript-style-guide#readme).

## Installation

```bash
npm install --save-dev \
  @mozayk/eslint-config-typescript \
  @typescript-eslint/eslint-plugin@^8 \
  @typescript-eslint/parser@^8 \
  eslint@^9.7 \
  eslint-import-resolver-typescript@^4 \
  eslint-plugin-import@^2.31 \
  typescript@^5.8
```

or

```bash
yarn add --dev \
  @mozayk/eslint-config-typescript \
  @typescript-eslint/eslint-plugin@^8 \
  @typescript-eslint/parser@^8 \
  eslint@^9.7 \
  eslint-import-resolver-typescript@^4 \
  eslint-plugin-import@^2.31 \
  typescript@^5.8
```

## Usage

1. Create or update your `eslint.config.js`:

```javascript
import { configs as mozaykTypeScriptConfigs } from '@mozayk/eslint-config-typescript';

/** @type {import("eslint").Linter.Config[]} */
export default [...mozaykTypeScriptConfigs.ts];
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

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...mozaykBaseConfigs.js,
  ...mozaykTypeScriptConfigs.ts,
  {
    rules: {
      // Your custom rules here
    },
  },
];
```

## Other Packages

- [`@mozayk/eslint-config-base`](https://www.npmjs.com/package/@mozayk/eslint-config-base) for JavaScript projects.
- [`@mozayk/eslint-config-react`](https://www.npmjs.com/package/@mozayk/eslint-config-react) adds React and JSX rules.
- [`@mozayk/prettier-config`](https://www.npmjs.com/package/@mozayk/prettier-config) for Prettier configuration.
