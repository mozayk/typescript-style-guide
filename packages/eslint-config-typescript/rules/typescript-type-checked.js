/** @type {import("eslint").Linter.Config} */
export default {
  rules: {
    // Disallow awaiting non-Thenable values
    // https://typescript-eslint.io/rules/await-thenable
    '@typescript-eslint/await-thenable': 'error',

    // Disallow `delete` on array elements
    // https://typescript-eslint.io/rules/no-array-delete
    '@typescript-eslint/no-array-delete': 'error',

    // Disallow `.toString()` on non-informative objects
    // https://typescript-eslint.io/rules/no-base-to-string
    '@typescript-eslint/no-base-to-string': 'error',

    // Disallow duplicate union or intersection type constituents
    // https://typescript-eslint.io/rules/no-duplicate-type-constituents
    '@typescript-eslint/no-duplicate-type-constituents': 'error',

    // Require handling of Promises
    // https://typescript-eslint.io/rules/no-floating-promises
    '@typescript-eslint/no-floating-promises': 'error',

    // Disallow `for-in` on arrays
    // https://typescript-eslint.io/rules/no-for-in-array
    '@typescript-eslint/no-for-in-array': 'error',

    // Disallow indirect `eval()` calls
    // https://typescript-eslint.io/rules/no-implied-eval
    'no-implied-eval': 'off',
    '@typescript-eslint/no-implied-eval': 'error',

    // Disallow Promises in unsafe logical contexts
    // https://typescript-eslint.io/rules/no-misused-promises
    '@typescript-eslint/no-misused-promises': 'error',

    // Disallow useless union and intersection members
    // https://typescript-eslint.io/rules/no-redundant-type-constituents
    '@typescript-eslint/no-redundant-type-constituents': 'error',

    // Disallow pointless type assertions
    // https://typescript-eslint.io/rules/no-unnecessary-type-assertion
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',

    // Disallow `any` in function arguments
    // https://typescript-eslint.io/rules/no-unsafe-argument
    '@typescript-eslint/no-unsafe-argument': 'error',

    // Ban assigning `any` to variables or properties
    // https://typescript-eslint.io/rules/no-unsafe-assignment
    '@typescript-eslint/no-unsafe-assignment': 'error',

    // Ban calling `any`-typed values
    // https://typescript-eslint.io/rules/no-unsafe-call
    '@typescript-eslint/no-unsafe-call': 'error',

    // Compare only against enum members
    // https://typescript-eslint.io/rules/no-unsafe-enum-comparison
    '@typescript-eslint/no-unsafe-enum-comparison': 'error',

    // Avoid member access on `any`-typed values
    // https://typescript-eslint.io/rules/no-unsafe-member-access
    '@typescript-eslint/no-unsafe-member-access': 'error',

    // Avoid returning `any` from functions
    // https://typescript-eslint.io/rules/no-unsafe-return
    '@typescript-eslint/no-unsafe-return': 'error',

    // Require `-` to operate only on numeric types
    // https://typescript-eslint.io/rules/no-unsafe-unary-minus
    '@typescript-eslint/no-unsafe-unary-minus': 'error',

    // Throw only `Error` instances
    // https://typescript-eslint.io/rules/only-throw-error
    'no-throw-literal': 'off',
    '@typescript-eslint/only-throw-error': 'error',

    // Use `Error` objects for Promise rejections
    // https://typescript-eslint.io/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'off',
    '@typescript-eslint/prefer-promise-reject-errors': 'error',

    // Avoid async functions without `await`
    // https://typescript-eslint.io/rules/require-await
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',

    // Ensure consistent types in `+` operations
    // https://typescript-eslint.io/rules/restrict-plus-operands
    '@typescript-eslint/restrict-plus-operands': 'error',

    // Restrict interpolated values to strings
    // https://typescript-eslint.io/rules/restrict-template-expressions
    '@typescript-eslint/restrict-template-expressions': 'error',

    // Preserve `this` binding for class methods
    // https://typescript-eslint.io/rules/unbound-method
    '@typescript-eslint/unbound-method': 'error',
  },
};
