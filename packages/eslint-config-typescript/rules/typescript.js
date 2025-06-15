/** @type {import("eslint").Linter.Config} */
export default {
  rules: {
    // Restrict TypeScript directive comments
    // https://typescript-eslint.io/rules/ban-ts-comment
    '@typescript-eslint/ban-ts-comment': 'error',

    // Disallow generic `Array` constructors
    // https://typescript-eslint.io/rules/no-array-constructor
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',

    // Disallow duplicate enum member values
    // https://typescript-eslint.io/rules/no-duplicate-enum-values
    '@typescript-eslint/no-duplicate-enum-values': 'error',

    // Disallow use of the `{}` type
    // https://typescript-eslint.io/rules/no-empty-object-type
    '@typescript-eslint/no-empty-object-type': 'error',

    // Disallow explicit `any` type usage
    // https://typescript-eslint.io/rules/no-explicit-any
    '@typescript-eslint/no-explicit-any': 'error',

    // Disallow redundant non-null assertions
    // https://typescript-eslint.io/rules/no-extra-non-null-assertion
    '@typescript-eslint/no-extra-non-null-assertion': 'error',

    // Disallow invalid `new` or `constructor` declarations
    // https://typescript-eslint.io/rules/no-misused-new
    '@typescript-eslint/no-misused-new': 'error',

    // Disallow TypeScript namespaces
    // https://typescript-eslint.io/rules/no-namespace
    '@typescript-eslint/no-namespace': 'error',

    // Disallow non-null assertions on optional chains
    // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',

    // Disallow `require()` usage
    // https://typescript-eslint.io/rules/no-require-imports
    '@typescript-eslint/no-require-imports': 'error',

    // Disallow aliasing `this`
    // https://typescript-eslint.io/rules/no-this-alias
    '@typescript-eslint/no-this-alias': 'error',

    // Disallow pointless type assertions
    // https://typescript-eslint.io/rules/no-unnecessary-type-constraint
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',

    // Ban class-interface declaration merging
    // https://typescript-eslint.io/rules/no-unsafe-declaration-merging
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',

    // Avoid unsafe Function type declarations
    // https://typescript-eslint.io/rules/no-unsafe-function-type
    '@typescript-eslint/no-unsafe-function-type': 'error',

    // Disallow unused standalone expressions
    // https://typescript-eslint.io/rules/no-unused-expressions
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',

    // Remove unused variables and parameters
    // https://typescript-eslint.io/rules/no-unused-vars
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',

    // Avoid wrapper object types for primitives
    // https://typescript-eslint.io/rules/no-wrapper-object-types
    '@typescript-eslint/no-wrapper-object-types': 'error',

    // Prefer `as const` over literal type assertions
    // https://typescript-eslint.io/rules/prefer-as-const
    '@typescript-eslint/prefer-as-const': 'error',

    // Use `namespace` instead of `module` for custom TypeScript modules
    // https://typescript-eslint.io/rules/prefer-namespace-keyword
    '@typescript-eslint/prefer-namespace-keyword': 'error',

    // Prefer imports over triple-slash references
    // https://typescript-eslint.io/rules/triple-slash-reference
    '@typescript-eslint/triple-slash-reference': 'error',
  },
};
