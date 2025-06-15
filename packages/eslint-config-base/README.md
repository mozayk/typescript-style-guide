# @mozayk/eslint-config-base

Mozayk ESLint configuration for JavaScript projects. This package provides a set of rules for maintaining consistent code quality across JavaScript projects following the [Mozayk TypeScript Style Guide](https://github.com/mozayk/typescript-style-guide#readme).

## Installation

```bash
npm install --save-dev \
  @mozayk/eslint-config-base \
  eslint@^9.7 \
  eslint-plugin-import@^2.31
```

or

```bash
yarn add --dev \
  @mozayk/eslint-config-base \
  eslint@^9.7 \
  eslint-plugin-import@^2.31
```

## Usage

1. Create or update your `eslint.config.js`:

```javascript
import { configs as mozaykBaseConfigs } from '@mozayk/eslint-config-base';

/** @type {import("eslint").Linter.Config[]} */
export default [...mozaykBaseConfigs.js];
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

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...mozaykBaseConfigs.js,
  {
    rules: {
      // Your custom rules here
    },
  },
];
```

## Other Packages

- [`@mozayk/eslint-config-typescript`](https://www.npmjs.com/package/@mozayk/eslint-config-typescript) for TypeScript support.
- [`@mozayk/eslint-config-react`](https://www.npmjs.com/package/@mozayk/eslint-config-react) adds React and JSX rules.
- [`@mozayk/prettier-config`](https://www.npmjs.com/package/@mozayk/prettier-config) for Prettier configuration.
