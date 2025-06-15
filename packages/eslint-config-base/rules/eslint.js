/** @type {import("eslint").Linter.Config} */
export default {
  rules: {
    // Require correct use of `super()` in constructors
    // https://eslint.org/docs/latest/rules/constructor-super
    'constructor-super': 'error',

    // Validate loop direction matches exit condition
    // https://eslint.org/docs/latest/rules/for-direction
    'for-direction': 'error',

    // Require return in property getters
    // https://eslint.org/docs/latest/rules/getter-return
    'getter-return': 'error',

    // Prefer array literals over `Array` constructor
    // https://eslint.org/docs/latest/rules/no-array-constructor
    'no-array-constructor': 'error',

    // Disallow `async` functions as Promise executors
    // https://eslint.org/docs/latest/rules/no-async-promise-executor
    'no-async-promise-executor': 'error',

    // Block lexical declarations in `case` clauses
    // https://eslint.org/docs/latest/rules/no-case-declarations
    'no-case-declarations': 'error',

    // Disallow reassignment of class declarations
    // https://eslint.org/docs/latest/rules/no-class-assign
    'no-class-assign': 'error',

    // Avoid comparing to `-0` directly
    // https://eslint.org/docs/latest/rules/no-compare-neg-zero
    'no-compare-neg-zero': 'error',

    // Avoid assignments in conditionals
    // https://eslint.org/docs/latest/rules/no-cond-assign
    'no-cond-assign': 'error',

    // Disallow reassignment of `const` variables
    // https://eslint.org/docs/latest/rules/no-const-assign
    'no-const-assign': 'error',

    // Avoid constant logical or comparison expressions
    // https://eslint.org/docs/latest/rules/no-constant-binary-expression
    'no-constant-binary-expression': 'error',

    // Avoid constant conditions in control flow
    // https://eslint.org/docs/latest/rules/no-constant-condition
    'no-constant-condition': 'error',

    // Avoid control characters in RegExp patterns
    // https://eslint.org/docs/latest/rules/no-control-regex
    'no-control-regex': 'error',

    // Disallow `debugger` statements in code
    // https://eslint.org/docs/latest/rules/no-debugger
    'no-debugger': 'error',

    // Avoid `delete` on variables
    // https://eslint.org/docs/latest/rules/no-delete-var
    'no-delete-var': 'error',

    // Disallow duplicate function arguments
    // https://eslint.org/docs/latest/rules/no-dupe-args
    'no-dupe-args': 'error',

    // Disallow duplicate class members
    // https://eslint.org/docs/latest/rules/no-dupe-class-members
    'no-dupe-class-members': 'error',

    // Avoid duplicate conditions in `if-else-if` chains
    // https://eslint.org/docs/latest/rules/no-dupe-else-if
    'no-dupe-else-if': 'error',

    // Disallow duplicate keys in object literals
    // https://eslint.org/docs/latest/rules/no-dupe-keys
    'no-dupe-keys': 'error',

    // Disallow repeated `case` values in `switch` statements
    // https://eslint.org/docs/latest/rules/no-duplicate-case
    'no-duplicate-case': 'error',

    // Avoid empty code blocks
    // https://eslint.org/docs/latest/rules/no-empty
    'no-empty': 'error',

    // Avoid empty character classes in regex
    // https://eslint.org/docs/latest/rules/no-empty-character-class
    'no-empty-character-class': 'error',

    // Avoid empty destructuring patterns
    // https://eslint.org/docs/latest/rules/no-empty-pattern
    'no-empty-pattern': 'error',

    // Disallow empty static blocks
    // https://eslint.org/docs/latest/rules/no-empty-static-block
    'no-empty-static-block': 'error',

    // Preserve original caught exceptions
    // https://eslint.org/docs/latest/rules/no-ex-assign
    'no-ex-assign': 'error',

    // Avoid unnecessary Boolean casting
    // https://eslint.org/docs/latest/rules/no-extra-boolean-cast
    'no-extra-boolean-cast': 'error',

    // Require explicit intent for fallthrough in `switch`
    // https://eslint.org/docs/latest/rules/no-fallthrough
    'no-fallthrough': 'error',

    // Disallow reassignment of function declarations
    // https://eslint.org/docs/latest/rules/no-func-assign
    'no-func-assign': 'error',

    // Prevent reassignment of built-in globals
    // https://eslint.org/docs/latest/rules/no-global-assign
    'no-global-assign': 'error',

    // Disallow implied `eval()` via string arguments
    // https://eslint.org/docs/latest/rules/no-implied-eval
    'no-implied-eval': 'error',

    // Disallow modification of imports
    // https://eslint.org/docs/latest/rules/no-import-assign
    'no-import-assign': 'error',

    // Disallow invalid regular expression strings
    // https://eslint.org/docs/latest/rules/no-invalid-regexp
    'no-invalid-regexp': 'error',

    // Disallow invisible or invalid whitespace characters
    // https://eslint.org/docs/latest/rules/no-irregular-whitespace
    'no-irregular-whitespace': 'error',

    // Disallow numeric literals that lose precision
    // https://eslint.org/docs/latest/rules/no-loss-of-precision
    'no-loss-of-precision': 'error',

    // Disallow misleading multi-code-point chars in RegExp classes
    // https://eslint.org/docs/latest/rules/no-misleading-character-class
    'no-misleading-character-class': 'error',

    // Disallow `new` with non-constructors
    // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
    'no-new-native-nonconstructor': 'error',

    // Avoid `\8` and `\9` Escape Sequences
    // https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
    'no-nonoctal-decimal-escape': 'error',

    // Disallow calling or constructing non-callable built-ins
    // https://eslint.org/docs/latest/rules/no-obj-calls
    'no-obj-calls': 'error',

    // Disallow legacy octal literals
    // https://eslint.org/docs/latest/rules/no-octal
    'no-octal': 'error',

    // Use Object prototype methods safely
    // https://eslint.org/docs/latest/rules/no-prototype-builtins
    'no-prototype-builtins': 'error',

    // Disallow variable redeclaration in the same scope
    // https://eslint.org/docs/latest/rules/no-redeclare
    'no-redeclare': 'error',

    // Disallow ambiguous space matching in regexes
    // https://eslint.org/docs/latest/rules/no-regex-spaces
    'no-regex-spaces': 'error',

    // Avoid redundant self-assignments
    // https://eslint.org/docs/latest/rules/no-self-assign
    'no-self-assign': 'error',

    // Disallow returning values from setters
    // https://eslint.org/docs/latest/rules/no-setter-return
    'no-setter-return': 'error',

    // Avoid shadowing built-in global names
    // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
    'no-shadow-restricted-names': 'error',

    // Disallow sparse array literals
    // https://eslint.org/docs/latest/rules/no-sparse-arrays
    'no-sparse-arrays': 'error',

    // Require `super()` before `this`/`super` in constructors
    // https://eslint.org/docs/latest/rules/no-this-before-super
    'no-this-before-super': 'error',

    // Only throw Error instances
    // https://eslint.org/docs/latest/rules/no-throw-literal
    'no-throw-literal': 'error',

    // Disallow use of undeclared variables
    // https://eslint.org/docs/latest/rules/no-undef
    'no-undef': 'error',

    // Prevent semicolon insertion hazards
    // https://eslint.org/docs/latest/rules/no-unexpected-multiline
    'no-unexpected-multiline': 'error',

    // Disallow unreachable code after control flow statements
    // https://eslint.org/docs/latest/rules/no-unreachable
    'no-unreachable': 'error',

    // Avoid overriding control flow in finally blocks
    // https://eslint.org/docs/latest/rules/no-unsafe-finally
    'no-unsafe-finally': 'error',

    // Disallow misleading negation of relational expressions
    // https://eslint.org/docs/latest/rules/no-unsafe-negation
    'no-unsafe-negation': 'error',

    // Guard optional chains from unsafe access
    // https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
    'no-unsafe-optional-chaining': 'error',

    // Disallow expressions with no effect
    // https://eslint.org/docs/latest/rules/no-unused-expressions
    'no-unused-expressions': 'error',

    // Remove unused labels
    // https://eslint.org/docs/latest/rules/no-unused-labels
    'no-unused-labels': 'error',

    // Remove unused private class members
    // https://eslint.org/docs/latest/rules/no-unused-private-class-members
    'no-unused-private-class-members': 'error',

    // Remove unused variables and parameters
    // https://eslint.org/docs/latest/rules/no-unused-vars
    'no-unused-vars': 'error',

    // Remove inert regex backreferences
    // https://eslint.org/docs/latest/rules/no-useless-backreference
    'no-useless-backreference': 'error',

    // Remove redundant catch blocks
    // https://eslint.org/docs/latest/rules/no-useless-catch
    'no-useless-catch': 'error',

    // Avoid unnecessary escape characters
    // https://eslint.org/docs/latest/rules/no-useless-escape
    'no-useless-escape': 'error',

    // Prefer block-scoped variables
    // https://eslint.org/docs/latest/rules/no-var
    'no-var': 'error',

    // Disallow `with` statements
    // https://eslint.org/docs/latest/rules/no-with
    'no-with': 'error',

    // Prefer `const` for variables that are never reassigned
    // https://eslint.org/docs/latest/rules/prefer-const
    'prefer-const': 'error',

    // Use `Error` objects for Promise rejections
    // https://eslint.org/docs/latest/rules/prefer-promise-reject-errors
    'prefer-promise-reject-errors': 'error',

    // Prefer rest parameters over `arguments`
    // https://eslint.org/docs/latest/rules/prefer-rest-params
    'prefer-rest-params': 'error',

    // Prefer spread syntax over `.apply()`
    // https://eslint.org/docs/latest/rules/prefer-spread
    'prefer-spread': 'error',

    // Enforce `await` in async functions
    // https://eslint.org/docs/latest/rules/require-await
    'require-await': 'error',

    // Enforce `yield` in generator functions
    // https://eslint.org/docs/latest/rules/require-yield
    'require-yield': 'error',

    // Prefer `isNaN()` over direct `NaN` comparisons
    // https://eslint.org/docs/latest/rules/use-isnan
    'use-isnan': 'error',

    // Use only valid strings in `typeof` comparisons
    // https://eslint.org/docs/latest/rules/valid-typeof
    'valid-typeof': 'error',
  },
};
