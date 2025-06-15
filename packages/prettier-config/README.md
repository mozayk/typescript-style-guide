# @mozayk/prettier-config

Mozayk Prettier configuration. This package provides a set of rules for maintaining consistent code quality across projects following the [Mozayk TypeScript Style Guide](https://github.com/mozayk/typescript-style-guide#readme).

## Installation

```bash
npm install --save-dev \
  @mozayk/prettier-config \
  prettier@^3
```

or

```bash
yarn add --dev \
  @mozayk/prettier-config \
  prettier@^3
```

## Usage

1. Create or update your `prettier.config.js`:

```javascript
import mozaykPrettierConfig from '@mozayk/prettier-config';

/** @type {import("prettier").Config} */
export default { ...mozaykPrettierConfig };
```

2. Add scripts to your `package.json`:

```json
{
  "scripts": {
    "format": "prettier . --write"
  }
}
```

## Extending the Configuration

You can extend the base configuration and add your own rules:

```javascript
import mozaykPrettierConfig from '@mozayk/prettier-config';

/** @type {import("prettier").Config} */
export default {
  ...mozaykPrettierConfig,
  // Your custom rules here
};
```

## Other Packages

- [`@mozayk/eslint-config-base`](https://www.npmjs.com/package/@mozayk/eslint-config-base) for JavaScript projects.
- [`@mozayk/eslint-config-typescript`](https://www.npmjs.com/package/@mozayk/eslint-config-typescript) for TypeScript support.
- [`@mozayk/eslint-config-react`](https://www.npmjs.com/package/@mozayk/eslint-config-react) adds React and JSX rules.
