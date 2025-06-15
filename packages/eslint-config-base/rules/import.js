/** @type {import("eslint").Linter.Config} */
export default {
  rules: {
    // Require matching default exports for default imports
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/default.md
    'import/default': 'error',

    // Disallow duplicate exports
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/export.md
    'import/export': 'error',

    // Verify named imports and exports
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/named.md
    'import/named': 'error',

    // Verify namespace member access
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/namespace.md
    'import/namespace': 'error',

    // Disallow unresolved imports
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-unresolved.md
    'import/no-unresolved': 'error',

    // Avoid multiple imports from the same module
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md
    'import/no-duplicates': 'warn',

    // Avoid naming default imports with existing named exports
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default.md
    'import/no-named-as-default': 'warn',

    // Avoid accessing named exports as properties on default imports
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default-member.md
    'import/no-named-as-default-member': 'warn',
  },
};
