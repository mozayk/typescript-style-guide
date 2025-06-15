# Mozayk TypeScript Style Guide

_A mostly reasonable approach to TypeScript — not [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript), but some of its spirit._

> This guide assumes you are using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/).

[![`@mozayk/eslint-config-base` Downloads](https://img.shields.io/npm/dm/%40mozayk%2Feslint-config-base)](https://www.npmjs.com/package/@mozayk/eslint-config-base)
[![`@mozayk/eslint-config-typescript` Downloads](https://img.shields.io/npm/dm/%40mozayk%2Feslint-config-typescript)](https://www.npmjs.com/package/@mozayk/eslint-config-typescript)
[![`@mozayk/eslint-config-react` Downloads](https://img.shields.io/npm/dm/%40mozayk%2Feslint-config-react)](https://www.npmjs.com/package/@mozayk/eslint-config-react)
[![`@mozayk/prettier-config` Downloads](https://img.shields.io/npm/dm/%40mozayk%2Fprettier-config)](https://www.npmjs.com/package/@mozayk/prettier-config)

## Table of Contents

Click on links to jump, or on arrows (`▸`/`▾`) to expand/collapse.

<ul>
  <li>
    <details>
      <summary><a href="#base-guidelines">Base Guidelines</a></summary>
      <ul>
        <li>
          <details>
            <summary><a href="#eslint"><code>eslint</code></a></summary>
            <ul>
              <li><a href="#constructor-super"><code>constructor-super</code></a>: Require correct use of <code>super()</code> in constructors</li>
              <li><a href="#for-direction"><code>for-direction</code></a>: Validate loop direction matches exit condition</li>
              <li><a href="#getter-return"><code>getter-return</code></a>: Require return in property getters</li>
              <li><a href="#no-array-constructor"><code>no-array-constructor</code></a>: Prefer array literals over <code>Array</code> constructor</li>
              <li><a href="#no-async-promise-executor"><code>no-async-promise-executor</code></a>: Disallow <code>async</code> functions as Promise executors</li>
              <li><a href="#no-case-declarations"><code>no-case-declarations</code></a>: Block lexical declarations in <code>case</code> clauses</li>
              <li><a href="#no-class-assign"><code>no-class-assign</code></a>: Disallow reassignment of class declarations</li>
              <li><a href="#no-compare-neg-zero"><code>no-compare-neg-zero</code></a>: Avoid comparing to <code>-0</code> directly</li>
              <li><a href="#no-cond-assign"><code>no-cond-assign</code></a>: Avoid assignments in conditionals</li>
              <li><a href="#no-const-assign"><code>no-const-assign</code></a>: Disallow reassignment of <code>const</code> variables</li>
              <li><a href="#no-constant-binary-expression"><code>no-constant-binary-expression</code></a>: Avoid constant logical or comparison expressions</li>
              <li><a href="#no-constant-condition"><code>no-constant-condition</code></a>: Avoid constant conditions in control flow</li>
              <li><a href="#no-control-regex"><code>no-control-regex</code></a>: Avoid control characters in RegExp patterns</li>
              <li><a href="#no-debugger"><code>no-debugger</code></a>: Disallow <code>debugger</code> statements in code</li>
              <li><a href="#no-delete-var"><code>no-delete-var</code></a>: Avoid <code>delete</code> on variables</li>
              <li><a href="#no-dupe-args"><code>no-dupe-args</code></a>: Disallow duplicate function arguments</li>
              <li><a href="#no-dupe-class-members"><code>no-dupe-class-members</code></a>: Disallow duplicate class members</li>
              <li><a href="#no-dupe-else-if"><code>no-dupe-else-if</code></a>: Avoid duplicate conditions in <code>if-else-if</code> chains</li>
              <li><a href="#no-dupe-keys"><code>no-dupe-keys</code></a>: Disallow duplicate keys in object literals</li>
              <li><a href="#no-duplicate-case"><code>no-duplicate-case</code></a>: Disallow repeated <code>case</code> values in <code>switch</code> statements</li>
              <li><a href="#no-empty"><code>no-empty</code></a>: Avoid empty code blocks</li>
              <li><a href="#no-empty-character-class"><code>no-empty-character-class</code></a>: Avoid empty character classes in regex</li>
              <li><a href="#no-empty-pattern"><code>no-empty-pattern</code></a>: Avoid empty destructuring patterns</li>
              <li><a href="#no-empty-static-block"><code>no-empty-static-block</code></a>: Disallow empty static blocks</li>
              <li><a href="#no-ex-assign"><code>no-ex-assign</code></a>: Preserve original caught exceptions</li>
              <li><a href="#no-extra-boolean-cast"><code>no-extra-boolean-cast</code></a>: Avoid unnecessary Boolean casting</li>
              <li><a href="#no-fallthrough"><code>no-fallthrough</code></a>: Require explicit intent for fallthrough in <code>switch</code></li>
              <li><a href="#no-func-assign"><code>no-func-assign</code></a>: Disallow reassignment of function declarations</li>
              <li><a href="#no-global-assign"><code>no-global-assign</code></a>: Prevent reassignment of built-in globals</li>
              <li><a href="#no-implied-eval"><code>no-implied-eval</code></a>: Disallow implied <code>eval</code> via string arguments</li>
              <li><a href="#no-import-assign"><code>no-import-assign</code></a>: Disallow modification of imports</li>
              <li><a href="#no-invalid-regexp"><code>no-invalid-regexp</code></a>: Disallow invalid regular expression strings</li>
              <li><a href="#no-irregular-whitespace"><code>no-irregular-whitespace</code></a>: Disallow invisible or invalid whitespace characters</li>
              <li><a href="#no-loss-of-precision"><code>no-loss-of-precision</code></a>: Disallow numeric literals that lose precision</li>
              <li><a href="#no-misleading-character-class"><code>no-misleading-character-class</code></a>: Disallow misleading multi-code-point chars in RegExp classes</li>
              <li><a href="#no-new-native-nonconstructor"><code>no-new-native-nonconstructor</code></a>: Disallow <code>new</code> with non-constructors</li>
              <li><a href="#no-nonoctal-decimal-escape"><code>no-nonoctal-decimal-escape</code></a>: Avoid <code>\8</code> and <code>\9</code> escape sequences</li>
              <li><a href="#no-obj-calls"><code>no-obj-calls</code></a>: Disallow calling or constructing non-callable built-ins</li>
              <li><a href="#no-octal"><code>no-octal</code></a>: Disallow legacy octal literals</li>
              <li><a href="#no-prototype-builtins"><code>no-prototype-builtins</code></a>: Use Object prototype methods safely</li>
              <li><a href="#no-redeclare"><code>no-redeclare</code></a>: Disallow variable redeclaration in the same scope</li>
              <li><a href="#no-regex-spaces"><code>no-regex-spaces</code></a>: Disallow ambiguous space matching in regexes</li>
              <li><a href="#no-self-assign"><code>no-self-assign</code></a>: Avoid redundant self-assignments</li>
              <li><a href="#no-setter-return"><code>no-setter-return</code></a>: Disallow returning values from setters</li>
              <li><a href="#no-shadow-restricted-names"><code>no-shadow-restricted-names</code></a>: Avoid shadowing built-in global names</li>
              <li><a href="#no-sparse-arrays"><code>no-sparse-arrays</code></a>: Disallow sparse array literals</li>
              <li><a href="#no-this-before-super"><code>no-this-before-super</code></a>: Require <code>super()</code> before <code>this</code>/<code>super</code> in constructors</li>
              <li><a href="#no-throw-literal"><code>no-throw-literal</code></a>: Only throw Error instances</li>
              <li><a href="#no-undef"><code>no-undef</code></a>: Disallow use of undeclared variables</li>
              <li><a href="#no-unexpected-multiline"><code>no-unexpected-multiline</code></a>: Prevent semicolon insertion hazards</li>
              <li><a href="#no-unreachable"><code>no-unreachable</code></a>: Disallow unreachable code after control flow statements</li>
              <li><a href="#no-unsafe-finally"><code>no-unsafe-finally</code></a>: Avoid overriding control flow in finally blocks</li>
              <li><a href="#no-unsafe-negation"><code>no-unsafe-negation</code></a>: Disallow misleading negation of relational expressions</li>
              <li><a href="#no-unsafe-optional-chaining"><code>no-unsafe-optional-chaining</code></a>: Guard optional chains from unsafe access</li>
              <li><a href="#no-unused-expressions"><code>no-unused-expressions</code></a>: Disallow expressions with no effect</li>
              <li><a href="#no-unused-labels"><code>no-unused-labels</code></a>: Remove unused labels</li>
              <li><a href="#no-unused-private-class-members"><code>no-unused-private-class-members</code></a>: Remove unused private class members</li>
              <li><a href="#no-unused-vars"><code>no-unused-vars</code></a>: Remove unused variables and parameters</li>
              <li><a href="#no-useless-backreference"><code>no-useless-backreference</code></a>: Remove inert regex backreferences</li>
              <li><a href="#no-useless-catch"><code>no-useless-catch</code></a>: Remove redundant catch blocks</li>
              <li><a href="#no-useless-escape"><code>no-useless-escape</code></a>: Avoid unnecessary escape characters</li>
              <li><a href="#no-var"><code>no-var</code></a>: Prefer block-scoped variables</li>
              <li><a href="#no-with"><code>no-with</code></a>: Disallow <code>with</code> statements</li>
              <li><a href="#prefer-const"><code>prefer-const</code></a>: Prefer <code>const</code> for variables that are never reassigned</li>
              <li><a href="#prefer-promise-reject-errors"><code>prefer-promise-reject-errors</code></a>: Use <code>Error</code> objects for Promise rejections</li>
              <li><a href="#prefer-rest-params"><code>prefer-rest-params</code></a>: Prefer rest parameters over <code>arguments</code></li>
              <li><a href="#prefer-spread"><code>prefer-spread</code></a>: Prefer spread syntax over <code>.apply()</code></li>
              <li><a href="#require-await"><code>require-await</code></a>: Enforce <code>await</code> in async functions</li>
              <li><a href="#require-yield"><code>require-yield</code></a>: Enforce <code>yield</code> in generator functions</li>
              <li><a href="#use-isnan"><code>use-isnan</code></a>: Prefer <code>isNaN()</code> over direct <code>NaN</code> comparisons</li>
              <li><a href="#valid-typeof"><code>valid-typeof</code></a>: Use only valid strings in <code>typeof</code> comparisons</li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary><a href="#import"><code>import</code></a></summary>
            <ul>
              <li><a href="#default"><code>default</code></a>: Require matching default exports for default imports</li>
              <li><a href="#export"><code>export</code></a>: Disallow duplicate exports</li>
              <li><a href="#named"><code>named</code></a>: Verify named imports and exports</li>
              <li><a href="#namespace"><code>namespace</code></a>: Verify namespace member access</li>
              <li><a href="#no-duplicates"><code>no-duplicates</code></a>: Avoid multiple imports from the same module</li>
              <li><a href="#no-named-as-default"><code>no-named-as-default</code></a>: Avoid naming default imports with existing named exports</li>
              <li><a href="#no-named-as-default-member"><code>no-named-as-default-member</code></a>: Avoid accessing named exports as properties on default imports</li>
              <li><a href="#no-unresolved"><code>no-unresolved</code></a>: Disallow unresolved imports</li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li>
    <details>
      <summary><a href="#typescript-guidelines">TypeScript Guidelines</a></summary>
      <ul>
        <li>
          <details>
            <summary><a href="#typescript-eslint"><code>@typescript-eslint</code></a></summary>
            <ul>
              <li><a href="#await-thenable"><code>await-thenable</code></a>: Disallow awaiting non-Thenable values</li>
              <li><a href="#ban-ts-comment"><code>ban-ts-comment</code></a>: Restrict TypeScript directive comments</li>
              <li><a href="#no-array-constructor"><code>no-array-constructor</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow generic <code>Array</code> constructors</li>
              <li><a href="#no-array-delete"><code>no-array-delete</code></a>: Disallow <code>delete</code> on array elements</li>
              <li><a href="#no-base-to-string"><code>no-base-to-string</code></a>: Disallow <code>.toString()</code> on non-informative objects</li>
              <li><a href="#no-duplicate-enum-values"><code>no-duplicate-enum-values</code></a>: Disallow duplicate enum member values</li>
              <li><a href="#no-duplicate-type-constituents"><code>no-duplicate-type-constituents</code></a>: Disallow duplicate union or intersection type constituents</li>
              <li><a href="#no-empty-object-type"><code>no-empty-object-type</code></a>: Disallow use of the <code>{}</code> type</li>
              <li><a href="#no-explicit-any"><code>no-explicit-any</code></a>: Disallow explicit <code>any</code> type usage</li>
              <li><a href="#no-extra-non-null-assertion"><code>no-extra-non-null-assertion</code></a>: Disallow redundant non-null assertions</li>
              <li><a href="#no-floating-promises"><code>no-floating-promises</code></a>: Require handling of Promises</li>
              <li><a href="#no-for-in-array"><code>no-for-in-array</code></a>: Disallow <code>for-in</code> on arrays</li>
              <li><a href="#no-implied-eval"><code>no-implied-eval</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow indirect <code>eval</code> calls</li>
              <li><a href="#no-misused-new"><code>no-misused-new</code></a>: Disallow invalid <code>new</code> or <code>constructor</code> declarations</li>
              <li><a href="#no-misused-promises"><code>no-misused-promises</code></a>: Disallow Promises in unsafe logical contexts</li>
              <li><a href="#no-namespace"><code>no-namespace</code></a>: Disallow TypeScript namespaces</li>
              <li><a href="#no-non-null-asserted-optional-chain"><code>no-non-null-asserted-optional-chain</code></a>: Disallow non-null assertions on optional chains</li>
              <li><a href="#no-redundant-type-constituents"><code>no-redundant-type-constituents</code></a>: Disallow useless union and intersection members</li>
              <li><a href="#no-require-imports"><code>no-require-imports</code></a>: Disallow <code>require</code> usage</li>
              <li><a href="#no-this-alias"><code>no-this-alias</code></a>: Disallow aliasing <code>this</code></li>
              <li><a href="#no-unnecessary-type-assertion"><code>no-unnecessary-type-assertion</code></a>: Disallow pointless type assertions</li>
              <li><a href="#no-unnecessary-type-constraint"><code>no-unnecessary-type-constraint</code></a>: Disallow pointless type assertions</li>
              <li><a href="#no-unsafe-argument"><code>no-unsafe-argument</code></a>: Disallow <code>any</code> in function arguments</li>
              <li><a href="#no-unsafe-assignment"><code>no-unsafe-assignment</code></a>: Ban assigning <code>any</code> to variables or properties</li>
              <li><a href="#no-unsafe-call"><code>no-unsafe-call</code></a>: Ban calling <code>any</code>-typed values</li>
              <li><a href="#no-unsafe-declaration-merging"><code>no-unsafe-declaration-merging</code></a>: Ban class-interface declaration merging</li>
              <li><a href="#no-unsafe-enum-comparison"><code>no-unsafe-enum-comparison</code></a>: Compare only against enum members</li>
              <li><a href="#no-unsafe-function-type"><code>no-unsafe-function-type</code></a>: Avoid unsafe Function type declarations</li>
              <li><a href="#no-unsafe-member-access"><code>no-unsafe-member-access</code></a>: Avoid member access on <code>any</code>-typed values</li>
              <li><a href="#no-unsafe-return"><code>no-unsafe-return</code></a>: Avoid returning <code>any</code> from functions</li>
              <li><a href="#no-unsafe-unary-minus"><code>no-unsafe-unary-minus</code></a>: Require <code>-</code> to operate only on numeric types</li>
              <li><a href="#no-unused-expressions"><code>no-unused-expressions</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow unused standalone expressions</li>
              <li><a href="#no-unused-vars"><code>no-unused-vars</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Remove unused variables and parameters</li>
              <li><a href="#no-wrapper-object-types"><code>no-wrapper-object-types</code></a>: Avoid wrapper object types for primitives</li>
              <li><a href="#prefer-as-const"><code>prefer-as-const</code></a>: Prefer <code>as const</code> over literal type assertions</li>
              <li><a href="#no-throw-literal"><code>only-throw-error</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Throw only <code>Error</code> instances</li>
              <li><a href="#prefer-namespace-keyword"><code>prefer-namespace-keyword</code></a>: Use <code>namespace</code> instead of <code>module</code> for custom TypeScript modules</li>
              <li><a href="#prefer-promise-reject-errors"><code>prefer-promise-reject-errors</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Use <code>Error</code> objects for Promise rejections</li>
              <li><a href="#require-await"><code>require-await</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Avoid async functions without <code>await</code></li>
              <li><a href="#restrict-plus-operands"><code>restrict-plus-operands</code></a>: Ensure consistent types in <code>+</code> operations</li>
              <li><a href="#restrict-template-expressions"><code>restrict-template-expressions</code></a>: Restrict interpolated values to strings</li>
              <li><a href="#triple-slash-reference"><code>triple-slash-reference</code></a>: Prefer imports over triple-slash references</li>
              <li><a href="#unbound-method"><code>unbound-method</code></a>: Preserve <code>this</code> binding for class methods</li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary><code>import</code></summary>
            <ul>
              <li><a href="#default"><code>default</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#import"><code>import</code></a>)</i>: Require matching default exports for default imports</li>
              <li><a href="#export"><code>export</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#import"><code>import</code></a>)</i>: Disallow duplicate exports</li>
              <li><a href="#namespace"><code>namespace</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#import"><code>import</code></a>)</i>: Verify namespace member access</li>
              <li><a href="#no-duplicates"><code>no-duplicates</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#import"><code>import</code></a>)</i>: Avoid multiple imports from the same module</li>
              <li><a href="#no-named-as-default"><code>no-named-as-default</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#import"><code>import</code></a>)</i>: Avoid naming default imports with existing named exports</li>
              <li><a href="#no-named-as-default-member"><code>no-named-as-default-member</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#import"><code>import</code></a>)</i>: Avoid accessing named exports as properties on default imports</li>
              <li><a href="#no-unresolved"><code>no-unresolved</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#import"><code>import</code></a>)</i>: Disallow unresolved imports</li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary><code>tsc</code></summary>
            <ul>
              <li><a href="#no-with"><code>ts(1101)</code> <code>ts(2410)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow <code>with</code> statements</li>
              <li><a href="#no-dupe-keys"><code>ts(1117)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow duplicate keys in object literals</li>
              <li><a href="#no-dupe-args"><code>ts(2300)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow duplicate function arguments</li>
              <li><a href="#no-dupe-class-members"><code>ts(2300)</code> <code>ts(2393)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow duplicate class members</li>
              <li><a href="#no-undef"><code>ts(2304)</code> <code>ts(2552)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow use of undeclared variables</li>
              <li><a href="#no-unsafe-negation"><code>ts(2322)</code> <code>ts(2358)</code> <code>ts(2365)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow misleading negation of relational expressions</li>
              <li><a href="#constructor-super"><code>ts(2335)</code> <code>ts(2377)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Require correct use of <code>super()</code> in constructors</li>
              <li><a href="#no-obj-calls"><code>ts(2349)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow calling or constructing non-callable built-ins</li>
              <li><a href="#no-this-before-super"><code>ts(2376)</code> <code>ts(17009)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Require <code>super()</code> before <code>this</code>/<code>super</code> in constructors</li>
              <li><a href="#getter-return"><code>ts(2378)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Require return in property getters</li>
              <li><a href="#no-setter-return"><code>ts(2408)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow returning values from setters</li>
              <li><a href="#no-redeclare"><code>ts(2451)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow variable redeclaration in the same scope</li>
              <li><a href="#no-import-assign"><code>ts(2540)</code> <code>ts(2632)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow modification of imports</li>
              <li><a href="#no-const-assign"><code>ts(2588)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow reassignment of <code>const</code> variables</li>
              <li><a href="#no-class-assign"><code>ts(2629)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow reassignment of class declarations</li>
              <li><a href="#no-func-assign"><code>ts(2630)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow reassignment of function declarations</li>
              <li><a href="#no-new-native-nonconstructor"><code>ts(7009)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow <code>new</code> with non-constructors</li>
              <li><a href="#no-unreachable"><code>ts(7027)</code></a> <i>(defined in <a href="#base-guidelines">Base Guidelines</a> → <a href="#eslint"><code>eslint</code></a>)</i>: Disallow unreachable code after control flow statements</li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li>
    <details>
      <summary><a href="#react-guidelines">React Guidelines</a></summary>
      <ul>
        <li>
          <details>
            <summary><a href="#jsx-a11y"><code>jsx-a11y</code></a></summary>
            <ul>
              <li><a href="#alt-text"><code>alt-text</code></a>: Require alt text on relevant media elements</li>
              <li><a href="#anchor-has-content"><code>anchor-has-content</code></a>: Ensure anchors have accessible content</li>
              <li><a href="#anchor-is-valid"><code>anchor-is-valid</code></a>: Only use <code>&lt;a&gt;</code> for real navigation</li>
              <li><a href="#aria-activedescendant-has-tabindex"><code>aria-activedescendant-has-tabindex</code></a>: Ensure activedescendant containers are tabbable</li>
              <li><a href="#aria-props"><code>aria-props</code></a>: Use only valid ARIA attributes</li>
              <li><a href="#aria-proptypes"><code>aria-proptypes</code></a>: Use valid ARIA property values</li>
              <li><a href="#aria-role"><code>aria-role</code></a>: Use only valid ARIA roles</li>
              <li><a href="#aria-unsupported-elements"><code>aria-unsupported-elements</code></a>: Avoid ARIA on unsupported elements</li>
              <li><a href="#autocomplete-valid"><code>autocomplete-valid</code></a>: Use valid autocomplete attributes</li>
              <li><a href="#click-events-have-key-events"><code>click-events-have-key-events</code></a>: Ensure clickable elements support keyboard interaction</li>
              <li><a href="#heading-has-content"><code>heading-has-content</code></a>: Ensure headings contain accessible text</li>
              <li><a href="#html-has-lang"><code>html-has-lang</code></a>: Require <code>lang</code> attribute on <code>&lt;html&gt;</code> element</li>
              <li><a href="#iframe-has-title"><code>iframe-has-title</code></a>: Require <code>&lt;iframe&gt;</code> elements to have a title</li>
              <li><a href="#img-redundant-alt"><code>img-redundant-alt</code></a>: Avoid redundant words in <code>alt</code> text</li>
              <li><a href="#interactive-supports-focus"><code>interactive-supports-focus</code></a>: Interactive roles must support focus</li>
              <li><a href="#label-has-associated-control"><code>label-has-associated-control</code></a>: Associate every label with a form control</li>
              <li><a href="#media-has-caption"><code>media-has-caption</code></a>: Include captions in audio or video elements</li>
              <li><a href="#mouse-events-have-key-events"><code>mouse-events-have-key-events</code></a>: Pair mouse events with keyboard events</li>
              <li><a href="#no-access-key"><code>no-access-key</code></a>: Disallow <code>accessKey</code> attributes</li>
              <li><a href="#no-autofocus"><code>no-autofocus</code></a>: Avoid <code>autoFocus</code> on elements</li>
              <li><a href="#no-distracting-elements"><code>no-distracting-elements</code></a>: Avoid distracting HTML elements</li>
              <li><a href="#no-interactive-element-to-noninteractive-role"><code>no-interactive-element-to-noninteractive-role</code></a>: Avoid demoting interactive elements with non-interactive roles</li>
              <li><a href="#no-noninteractive-element-interactions"><code>no-noninteractive-element-interactions</code></a>: Avoid interaction handlers on non-interactive elements</li>
              <li><a href="#no-noninteractive-element-to-interactive-role"><code>no-noninteractive-element-to-interactive-role</code></a>: Avoid assigning interactive roles to non-interactive elements</li>
              <li><a href="#no-noninteractive-tabindex"><code>no-noninteractive-tabindex</code></a>: Disallow tabIndex on non-interactive elements</li>
              <li><a href="#no-redundant-roles"><code>no-redundant-roles</code></a>: Avoid redundant ARIA roles on native elements</li>
              <li><a href="#no-static-element-interactions"><code>no-static-element-interactions</code></a>: Add roles to interactive handlers on static elements</li>
              <li><a href="#role-has-required-aria-props"><code>role-has-required-aria-props</code></a>: Include required ARIA props for all roles</li>
              <li><a href="#role-supports-aria-props"><code>role-supports-aria-props</code></a>: Only use ARIA props valid for the assigned role</li>
              <li><a href="#scope"><code>scope</code></a>: Restrict <code>scope</code> attribute to <code>&lt;th&gt;</code> elements only</li>
              <li><a href="#tabindex-no-positive"><code>tabindex-no-positive</code></a>: Avoid positive <code>tabIndex</code> values</li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary><a href="#react"><code>react</code></a></summary>
            <ul>
              <li><a href="#display-name"><code>display-name</code></a>: Name All React Components</li>
              <li><a href="#jsx-key"><code>jsx-key</code></a>: Add <code>key</code> Prop to JSX in Lists</li>
              <li><a href="#jsx-no-comment-textnodes"><code>jsx-no-comment-textnodes</code></a>: Disallow JSX Comments as Text Nodes</li>
              <li><a href="#jsx-no-duplicate-props"><code>jsx-no-duplicate-props</code></a>: Disallow Duplicate Props in JSX</li>
              <li><a href="#jsx-no-target-blank"><code>jsx-no-target-blank</code></a>: Require <code>rel="noreferrer"</code> with <code>target="_blank"</code></li>
              <li><a href="#jsx-no-undef"><code>jsx-no-undef</code></a>: Disallow undefined JSX components</li>
              <li><a href="#jsx-uses-vars"><code>jsx-uses-vars</code></a>: Prevent false unused variable warnings from JSX</li>
              <li><a href="#no-children-prop"><code>no-children-prop</code></a>: Avoid passing children via props</li>
              <li><a href="#no-danger-with-children"><code>no-danger-with-children</code></a>: Don’t combine children and <code>dangerouslySetInnerHTML</code></li>
              <li><a href="#no-deprecated"><code>no-deprecated</code></a>: Avoid deprecated React APIs</li>
              <li><a href="#no-direct-mutation-state"><code>no-direct-mutation-state</code></a>: Avoid direct state mutation</li>
              <li><a href="#no-find-dom-node"><code>no-find-dom-node</code></a>: Avoid <code>findDOMNode</code> usage</li>
              <li><a href="#no-is-mounted"><code>no-is-mounted</code></a>: Avoid <code>isMounted</code> usage</li>
              <li><a href="#no-render-return-value"><code>no-render-return-value</code></a>: Avoid using return value of <code>ReactDOM.render</code></li>
              <li><a href="#no-string-refs"><code>no-string-refs</code></a>: Avoid string refs</li>
              <li><a href="#no-unescaped-entities"><code>no-unescaped-entities</code></a>: Escape special characters in JSX</li>
              <li><a href="#no-unknown-property"><code>no-unknown-property</code></a>: Use valid DOM properties in JSX</li>
              <li><a href="#prop-types"><code>prop-types</code></a>: Validate component props</li>
              <li><a href="#require-render-return"><code>require-render-return</code></a>: Return JSX from render methods</li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary><a href="#react-hooks"><code>react-hooks</code></a></summary>
            <ul>
              <li><a href="#exhaustive-deps"><code>exhaustive-deps</code></a>: Track Hook Dependencies Explicitly</li>
              <li><a href="#rules-of-hooks"><code>rules-of-hooks</code></a>: Enforce Hook Rules Consistently</li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li>
    <details>
      <summary><a href="#style-guidelines">Style Guidelines</a></summary>
      <ul>
        <li>
          <details>
            <summary><a href="#prettier"><code>prettier</code></a></summary>
            <ul>
              <li><a href="#arrow-parens"><code>arrow-parens</code></a>: Always use parentheses in arrow functions</li>
              <li><a href="#bracket-same-line"><code>bracket-same-line</code></a>: Place closing bracket on its own line</li>
              <li><a href="#bracket-spacing"><code>bracket-spacing</code></a>: Include spaces inside braces</li>
              <li><a href="#embedded-language-formatting"><code>embedded-language-formatting</code></a>: Format embedded code</li>
              <li><a href="#end-of-line"><code>end-of-line</code></a>: Normalize line endings to LF</li>
              <li><a href="#html-whitespace-sensitivity"><code>html-whitespace-sensitivity</code></a>: Respect whitespace sensitivity in HTML-like templates</li>
              <li><a href="#jsx-single-quote"><code>jsx-single-quote</code></a>: Use single quotes in JSX attributes</li>
              <li><a href="#object-wrap"><code>object-wrap</code></a>: Preserve object formatting intent</li>
              <li><a href="#print-width"><code>print-width</code></a>: Limit line length for readability</li>
              <li><a href="#prose-wrap"><code>prose-wrap</code></a>: Preserve prose line breaks in Markdown</li>
              <li><a href="#quote-props"><code>quote-props</code></a>: Quote object properties only when necessary</li>
              <li><a href="#semi"><code>semi</code></a>: Always use semicolons to terminate statements</li>
              <li><a href="#single-attribute-per-line"><code>single-attribute-per-line</code></a>: Allow multiple attributes per line in markup</li>
              <li><a href="#single-quote"><code>single-quote</code></a>: Use single quotes for strings</li>
              <li><a href="#tab-width"><code>tab-width</code></a>: Use consistent indentation width</li>
              <li><a href="#trailing-commas"><code>trailing-commas</code></a>: Use trailing commas in multiline structures</li>
              <li><a href="#use-tabs"><code>use-tabs</code></a>: Prefer spaces over tabs for indentation</li>
            </ul>
          </details>
        </li>
      </ul>
    </details>
  </li>
  <li><a href="#setup">Setup</a></li>
  <li><a href="#extract-rules-for-ai-agents">Extract Rules for AI Agents</a></li>
  <li><a href="#in-the-wild">In the Wild</a></li>
  <li><a href="#contributors">Contributors</a></li>
  <li><a href="#acknowledgments">Acknowledgments</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#amendments">Amendments</a></li>
</ul>

## Base Guidelines

### `eslint`

#### `constructor-super`

**Ensure constructors in derived classes call `super()` and base classes do not.**

```ts
// ❌ Bad: Derived constructor omits super()
class Dog extends Animal {
  constructor() {
    this.name = 'Rex'; // ReferenceError
  }
}

// ✅ Good: Calls super() before accessing this
class Dog extends Animal {
  constructor() {
    super();
    this.name = 'Rex';
  }
}
```

**Rationale**

- Prevents runtime errors (ReferenceError, TypeError).
- Aligns with JavaScript class semantics.
- Ensures consistent superclass initialization.

**Automations**

- ESLint: [`constructor-super`](https://eslint.org/docs/latest/rules/constructor-super)
- TypeScript Compiler: `ts(2335)` `ts(2377)`

---

**[⬆ back to top](#table-of-contents)**

#### `for-direction`

**Ensure `for` loop counters increment or decrement in a way that allows the loop to terminate.**

```ts
// ❌ Bad: counter moves away from exit condition
for (let i = 0; i < 10; i--) {
  console.log(i); // Infinite loop
}

// ✅ Good: counter moves toward exit condition
for (let i = 0; i < 10; i++) {
  console.log(i); // Terminates at i === 10
}
```

**Rationale**

- Prevents infinite loops caused by incorrect counter direction.
- Makes intent of loop logic clearer.
- Avoids subtle bugs that may be hard to detect in runtime behavior.

**Automations**

- ESLint: [`for-direction`](https://eslint.org/docs/latest/rules/for-direction)

---

**[⬆ back to top](#table-of-contents)**

#### `getter-return`

**Require every getter to contain a return statement to ensure value access behaves as expected.**

```ts
// ❌ Bad: Getter has no return statement
const user = {
  get name() {
    // no return
  },
};

// ✅ Good: Getter returns a value
const user = {
  get name() {
    return 'Alice';
  },
};
```

**Rationale**

- Ensures getters fulfill their purpose by returning a value.
- Prevents unexpected `undefined` results.
- Aligns with ECMAScript property accessor semantics.

**Automations**

- ESLint: [`getter-return`](https://eslint.org/docs/latest/rules/getter-return)
- TypeScript Compiler: `ts(2378)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-array-constructor`

**Avoid using the `Array` constructor except to create arrays with a specific length.**

```ts
// ❌ Bad: Constructor used where literal is clearer
const nums = new Array(1, 2, 3);
const list = Array('a', 'b', 'c');

// ✅ Good: Use array literals for known values
const nums = [1, 2, 3];
const list = ['a', 'b', 'c'];

// ✅ Good: Array constructor with type arguments
const nums = Array<number>(0, 1, 2);
const list = new Array<Foo>(x, y, z);
```

**Rationale**

- Prevents the single-argument ambiguity (`Array(5)` vs `Array(5, 6)`).
- Avoids dependency on potentially redefined global `Array`.
- Improves clarity and readability of array creation.

**Automations**

- ESLint: [`no-array-constructor`](https://eslint.org/docs/latest/rules/no-array-constructor) [`@typescript-eslint/no-array-constructor`](https://typescript-eslint.io/rules/no-array-constructor)

---

**[⬆ back to top](#table-of-contents)**

#### `no-async-promise-executor`

**Avoid using `async` functions in `new Promise` constructors to prevent unhandled errors and unnecessary complexity.**

```ts
// ❌ Bad: async executor introduces subtle error handling issues
const result = new Promise(async (resolve, reject) => {
  resolve(await someAsyncTask());
});

// ✅ Good: use async outside the executor to ensure proper error handling
const result = someAsyncTask().then((res) => res);
```

**Rationale**

- `async` executors can suppress thrown errors instead of rejecting the Promise.
- Using `await` inside `new Promise` is a sign the `Promise` constructor is unnecessary.
- Improves clarity and reduces accidental misuse of async control flow.

**Automations**

- ESLint: [`no-async-promise-executor`](https://eslint.org/docs/latest/rules/no-async-promise-executor)

---

**[⬆ back to top](#table-of-contents)**

#### `no-case-declarations`

**Wrap `let`, `const`, `function`, and `class` inside braces when declared in `case` or `default` clauses.**

```ts
// ❌ Bad: lexical declarations without block scope
switch (type) {
  case 'x':
    let x = 1;
    break;
  case 'y':
    const y = 2;
    break;
  case 'z':
    function handle() {}
    break;
}

// ✅ Good: declarations scoped within blocks
switch (type) {
  case 'x': {
    let x = 1;
    break;
  }
  case 'y': {
    const y = 2;
    break;
  }
  case 'z': {
    function handle() {}
    break;
  }
}
```

**Rationale**

- Prevents temporal dead zone errors and inconsistent initialization.
- Avoids hoisting pitfalls across case clauses.
- Enforces clearer, safer scoping within `switch` blocks.

**Automations**

- ESLint: [`no-case-declarations`](https://eslint.org/docs/latest/rules/no-case-declarations)

---

**[⬆ back to top](#table-of-contents)**

#### `no-class-assign`

**Prevent accidental reassignment of class identifiers after declaration.**

```ts
// ❌ Bad: Reassigning a class name
class A {}
A = 42;

// ✅ Good: Use a separate variable if reassignment is needed
let A = class {};
A = 42;
```

**Rationale**

- Avoids logical errors from reassigning class identifiers.
- Ensures class names remain immutable for clarity and safety.
- Prevents shadowing issues and unintended side effects in methods or scopes.

**Automations**

- ESLint: [`no-class-assign`](https://eslint.org/docs/latest/rules/no-class-assign)
- TypeScript Compiler: `ts(2629)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-compare-neg-zero`

**Use `Object.is(x, -0)` instead of `x === -0` to correctly distinguish negative zero.**

```ts
// ❌ Bad: fails to detect -0 uniquely
if (x === -0) {
  console.log('Negative zero');
}

// ✅ Good: safely detects -0 only
if (Object.is(x, -0)) {
  console.log('Negative zero');
}
```

**Rationale**

- `===` treats `-0` and `0` as equal, causing incorrect logic.
- `Object.is` is the only reliable way to distinguish `-0` from `0`.
- Prevents subtle numeric edge-case bugs.

**Automations**

- ESLint: [`no-compare-neg-zero`](https://eslint.org/docs/latest/rules/no-compare-neg-zero)

---

**[⬆ back to top](#table-of-contents)**

#### `no-cond-assign`

**Wrap assignment expressions in parentheses when used in conditions, or use comparisons to avoid logic errors.**

```ts
// ❌ Bad: likely mistaken assignment
if (x = 0) {
  doSomething();
}

// ✅ Good: explicit comparison
if (x === 0) {
  doSomething();
}

// ✅ Good: intentional assignment wrapped in parentheses
while ((node = node.parentNode)) {
  process(node);
}
```

**Rationale**

- Prevents bugs from mistakenly using `=` instead of `===`.
- Makes intentional assignment expressions stand out.
- Aligns with standard linting expectations and best practices.

**Automations**

- ESLint: [`no-cond-assign`](https://eslint.org/docs/latest/rules/no-cond-assign)

---

**[⬆ back to top](#table-of-contents)**

#### `no-const-assign`

**Disallow any reassignment or mutation attempts on variables declared with `const`.**

```ts
// ❌ Bad: Reassigning a const variable
const a = 0;
a = 1;

// ✅ Good: Use `const` for immutable bindings only
const a = 0;
console.log(a);
```

**Rationale**

- `const` variables are read-only and must not be reassigned.
- Reassignment attempts result in runtime errors in ES2015+ environments.
- Prevents false assumptions about mutability and reinforces safer coding practices.

**Automations**

- ESLint: [`no-const-assign`](https://eslint.org/docs/latest/rules/no-const-assign)
- TypeScript Compiler: `ts(2588)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-constant-binary-expression`

**Prevent always-true/false comparisons and logical expressions that never short-circuit to avoid misleading logic.**

```ts
// ❌ Bad: always returns false due to reference inequality
const isEmpty = x === [];

// ❌ Bad: short-circuit is pointless; `true || ...` always evaluates to true
const result = value || true || fallback;

// ✅ Good: use value length to check for emptiness
const isEmpty = x.length === 0;

// ✅ Good: wrap expressions to preserve correct precedence
const value = (condition ? a : b) || fallback;
```

**Rationale**

- Avoids expressions that mislead developers into thinking logic is dynamic when it is not.
- Prevents faulty conditions that silently always evaluate the same.
- Helps catch precedence errors and misuse of reference comparisons.

**Automations**

- ESLint: [`no-constant-binary-expression`](https://eslint.org/docs/latest/rules/no-constant-binary-expression)

---

**[⬆ back to top](#table-of-contents)**

#### `no-constant-condition`

**Disallow constant test expressions in conditionals and loops to avoid logic errors and unfinished debug code.**

```ts
// ❌ Bad: will never run due to constant false
if (false) {
  doSomethingUnfinished();
}

// ❌ Bad: loop runs forever due to constant truthy condition
while (typeof x) {
  doSomethingForever();
}

// ✅ Good: loop exits based on a dynamic condition
while (typeof x === 'undefined') {
  doSomething();
}

// ✅ Good: condition checks actual value
if (input === 'hello' || input === 'bye') {
  output(input);
}
```

**Rationale**

- Avoids logic that appears dynamic but behaves statically.
- Helps prevent unfinished placeholder logic from reaching production.
- Encourages explicitly intentional infinite loops or ternary branches.

**Automations**

- ESLint: [`no-constant-condition`](https://eslint.org/docs/latest/rules/no-constant-condition)

---

**[⬆ back to top](#table-of-contents)**

#### `no-control-regex`

**Disallow control characters in regular expressions to prevent likely errors and unintended matches.**

```ts
// ❌ Bad: matches invisible ASCII characters (likely unintended)
const pattern1 = /\x0C/;
const pattern2 = /\u0000/;
const pattern3 = /\u{1F}/u;
const pattern4 = new RegExp('\x0C');

// ✅ Good: matches printable or clearly defined control characters
const pattern1 = /\x20/;
const pattern2 = /\t/;
const pattern3 = new RegExp('\\n');
```

**Rationale**

- Prevents confusing and likely erroneous RegExp behavior.
- Improves code readability and intent clarity.
- Avoids silent failures from matching invisible characters.

**Automations**

- ESLint: [`no-control-regex`](https://eslint.org/docs/latest/rules/no-control-regex)

---

**[⬆ back to top](#table-of-contents)**

#### `no-debugger`

**Remove `debugger` statements to avoid unintended code pauses and improve production readiness.**

```ts
// ❌ Bad: halts code execution during debugging
function isTruthy(x) {
  debugger;
  return Boolean(x);
}

// ✅ Good: replaces debugger with a comment or breakpoint
function isTruthy(x) {
  return Boolean(x); // set a breakpoint here if needed
}
```

**Rationale**

- Prevents accidental pauses in production code.
- Avoids unexpected side effects in deployed environments.
- Encourages use of modern debugging tools and breakpoints.

**Automations**

- ESLint: [`no-debugger`](https://eslint.org/docs/latest/rules/no-debugger)

---

**[⬆ back to top](#table-of-contents)**

#### `no-delete-var`

**Disallow using the `delete` operator on variables, only use it for object properties.**

```ts
// ❌ Bad: trying to delete a declared variable
let count = 10;
delete count;

// ✅ Good: deleting a dynamic object property
const user = { age: 30 };
delete user.age;
```

**Rationale**

- `delete` is intended for object properties, not variables.
- Using it on variables can silently fail or throw errors in strict mode.
- Helps avoid misleading code and runtime surprises.

**Automations**

- ESLint: [`no-delete-var`](https://eslint.org/docs/latest/rules/no-delete-var)

---

**[⬆ back to top](#table-of-contents)**

#### `no-dupe-args`

**Disallow declaring multiple parameters with the same name in function declarations or expressions.**

```ts
// ❌ Bad: Duplicate parameter names shadow earlier ones
function greet(name, name) {
  console.log(name);
}

// ✅ Good: All parameter names are unique
function greet(firstName, lastName) {
  console.log(firstName, lastName);
}
```

**Rationale**

- Duplicate arguments cause confusion due to shadowing.
- May indicate a typo or logic error.
- Results in runtime or syntax errors in strict mode.

**Automations**

- ESLint: [`no-dupe-args`](https://eslint.org/docs/latest/rules/no-dupe-args)
- TypeScript Compiler: `ts(2300)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-dupe-class-members`

**Disallow defining more than one class member with the same name in a class body.**

```ts
// ❌ Bad: Duplicate method name, last one silently overwrites the first
class User {
  greet() {
    console.log('Hello');
  }

  greet() {
    console.log('Goodbye');
  }
}

// ✅ Good: Each class member has a unique name
class User {
  greet() {
    console.log('Hello');
  }

  farewell() {
    console.log('Goodbye');
  }
}
```

**Rationale**

- Prevents accidental overwriting of methods or fields.
- Improves class readability and reduces unintended behavior.
- Helps catch logic errors or typos early.

**Automations**

- ESLint: [`no-dupe-class-members`](https://eslint.org/docs/latest/rules/no-dupe-class-members)
- TypeScript Compiler: `ts(2300)` `ts(2393)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-dupe-else-if`

**Prevent unreachable branches by ensuring no two `else-if` conditions evaluate the same.**

```ts
// ❌ Bad: duplicate condition makes `baz()` unreachable
if (isFoo(x)) {
  foo();
} else if (isFoo(x)) {
  bar();
}

// ✅ Good: each branch checks a unique condition
if (isFoo(x)) {
  foo();
} else if (isBar(x)) {
  bar();
}
```

**Rationale**

- Prevents unreachable code due to repeated conditions.
- Avoids logical mistakes from oversight in chained conditionals.
- Enhances code clarity and control flow predictability.

**Automations**

- ESLint: [`no-dupe-else-if`](https://eslint.org/docs/latest/rules/no-dupe-else-if)

---

**[⬆ back to top](#table-of-contents)**

#### `no-dupe-keys`

**Avoid defining multiple properties with the same key in an object to prevent silent overwrites.**

```ts
// ❌ Bad: The second 'bar' overwrites the first
const config = {
  bar: 'baz',
  bar: 'qux',
};

// ✅ Good: Unique keys in the object
const config = {
  bar: 'baz',
  qux: 'quux',
};
```

**Rationale**

- Prevents unexpected overwrites in object definitions.
- Ensures object key declarations are explicit and error-free.
- Helps catch typos and merge mistakes early.

**Automations**

- ESLint: [`no-dupe-keys`](https://eslint.org/docs/latest/rules/no-dupe-keys)
- TypeScript Compiler: `ts(1117)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-duplicate-case`

**Prevent unreachable branches by ensuring each `case` in a `switch` has a unique test expression.**

```ts
// ❌ Bad: duplicate case makes the second `1` unreachable
switch (value) {
  case 1:
    doSomething();
    break;
  case 2:
    doSomethingElse();
    break;
  case 1:
    handleAgain(); // unreachable
    break;
}

// ✅ Good: all cases are distinct
switch (value) {
  case 1:
    doSomething();
    break;
  case 2:
    doSomethingElse();
    break;
  case 3:
    handleAnother();
    break;
}
```

**Rationale**

- Prevents unreachable case blocks.
- Catches common copy-paste errors in switch-case logic.
- Makes control flow easier to reason about.

**Automations**

- ESLint: [`no-duplicate-case`](https://eslint.org/docs/latest/rules/no-duplicate-case)

---

**[⬆ back to top](#table-of-contents)**

#### `no-empty`

**Disallow empty block statements to reduce confusion and catch incomplete refactors.**

```ts
// ❌ Bad: empty blocks provide no value and may hide mistakes
if (isValid) {
}

try {
  doSomething();
} catch (error) {}

// ✅ Good: comments clarify intentional emptiness
if (isValid) {
  // intentionally left blank
}

try {
  doSomething();
} catch (error) {
  // handle silently
}
```

**Rationale**

- Highlights incomplete or accidental blocks.
- Makes developer intent explicit when no action is needed.
- Encourages better code readability and maintenance.

**Automations**

- ESLint: [`no-empty`](https://eslint.org/docs/latest/rules/no-empty)

---

**[⬆ back to top](#table-of-contents)**

#### `no-empty-character-class`

**Disallow `[]` in regex patterns, as they never match and likely indicate a mistake.**

```ts
// ❌ Bad: regex pattern has an empty character class
/^abc[]/.test('abc');

// ✅ Good: use a valid character class or remove it
/^abc[a-z]/.test('abcd');
/^abc/.test('abc');
```

**Rationale**

- Empty character classes (`[]`) are nonsensical and never match.
- Often the result of typos or incomplete edits in regex literals.
- Prevents misleading expressions that appear functional but are inert.

**Automations**

- ESLint: [`no-empty-character-class`](https://eslint.org/docs/latest/rules/no-empty-character-class)

---

**[⬆ back to top](#table-of-contents)**

#### `no-empty-pattern`

**Disallow `{}` or `[]` as destructuring patterns when they do not bind variables.**

```ts
// ❌ Bad: destructuring doesn't extract any variables
const {} = foo;
const {
  a: {},
} = bar;

// ✅ Good: destructuring creates meaningful bindings
const { a = {} } = bar;
const {
  a: { b },
} = bar;
```

**Rationale**

- Empty destructuring patterns do nothing and often indicate a mistake.
- Clarifies developer intent and prevents misleading constructs.
- Encourages meaningful variable bindings in destructuring.

**Automations**

- ESLint: [`no-empty-pattern`](https://eslint.org/docs/latest/rules/no-empty-pattern)

---

**[⬆ back to top](#table-of-contents)**

#### `no-empty-static-block`

**Disallow empty static blocks in classes to avoid confusion and incomplete refactors.**

```ts
// ❌ Bad: static block serves no purpose
class Foo {
  static {}
}

// ✅ Good: static block contains logic or clarifying comment
class Foo {
  static {
    initialize();
  }
}

class Bar {
  static {
    // no initialization required
  }
}
```

**Rationale**

- Prevents meaningless static blocks.
- Helps identify unfinished or accidental edits.
- Encourages intentional use of class static initialization.

**Automations**

- ESLint: [`no-empty-static-block`](https://eslint.org/docs/latest/rules/no-empty-static-block)

---

**[⬆ back to top](#table-of-contents)**

#### `no-ex-assign`

**Disallow reassigning the exception variable in `catch` clauses to preserve original error context.**

```ts
// ❌ Bad: original error is overwritten and lost
try {
  throw new Error('oops');
} catch (e) {
  e = 42;
}

// ✅ Good: preserve the caught exception
try {
  throw new Error('oops');
} catch (e) {
  const fallback = 42;
}
```

**Rationale**

- Prevents accidental loss of the caught exception.
- Ensures reliable debugging and error reporting.
- Avoids confusing behavior in `catch` scopes.

**Automations**

- ESLint: [`no-ex-assign`](https://eslint.org/docs/latest/rules/no-ex-assign)

---

**[⬆ back to top](#table-of-contents)**

#### `no-extra-boolean-cast`

**Remove redundant boolean casts in contexts that already coerce values to boolean.**

```ts
// ❌ Bad: double negation is pointless in boolean contexts
if (!!value) {
  doSomething();
}

// ✅ Good: direct value is coerced automatically
if (value) {
  doSomething();
}
```

**Rationale**

- Eliminates visual clutter from double negation or `Boolean(...)`.
- Leverages JS's implicit coercion in conditionals.
- Clarifies intent without misleading wrappers.

**Automations**

- ESLint: [`no-extra-boolean-cast`](https://eslint.org/docs/latest/rules/no-extra-boolean-cast)

---

**[⬆ back to top](#table-of-contents)**

#### `no-fallthrough`

**Always add a comment when a `case` block in a `switch` statement intentionally falls through.**

```ts
// ❌ Bad: unintentional fallthrough not marked
switch (x) {
  case 1:
    log();
  case 2:
    warn();
    break;
}

// ✅ Good: intentional fallthrough is clearly commented
switch (x) {
  case 1:
    log();
    // falls through
  case 2:
    warn();
    break;
}
```

**Rationale**

- Prevents unintentional case fallthrough bugs.
- Makes control flow clear and self-documenting.
- Encourages better use of `break`, `return`, or `throw`.

**Automations**

- ESLint: [`no-fallthrough`](https://eslint.org/docs/latest/rules/no-fallthrough)

---

**[⬆ back to top](#table-of-contents)**

#### `no-func-assign`

**Prevent bugs by disallowing reassignment of functions declared using `function` declarations.**

```ts
// ❌ Bad: Function declaration is reassigned
function greet() {}
greet = sayHello;

// ✅ Good: Function expression assigned to variable, then reassigned
let greet = function () {};
greet = sayHello;
```

**Rationale**

- Prevents unintentional overwriting of named functions.
- Preserves function identity for debugging and stack traces.
- Avoids confusion in recursive or reused function logic.

**Automations**

- ESLint: [`no-func-assign`](https://eslint.org/docs/latest/rules/no-func-assign)
- TypeScript Compiler: `ts(2630)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-global-assign`

**Avoid assigning to built-in global objects to prevent breaking core functionality.**

```ts
// ❌ Bad: overwriting a global object
Object = null;
undefined = 1;

// ✅ Good: declaring local variables
let Object = null;
const undef = 1;
```

**Rationale**

- Prevents accidental overwriting of globals like `Object`, `window`, or `undefined`.
- Safeguards core JS behavior and host environment APIs.
- Reduces risk from scope confusion and name shadowing.

**Automations**

- ESLint: [`no-global-assign`](https://eslint.org/docs/latest/rules/no-global-assign)

---

**[⬆ back to top](#table-of-contents)**

#### `no-implied-eval`

**Disallow passing strings to `setTimeout`, `setInterval`, or `execScript` to avoid implicit code execution.**

```ts
// ❌ Bad: Using string as code input
setTimeout('doSomething()', 100);

// ✅ Good: Passing a function directly
setTimeout(() => doSomething(), 100);
```

**Rationale**

- Prevents execution of arbitrary code strings.
- Improves performance by avoiding unnecessary parsing.
- Reduces risk of injection vulnerabilities.

**Automations**

- ESLint: [`no-implied-eval`](https://eslint.org/docs/latest/rules/no-implied-eval)

---

**[⬆ back to top](#table-of-contents)**

#### `no-import-assign`

**Prevent assigning, incrementing, or mutating ES module bindings to avoid runtime errors.**

```ts
// ❌ Bad: Attempting to reassign imported bindings
import mod, { named } from './mod.mjs';
mod = 1;
named = 2;

// ✅ Good: Mutating properties of imported bindings
import mod, { named } from './mod.mjs';
mod.prop = 1;
named.prop = 2;
```

**Rationale**

- Imported bindings are read-only and reassigning them causes runtime errors.
- Maintains module integrity and predictability.
- Avoids subtle bugs especially in environments with `Object.freeze()` semantics.

**Automations**

- ESLint: [`no-import-assign`](https://eslint.org/docs/latest/rules/no-import-assign)
- TypeScript Compiler: `ts(2540)` `ts(2632)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-invalid-regexp`

**Avoid using RegExp constructors with invalid patterns or unsupported flags.**

```ts
// ❌ Bad: invalid regex pattern or unsupported flag
RegExp('[');
RegExp('.', 'z');
new RegExp('\\');

// ✅ Good: valid regex patterns and flags
RegExp('.');
new RegExp('.', 'g');
```

**Rationale**

- Prevents runtime `SyntaxError` from malformed patterns or flags.
- Ensures consistent validation across environments.
- Encourages early error detection during static analysis.

**Automations**

- ESLint: [`no-invalid-regexp`](https://eslint.org/docs/latest/rules/no-invalid-regexp)

---

**[⬆ back to top](#table-of-contents)**

#### `no-irregular-whitespace`

**Avoid irregular Unicode whitespace characters in code, except within strings, comments, regexps, templates, or JSX when explicitly configured.**

```ts
// ❌ Bad: invisible whitespace in function declarations or code
const func /*<ENSP>*/= () => 'test';
function /*<NBSP>*/myFunc() {}

// ✅ Good: irregular whitespace only within strings
const str = ' <NBSP> visible in string';
const regex = /test <NBSP>/; // when allowed
```

**Rationale**

- Prevents syntax errors and hidden bugs from invisible characters.
- Avoids issues with parsers and unexpected behavior.
- Makes code easier to read and maintain.

**Automations**

- ESLint: [`no-irregular-whitespace`](https://eslint.org/docs/latest/rules/no-irregular-whitespace)

---

**[⬆ back to top](#table-of-contents)**

#### `no-loss-of-precision`

**Avoid numeric literals that exceed the precision limits of JavaScript's Number type.**

```ts
// ❌ Bad: values exceed max safe integer range and lose precision
const a = 9007199254740993;
const b = 0x20000000000001;

// ✅ Good: values stay within safe integer range or use scientific notation
const a = 9007199254740991;
const b = 123e34;
```

**Rationale**

- Prevents silent rounding errors at runtime.
- Ensures numeric literals behave as expected.
- Aligns with IEEE 754 double-precision limits in JavaScript.

**Automations**

- ESLint: [`no-loss-of-precision`](https://eslint.org/docs/latest/rules/no-loss-of-precision)

---

**[⬆ back to top](#table-of-contents)**

#### `no-misleading-character-class`

**Avoid placing characters composed of multiple Unicode code points inside character classes.**

```ts
// ❌ Bad: multi-code-point emoji incorrectly matched by character class
/^[👶🏻]$/u.test('👶🏻'); // false

// ✅ Good: use escape sequences or single-code-point matches
/^[\u{1F476}\u{1F3FB}]$/u.test('👶🏻'); // true
```

**Rationale**

- Prevents false negatives in Unicode pattern matches.
- Addresses issues with emojis, modifiers, and surrogate pairs.
- Ensures RegExp semantics match visual intent.

**Automations**

- ESLint: [`no-misleading-character-class`](https://eslint.org/docs/latest/rules/no-misleading-character-class)

---

**[⬆ back to top](#table-of-contents)**

#### `no-new-native-nonconstructor`

**Disallow using the `new` keyword with native functions like `Symbol` and `BigInt` which are not constructors.**

```ts
// ❌ Bad: Using `new` with native non-constructors
const foo = new Symbol('foo');
const bar = new BigInt(123);

// ✅ Good: Calling these as regular functions
const foo = Symbol('foo');
const bar = BigInt(123);
```

**Rationale**

- Prevents runtime `TypeError` from invoking non-constructors with `new`.
- Reflects modern JavaScript semantics aligned with ECMAScript specs.
- Helps avoid confusion caused by uppercase-named globals that aren't constructors.

**Automations**

- ESLint: [`no-new-native-nonconstructor`](https://eslint.org/docs/latest/rules/no-new-native-nonconstructor)
- TypeScript Compiler: `ts(7009)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-nonoctal-decimal-escape`

**Disallow legacy `\8` and `\9` string escapes to prevent confusion and non-strict compatibility issues.**

```ts
// ❌ Bad: using legacy non-octal decimal escapes
const str1 = "\8";
const str2 = "Item 9: \9 is last.";

// ✅ Good: use regular characters or Unicode escapes
const str1 = "8";
const str2 = "Item 9: 9 is last.";
const escaped = "Use \\8 and \\9 for literals.";
```

**Rationale**

- `\8` and `\9` are legacy escapes with no actual escaping effect.
- Not valid in strict mode or non-browser environments.
- Misleading syntax that appears to perform an escape.

**Automations**

- ESLint: [`no-nonoctal-decimal-escape`](https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape)

---

**[⬆ back to top](#table-of-contents)**

#### `no-obj-calls`

**Disallow invoking or constructing non-callable global objects like `Math`, `JSON`, `Reflect`, `Atomics`, or `Intl`.**

```ts
// ❌ Bad: These built-ins are not callable or constructable
const math = Math();
const newMath = new Math();
const json = JSON();
const newJSON = new JSON();
const reflect = Reflect();
const newReflect = new Reflect();
const atomics = Atomics();
const newAtomics = new Atomics();
const intl = Intl();
const newIntl = new Intl();

// ✅ Good: Use their methods or constructors instead
const area = Math.PI * r * r;
const data = JSON.parse('{}');
const result = Reflect.get({ x: 1 }, 'x');
const flag = Atomics.load(arr, 0);
const segmenter = new Intl.Segmenter('en', { granularity: 'word' });
```

**Rationale**

- These objects are not callable, they throw at runtime.
- Prevents incorrect assumptions based on capitalization (e.g., `Math()` vs `Math.PI`).
- Encourages proper use of static methods and constructors.

**Automations**

- ESLint: [`no-obj-calls`](https://eslint.org/docs/latest/rules/no-obj-calls)
- TypeScript Compiler: `ts(2349)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-octal`

**Avoid using legacy octal literals with a leading zero to prevent ambiguity and bugs.**

```ts
// ❌ Bad: legacy octal literal with leading zero
const fileMode = 0755;

// ✅ Good: explicit base-8 literal using modern syntax
const fileMode = 0o755;
```

**Rationale**

- Legacy octal syntax (`0NNN`) is confusing and error-prone.
- ES5 deprecated it; ES strict mode forbids it.
- Modern `0o` syntax is explicit and safe.

**Automations**

- ESLint: [`no-octal`](https://eslint.org/docs/latest/rules/no-octal)

---

**[⬆ back to top](#table-of-contents)**

#### `no-prototype-builtins`

**Call `hasOwnProperty`, `isPrototypeOf`, and `propertyIsEnumerable` from `Object.prototype` to avoid shadowing issues.**

```ts
// ❌ Bad: object might shadow built-in methods
if (obj.hasOwnProperty('key')) {
  // ...
}

// ✅ Good: calls method safely from Object.prototype
if (Object.prototype.hasOwnProperty.call(obj, 'key')) {
  // ...
}
```

**Rationale**

- Avoids bugs when objects shadow built-ins.
- Prevents runtime errors with objects created via `Object.create(null)`.
- Defends against prototype pollution attacks.

**Automations**

- ESLint: [`no-prototype-builtins`](https://eslint.org/docs/latest/rules/no-prototype-builtins)

---

**[⬆ back to top](#table-of-contents)**

#### `no-redeclare`

**Prevent redeclaring variables within the same scope to reduce confusion and avoid potential bugs.**

```ts
// ❌ Bad: Variable is declared more than once in the same scope
var a = 3;
var a = 10;

function test() {
  var b = 1;
  var b = 2;
}

class C {
  static {
    var c = 3;
    var c = 4;
  }
}

// ✅ Good: Variable is declared once, then reassigned
var a = 3;
a = 10;

function test() {
  var b = 1;
  b = 2;
}
```

**Rationale**

- Redeclaring a variable with `var` can obscure program logic.
- Helps avoid accidental bugs from reuse in complex scopes.
- Reduces ambiguity in class or function blocks.

**Automations**

- ESLint: [`no-redeclare`](https://eslint.org/docs/latest/rules/no-redeclare)
- TypeScript Compiler: `ts(2451)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-regex-spaces`

**Use explicit quantifiers for repeated spaces in regular expressions to improve clarity and reduce errors.**

```ts
// ❌ Bad: unclear number of spaces
const re = /foo   bar/;

// ✅ Good: clearly matches exactly 3 spaces
const re = /foo {3}bar/;
```

**Rationale**

- Makes regex intent clearer to readers.
- Prevents off-by-one errors from hidden whitespace.
- Encourages use of quantifiers (`{n}`) for better maintainability.

**Automations**

- ESLint: [`no-regex-spaces`](https://eslint.org/docs/latest/rules/no-regex-spaces)

---

**[⬆ back to top](#table-of-contents)**

#### `no-self-assign`

**Disallow assigning a variable or property to itself, as it has no effect and may indicate an incomplete refactor.**

```ts
// ❌ Bad: redundant assignment has no effect
foo = foo;
[a, b] = [a, b];

// ✅ Good: assignment changes values or has side effects
foo = bar;
[a, b] = [b, a];
```

**Rationale**

- Helps catch incomplete or erroneous refactors.
- Removes dead code that serves no functional purpose.
- Avoids confusion for future readers of the code.

**Automations**

- ESLint: [`no-self-assign`](https://eslint.org/docs/latest/rules/no-self-assign)

---

**[⬆ back to top](#table-of-contents)**

#### `no-setter-return`

**Prevent returning values from setter functions, as the return value is always ignored.**

```ts
// ❌ Bad: Setter returns a value, which is ignored
class Foo {
  set value(val) {
    this._val = val;
    return val;
  }
}

// ✅ Good: Setter updates a value without returning
class Foo {
  set value(val) {
    this._val = val;
  }
}
```

**Rationale**

- Return values from setters are ignored by JavaScript.
- Suggests mistaken use of return logic in control flow.
- Prevents misleading or dead code.

**Automations**

- ESLint: [`no-setter-return`](https://eslint.org/docs/latest/rules/no-setter-return)
- TypeScript Compiler: `ts(2408)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-shadow-restricted-names`

**Do not declare variables that shadow built-in global identifiers like `undefined`, `NaN`, `Infinity`, `eval`, or `arguments`.**

```ts
// ❌ Bad: shadows the global `undefined`
const undefined = 'foo';

// ❌ Bad: masks `Infinity` with a function parameter
!function (Infinity) {};

// ✅ Good: alias avoids shadowing
import { undefined as undef } from 'bar';

// ✅ Good: uses global `globalThis` safely
const foo = globalThis;
```

**Rationale**

- Preserves predictable behavior of global identifiers.
- Avoids confusing scope bugs and misleading code.
- Aligns with strict mode and language specifications.

**Automations**

- ESLint: [`no-shadow-restricted-names`](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)

---

**[⬆ back to top](#table-of-contents)**

#### `no-sparse-arrays`

**Avoid using array literals with missing elements, as they create confusing empty slots.**

```ts
// ❌ Bad: creates an array with holes
const colors = ['red', , 'blue'];

// ✅ Good: use explicit values or constructors
const colors = ['red', 'blue'];
const items = new Array(3);
```

**Rationale**

- Sparse arrays can be misleading, array length includes holes.
- Makes iteration and index assumptions error-prone.
- Reduces ambiguity about developer intent.

**Automations**

- ESLint: [`no-sparse-arrays`](https://eslint.org/docs/latest/rules/no-sparse-arrays)

---

**[⬆ back to top](#table-of-contents)**

#### `no-this-before-super`

**Disallow use of `this` or `super` before calling `super()` in subclass constructors.**

```ts
// ❌ Bad: accessing `this` before `super()` causes runtime error
class A extends B {
  constructor() {
    this.val = 42;
    super();
  }
}

// ✅ Good: `super()` is called before using `this`
class A extends B {
  constructor() {
    super();
    this.val = 42;
  }
}
```

**Rationale**

- Prevents runtime `ReferenceError` in subclass constructors.
- Enforces correct order of initialization in derived classes.
- Helps avoid confusing and brittle code in class hierarchies.

**Automations**

- ESLint: [`no-this-before-super`](https://eslint.org/docs/latest/rules/no-this-before-super)
- TypeScript Compiler: `ts(2376)` `ts(17009)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-throw-literal`

**Throw `Error` objects instead of literals or non-error expressions to preserve stack trace and semantic clarity.**

```ts
// ❌ Bad: throwing a literal loses context and debugging info
throw 'Something went wrong';
throw 404;
throw null;

// ✅ Good: throwing an Error instance retains call stack and meaning
throw new Error('Something went wrong');
const err = new Error('Details here');
throw err;
```

**Rationale**

- Ensures thrown values carry useful stack traces.
- Improves error consistency across codebases.
- Avoids silently discarding error context or structure.

**Automations**

- ESLint: [`no-throw-literal`](https://eslint.org/docs/latest/rules/no-throw-literal) [`@typescript-eslint/only-throw-error`](https://typescript-eslint.io/rules/only-throw-error)

---

**[⬆ back to top](#table-of-contents)**

#### `no-undef`

**Avoid referencing undeclared variables to prevent ReferenceErrors and accidental global usage.**

```ts
// ❌ Bad: undeclared variables are used
const foo = someFunction();
const bar = a + 1;

// ✅ Good: globals are explicitly declared
/* global someFunction, a */
const foo = someFunction();
const bar = a + 1;
```

**Rationale**

- Prevents runtime `ReferenceError`s due to typos or undeclared globals.
- Encourages explicit declaration of dependencies and global usage.
- Helps maintain modular and predictable code.

**Automations**

- ESLint: [`no-undef`](https://eslint.org/docs/latest/rules/no-undef)
- TypeScript Compiler: `ts(2304)` `ts(2552)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-unexpected-multiline`

**Avoid code where line breaks cause misleading interpretation due to automatic semicolon insertion (ASI).**

```ts
// ❌ Bad: looks like two statements but isn't
const foo = bar
(1 || 2).baz();

// ✅ Good: explicitly separate the statements
const foo = bar;
(1 || 2).baz();
```

**Rationale**

- ASI can merge distinct lines into a single, unintended expression.
- Code may look valid but throw at runtime.
- Especially dangerous in no-semicolon styles.

**Automations**

- ESLint: [`no-unexpected-multiline`](https://eslint.org/docs/latest/rules/no-unexpected-multiline)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unreachable`

**Avoid placing code after `return`, `throw`, `break`, or `continue` since it will never run.**

```ts
// ❌ Bad: Code after return is unreachable
function calculate() {
  return 42;
  console.log('This never runs');
}

// ✅ Good: Code is placed before return and executes properly
function calculate() {
  console.log('Calculating...');
  return 42;
}
```

**Rationale**

- Unreachable code is often the result of refactoring mistakes.
- Eliminates dead code, improving readability.
- Catches logic errors early in control flow.

**Automations**

- ESLint: [`no-unreachable`](https://eslint.org/docs/latest/rules/no-unreachable)
- TypeScript Compiler: `ts(7027)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-unsafe-finally`

**Disallow `return`, `throw`, `break`, or `continue` inside `finally` blocks to prevent unexpected behavior.**

```ts
// ❌ Bad: finally overrides return from try
function getValue() {
  try {
    return 1;
  } finally {
    return 2;
  }
}

// ✅ Good: finally performs cleanup without affecting control flow
function getValue() {
  try {
    return 1;
  } finally {
    console.log('cleanup');
  }
}
```

**Rationale**

- `finally` executes after `try`/`catch` but before their control flow completes.
- Return or throw in `finally` overrides `try`/`catch` logic.
- This causes silent bugs and unexpected program behavior.

**Automations**

- ESLint: [`no-unsafe-finally`](https://eslint.org/docs/latest/rules/no-unsafe-finally)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unsafe-negation`

**Wrap negations with parentheses when used with `in` or `instanceof` to clarify intent and avoid logic bugs.**

```ts
// ❌ Bad: Negation is applied to the wrong operand
if (!key in object) {
}
if (!obj instanceof Type) {
}

// ✅ Good: Parentheses clarify the intended logic
if (!(key in object)) {
}
if (!(obj instanceof Type)) {
}
```

**Rationale**

- Prevents subtle bugs due to JavaScript operator precedence.
- Ensures clear intent when using `!` with `in` or `instanceof`.
- Avoids incorrect logic evaluation and unintended truthy/falsy conversions.

**Automations**

- ESLint: [`no-unsafe-negation`](https://eslint.org/docs/latest/rules/no-unsafe-negation)
- TypeScript Compiler: `ts(2322)` `ts(2358)` `ts(2365)`

---

**[⬆ back to top](#table-of-contents)**

#### `no-unsafe-optional-chaining`

**Avoid using optional chaining where `undefined` short-circuiting leads to TypeErrors.**

```ts
// ❌ Bad: unsafe method call after short-circuit
(obj?.foo)();

// ✅ Good: chain safely with another optional call
obj?.foo?.();
```

**Rationale**

- Optional chaining can evaluate to `undefined`, but JS allows continued operations like function calls or property access.
- These operations can throw runtime `TypeError`s if not guarded.
- Encourages safe, predictable control flow.

**Automations**

- ESLint: [`no-unsafe-optional-chaining`](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unused-expressions`

**Avoid writing expressions that produce no side effects or values to prevent logical mistakes and code confusion.**

```ts
// ❌ Bad: These expressions don’t do anything
0;
a && b;
('unused string');

// ✅ Good: These cause effects or assign values
a();
a = 1;
new Thing();
('strict mode');
```

**Rationale**

- Prevents logical bugs due to accidental omission of assignments or effects.
- Clarifies developer intent in code by disallowing meaningless statements.
- Helps optimize dead code elimination during bundling or compilation.

**Automations**

- ESLint: [`no-unused-expressions`](https://eslint.org/docs/latest/rules/no-unused-expressions) [`@typescript-eslint/no-unused-expressions`](https://typescript-eslint.io/rules/no-unused-expressions)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unused-labels`

**Avoid defining labels that are not referenced by `break` or `continue` statements.**

```ts
// ❌ Bad: label `A` is declared but never used
A: {
  doSomething();
}

// ✅ Good: label `loop` is used in a break statement
loop: for (const item of list) {
  if (shouldSkip(item)) break loop;
  handle(item);
}
```

**Rationale**

- Prevents confusion from misleading or leftover labels.
- Reduces visual noise and simplifies control flow.
- Helps detect incomplete refactoring or copy-paste mistakes.

**Automations**

- ESLint: [`no-unused-labels`](https://eslint.org/docs/latest/rules/no-unused-labels)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unused-private-class-members`

**Avoid declaring private class fields or methods that are never read, accessed, or called.**

```ts
// ❌ Bad: unused private member
class MyClass {
  #count = 0;
}

// ✅ Good: private member is accessed
class MyClass {
  #count = 0;
  increment() {
    this.#count++;
  }
}
```

**Rationale**

- Keeps class definitions focused and maintainable.
- Helps avoid confusion from incomplete or abandoned code.
- Reduces noise and dead code in private scopes.

**Automations**

- ESLint: [`no-unused-private-class-members`](https://eslint.org/docs/latest/rules/no-unused-private-class-members)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unused-vars`

**Delete variables, parameters, and imports that are declared but never used.**

```ts
// ❌ Bad: 'count' is declared but never used
function increment(count: number) {
  return 1;
}

// ✅ Good: parameter is used
function increment(count: number) {
  return count + 1;
}
```

**Rationale**

- Avoids dead code and signals incomplete or outdated logic.
- Makes code more readable and reduces distractions.
- Prevents misleading assumptions about side effects or necessity.

**Automations**

- ESLint: [`no-unused-vars`](https://eslint.org/docs/latest/rules/no-unused-vars) [`@typescript-eslint/no-unused-vars`](https://typescript-eslint.io/rules/no-unused-vars)

---

**[⬆ back to top](#table-of-contents)**

#### `no-useless-backreference`

**Avoid RegExp backreferences that can never match because their target groups are unreachable.**

```ts
// ❌ Bad: backreference to a group in a different alternative
/^(?:(a)|\1b)$/

// ✅ Good: reference is in the same alternative and group appears before
/^(a)\1$/
```

**Rationale**

- Prevents logical errors in regular expressions.
- Avoids confusing zero-length matches from inert backreferences.
- Aligns regex behavior with developer intent.

**Automations**

- ESLint: [`no-useless-backreference`](https://eslint.org/docs/latest/rules/no-useless-backreference)

---

**[⬆ back to top](#table-of-contents)**

#### `no-useless-catch`

**Avoid `catch` clauses that only rethrow the caught error without handling it.**

```ts
// ❌ Bad: the catch block does nothing but rethrow
try {
  doWork();
} catch (e) {
  throw e;
}

// ✅ Good: the catch block adds logging before rethrowing
try {
  doWork();
} catch (e) {
  logError(e);
  throw e;
}
```

**Rationale**

- Eliminates noise from unnecessary error handling.
- Reduces nesting and improves readability.
- Encourages meaningful exception handling.

**Automations**

- ESLint: [`no-useless-catch`](https://eslint.org/docs/latest/rules/no-useless-catch)

---

**[⬆ back to top](#table-of-contents)**

#### `no-useless-escape`

**Remove backslashes used to escape characters that don't require it in strings or regex.**

```ts
// ❌ Bad: escaping non-special characters unnecessarily
const greeting = 'Hello\, world!';
const pattern = /\!/;

// ✅ Good: escaping needed for valid syntax or readability
const quote = 'He said, "don\'t."';
const escaped = /\!/g; // only if ! is required by custom tooling
```

**Rationale**

- Simplifies string and regex syntax.
- Improves readability by avoiding misleading backslashes.
- Avoids false impressions of special character handling.

**Automations**

- ESLint: [`no-useless-escape`](https://eslint.org/docs/latest/rules/no-useless-escape)

---

**[⬆ back to top](#table-of-contents)**

#### `no-var`

**Use `let` or `const` instead of `var` to avoid accidental reassignments and function-scope pitfalls.**

```ts
// ❌ Bad: var is function-scoped and prone to hoisting bugs
var count = 3;
if (true) {
  var count = 5;
}

// ✅ Good: let is block-scoped and avoids hoisting surprises
let count = 3;
if (true) {
  let count = 5;
}
```

**Rationale**

- Prevents accidental variable shadowing due to `var` hoisting.
- Encourages modern, block-scoped declarations.
- Reduces bugs caused by function-scoped variables in control flow.

**Automations**

- ESLint: [`no-var`](https://eslint.org/docs/latest/rules/no-var)

---

**[⬆ back to top](#table-of-contents)**

#### `no-with`

**Avoid `with` statements to prevent unpredictable scoping and reference ambiguity.**

```ts
// ❌ Bad: scope becomes ambiguous
with (obj) {
  value = key + suffix;
}

// ✅ Good: use explicit object access
const value = obj.key + suffix;
```

**Rationale**

- `with` obscures which variables are in scope.
- Makes static analysis and refactoring harder.
- Disallowed in strict mode.

**Automations**

- ESLint: [`no-with`](https://eslint.org/docs/latest/rules/no-with)
- TypeScript Compiler: `ts(1101)` `ts(2410)`

---

**[⬆ back to top](#table-of-contents)**

#### `prefer-const`

**Use `const` instead of `let` when a variable is never reassigned to clarify intent and reduce errors.**

```ts
// ❌ Bad: `let` used for a constant value
let count = 42;

// ✅ Good: `const` used for a constant value
const count = 42;
```

**Rationale**

- Makes code more predictable by signaling immutability.
- Reduces accidental reassignment bugs.
- Simplifies mental model by distinguishing mutable vs. immutable bindings.

**Automations**

- ESLint: [`prefer-const`](https://eslint.org/docs/latest/rules/prefer-const)

---

**[⬆ back to top](#table-of-contents)**

#### `prefer-promise-reject-errors`

**Reject promises using `Error` instances to maintain consistent and traceable error handling.**

```ts
// ❌ Bad: rejects with a string instead of an Error
Promise.reject('error');
new Promise((_, reject) => reject('bad thing'));

// ✅ Good: rejects with a proper Error object
Promise.reject(new Error('error'));
new Promise((_, reject) => reject(new Error('bad thing')));
```

**Rationale**

- Ensures stack traces and debugging metadata are preserved.
- Encourages consistent error handling patterns.
- Avoids surprises caused by primitive rejection values.

**Automations**

- ESLint: [`prefer-promise-reject-errors`](https://eslint.org/docs/latest/rules/prefer-promise-reject-errors) [`@typescript-eslint/prefer-promise-reject-errors`](https://typescript-eslint.io/rules/prefer-promise-reject-errors)

---

**[⬆ back to top](#table-of-contents)**

#### `prefer-rest-params`

**Use rest parameters instead of the `arguments` object for clarity and better array behavior.**

```ts
// ❌ Bad: Uses `arguments`, which lacks Array methods
function logAll() {
  console.log(arguments);
}

// ✅ Good: Uses rest parameters for cleaner, array-friendly code
function logAll(...args: unknown[]) {
  console.log(args);
}
```

**Rationale**

- Rest parameters are explicit and more readable than the special `arguments` object.
- `arguments` is array-like but lacks useful methods like `.map()` or `.filter()`.
- Encourages more modern, idiomatic JavaScript and TypeScript syntax.

**Automations**

- ESLint: [`prefer-rest-params`](https://eslint.org/docs/latest/rules/prefer-rest-params)

---

**[⬆ back to top](#table-of-contents)**

#### `prefer-spread`

**Use spread syntax when calling functions with an array of arguments for clarity and type safety.**

```ts
// ❌ Bad: Uses .apply() where spread is clearer
foo.apply(undefined, args);
obj.method.apply(obj, args);

// ✅ Good: Uses spread syntax for simpler variadic calls
foo(...args);
obj.method(...args);
```

**Rationale**

- Spread syntax is more readable and aligns with modern JavaScript.
- Avoids `this` confusion with `apply`.
- Allows better TypeScript type checking on arguments.

**Automations**

- ESLint: [`prefer-spread`](https://eslint.org/docs/latest/rules/prefer-spread)

---

**[⬆ back to top](#table-of-contents)**

#### `require-await`

**Flag `async` functions that do not contain an `await` to reduce unnecessary promise wrapping.**

```ts
// ❌ Bad: async without await offers no benefit
async function logData() {
  console.log('data');
}

callHandler(async () => {
  console.log('handler');
});

// ✅ Good: await is used as expected
async function loadData() {
  await fetch('/api/data');
}

callHandler(async () => {
  await process();
});
```

**Rationale**

- Avoids misleading `async` functions that never pause.
- Reduces unnecessary promise wrapping.
- Encourages meaningful use of `await`.

**Automations**

- ESLint: [`require-await`](https://eslint.org/docs/latest/rules/require-await) [`@typescript-eslint/require-await`](https://typescript-eslint.io/rules/require-await)

---

**[⬆ back to top](#table-of-contents)**

#### `require-yield`

**Use `yield` in generator functions to signal asynchronous control flow and fulfill generator expectations.**

```ts
// ❌ Bad: generator function without `yield`
function* generateValue() {
  return 10;
}

// ✅ Good: yields a value as expected
function* generateValue() {
  yield 10;
}
```

**Rationale**

- Clarifies intent of generator functions.
- Avoids misuse where a normal function would suffice.
- Makes asynchronous or iterable logic explicit.

**Automations**

- ESLint: [`require-yield`](https://eslint.org/docs/latest/rules/require-yield)

---

**[⬆ back to top](#table-of-contents)**

#### `use-isnan`

**Use `Number.isNaN()` or `isNaN()` instead of comparing values directly to `NaN`.**

```ts
// ❌ Bad: NaN comparisons never behave as expected
if (value == NaN) return;
if (value !== Number.NaN) doSomething();

// ✅ Good: reliable NaN detection
if (Number.isNaN(value)) return;
if (!isNaN(value)) doSomething();
```

**Rationale**

- Prevents bugs due to `NaN`'s unique non-reflexive equality.
- Encourages standard, expressive handling with `isNaN()` or `Number.isNaN()`.
- Avoids confusing and ineffective equality logic.

**Automations**

- ESLint: [`use-isnan`](https://eslint.org/docs/latest/rules/use-isnan)

---

**[⬆ back to top](#table-of-contents)**

#### `valid-typeof`

**Compare `typeof` expressions only to valid string literals or other `typeof` expressions.**

```ts
// ❌ Bad: misspelled or invalid string literals
if (typeof x === 'strnig') return;
if (typeof y !== 'fucntion') handleIt();

// ✅ Good: valid and intentional checks
if (typeof x === 'string') return;
if (typeof y === typeof z) doSomething();
```

**Rationale**

- Prevents bugs from typos in string literals used with `typeof`.
- Enforces explicit comparison to valid type strings or expressions.
- Makes intent clear and avoids silent failures.

**Automations**

- ESLint: [`valid-typeof`](https://eslint.org/docs/latest/rules/valid-typeof)

---

**[⬆ back to top](#table-of-contents)**

### `import`

#### `default`

**Ensure a default export exists in a module when using a default import.**

```ts
// ❌ Bad: default import from module with no default export
import bar from './bar'; // bar.js only has named exports
import baz from './baz'; // CommonJS module without ES default export

// ✅ Good: default import from module with valid default export
import foo from './foo'; // foo.js exports a default function
```

**Rationale**

- Prevents runtime errors caused by undefined default imports.
- Enforces alignment between import statements and module exports.
- Improves clarity and reliability of module boundaries.

**Automations**

- ESLint: [`import/default`](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/default.md)

---

**[⬆ back to top](#table-of-contents)**

#### `export`

**Prevent multiple exports of the same name or multiple default exports from a single module.**

```ts
// ❌ Bad: multiple default exports
export default class MyClass {}
export default function makeClass() {
  return new MyClass();
}

// ❌ Bad: duplicate named exports
export const foo = () => {};
export { foo as bar };
export { bar as foo };

// ✅ Good: one default export and unique named exports
export default class MyClass {}
export const makeClass = () => new MyClass();
export const foo = () => {};
export { foo as renamedFoo };
```

**Rationale**

- Prevents ambiguous or conflicting module interfaces.
- Reduces maintenance errors from copy/paste or merge conflicts.
- Aligns with ES module constraints on unique export names and a single default.

**Automations**

- ESLint: [`import/export`](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/export.md)

---

**[⬆ back to top](#table-of-contents)**

#### `named`

**Ensure named imports and re-exports correspond to actual named exports in the target module.**

```ts
// ❌ Bad: importing or re-exporting a non-existent name
import { notFoo } from './foo';
export { notFoo as defNotBar } from './foo';

// ✅ Good: importing or re-exporting an existing named export
import { foo } from './foo';
export { foo as bar } from './foo';
```

**Rationale**

- Catches typos and prevents runtime import errors.
- Enforces consistency between module interfaces.
- Improves refactor safety by verifying export integrity.

**Automations**

- ESLint: [`import/named`](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/named.md)
- TypeScript Compiler

---

**[⬆ back to top](#table-of-contents)**

#### `namespace`

**Ensure all property accesses on namespace imports refer to named exports of the target module.**

```ts
// ❌ Bad: accessing a non-exported or undefined member
import * as names from './named-exports';
names.c();
names.deep.f();

// ✅ Good: only accessing exported members
import * as names from './named-exports';
names.a();
names.deep.e();
```

**Rationale**

- Prevents runtime errors by catching invalid property access.
- Validates integrity of namespace imports across re-exports.
- Enforces module contracts more strictly than named imports alone.

**Automations**

- ESLint: [`import/namespace`](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/namespace.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-duplicates`

**Consolidate multiple imports from the same module path into a single statement.**

```ts
// ❌ Bad: duplicated imports from the same source
import foo from './mod';
import { bar } from './mod';

// ✅ Good: merged import from one source
import foo, { bar } from './mod';
```

**Rationale**

- Reduces noise and clutter in import declarations.
- Prevents accidental fragmentation of imports across a file.
- Avoids subtle issues with import reordering or resolution (e.g. `./mod` vs `./mod.js`).

**Automations**

- ESLint: [`import/no-duplicates`](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-duplicates.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-named-as-default`

**Avoid naming a default import with the same name as a named export from the same module.**

```ts
// ❌ Bad: imported default named as a known named export
import bar from './foo.js'; // 'bar' is a named export

// ✅ Good: use a distinct name for the default
import foo from './foo.js';

// ✅ Good: import 'bar' correctly as a named export
import { bar } from './foo.js';
```

**Rationale**

- Prevents misleading code that suggests a named export is the default.
- Catches common refactoring mistakes (e.g., omitting `{}` around named imports).
- Improves code clarity and avoids accidental identifier collisions.

**Automations**

- ESLint: [`import/no-named-as-default`](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-named-as-default-member`

**Avoid accessing named exports as properties on a default import, which suggests a mistaken understanding of module structure.**

```ts
// ❌ Bad: accessing a named export as a property of the default
import foo from './foo.js';
const bar = foo.bar;

// ✅ Good: import the named export directly
import { bar } from './foo.js';

// ✅ Good: import both default and named exports if needed
import foo, { bar } from './foo.js';
```

**Rationale**

- Prevents misunderstandings of ES module semantics.
- Named exports are **not** properties of the default export.
- Reduces errors when migrating from CommonJS or older Babel versions.

**Automations**

- ESLint: [`import/no-named-as-default-member`](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-named-as-default-member.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unresolved`

**Ensure all import or require paths can be resolved to real files, avoiding runtime module resolution errors.**

```ts
// ❌ Bad: './utils/helper' doesn't exist
import { doSomething } from './utils/helper';

// ✅ Good: path correctly resolves to an existing file
import { doSomething } from './utils/helpers';

// ❌ Bad: unresolved require with CommonJS (if commonjs: true)
const lib = require('./missing');

// ✅ Good: resolved require
const lib = require('./lib');
```

**Rationale**

- Prevents typos and broken module paths.
- Aligns with bundler and runtime behavior (Node/Webpack).
- Encourages valid, predictable import behavior.

**Automations**

- ESLint: [`import/no-unresolved`](https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/no-unresolved.md)

---

**[⬆ back to top](#table-of-contents)**

## TypeScript Guidelines

### `@typescript-eslint`

#### `await-thenable`

**Disallow `await` on non-Promise-like values to avoid likely logic errors and unnecessary microtask delays.**

```ts
// ❌ Bad: awaiting a non-Thenable
await 'value';

const getValue = () => 'value';
await getValue();

// ❌ Bad: `for await` on sync iterable
const values = [1, 2, 3];
for await (const v of values) {
  console.log(v);
}

// ❌ Bad: `await using` on sync-disposable
function makeSyncDisposable(): Disposable {
  return { [Symbol.dispose]() {} };
}
await using resource = makeSyncDisposable();

// ✅ Good: awaiting a Promise
await Promise.resolve('value');

const getValueAsync = async () => 'value';
await getValueAsync();

// ✅ Good: `for await` on async iterable
async function* asyncGen() {
  yield 1;
  yield 2;
}
for await (const v of asyncGen()) {
  console.log(v);
}

// ✅ Good: `using` without await for sync-disposable
using resource = makeSyncDisposable();

// ✅ Good: `await using` on async-disposable
function makeAsyncDisposable(): AsyncDisposable {
  return { async [Symbol.asyncDispose]() {} };
}
await using resource = makeAsyncDisposable();
```

**Rationale**

- Avoids misleading code that implies asynchronous behavior where none exists.
- Prevents accidental `await` on raw values or sync functions.
- Helps uncover bugs like missing parentheses on async function calls.

**Automations**

- ESLint: [`@typescript-eslint/await-thenable`](https://typescript-eslint.io/rules/await-thenable)

---

**[⬆ back to top](#table-of-contents)**

#### `ban-ts-comment`

**Disallow or restrict use of `@ts-<directive>` comments to preserve type safety and encourage code correctness.**

```ts
// ❌ Bad: Suppressing errors without explanation
// @ts-ignore
console.log(undefinedVariable);

// ❌ Bad: @ts-expect-error without description
// @ts-expect-error
const value = possiblyWrong();

// ❌ Bad: @ts-expect-error with too short description
// @ts-expect-error: FIXME
const value = possiblyWrong();

// ❌ Bad: @ts-expect-error does not match format
// @ts-expect-error: wrong reason format
const value = doSomething();

// ✅ Good: Fully described suppression
// @ts-expect-error: TS2345 because third-party types are incorrect
const value = thirdPartyFunction();

// ✅ Good: Using @ts-check to enable checks
// @ts-check
const msg = 'This file is checked';

// ✅ Good: No suppression comment used at all
const x: number = 5;
```

**Rationale**

- Discourages suppression of TypeScript's type system without context
- Encourages documenting intentional type suppressions
- Helps code reviewers understand why a directive was necessary

**Automations**

- ESLint: [`@typescript-eslint/ban-ts-comment`](https://typescript-eslint.io/rules/ban-ts-comment)

---

**[⬆ back to top](#table-of-contents)**

#### `no-array-delete`

**Avoid using `delete` on array indices to prevent leaving sparse arrays and potential bugs.**

```ts
// ❌ Bad: creates a hole in the array
const arr = [1, 2, 3];
delete arr[1];

// ✅ Good: properly removes element and updates indices
const arr = [1, 2, 3];
arr.splice(1, 1);
```

**Rationale**

- `delete` leaves `undefined` holes, not shifting array elements.
- Makes array iteration less predictable.
- Splice maintains array structure and behavior.

**Automations**

- ESLint: [`@typescript-eslint/no-array-delete`](https://typescript-eslint.io/rules/no-array-delete)

---

**[⬆ back to top](#table-of-contents)**

#### `no-base-to-string`

**Disallow string coercion of objects lacking informative `.toString()` to avoid meaningless string output.**

```ts
// ❌ Bad: object coerces to "[object Object]"
'' + {};
({}).toString();
({}).toLocaleString();

class MyClass {}
const value = new MyClass();
`Value: ${value}`;

// ✅ Good: coercion on values with meaningful string output
'Error: ' + true;
`Code: ${123}`;
(() => {}).toString();
String(42);

// ✅ Good: custom toString implementation
class Descriptive {
  toString() {
    return 'meaningful string';
  }
}
`Wrapped: ${new Descriptive()}`;

const withToString = { toString: () => 'custom' };
String(withToString);

// ✅ Good: ignoring known exception types
const pattern = /regex/;
`${pattern}`; // allowed if ignoredTypeNames includes RegExp
```

**Rationale**

- Avoids confusing output like `"[object Object]"`.
- Encourages explicit formatting or custom `toString()` methods.
- Improves logging clarity and debugging.

**Automations**

- ESLint: [`@typescript-eslint/no-base-to-string`](https://typescript-eslint.io/rules/no-base-to-string)

---

**[⬆ back to top](#table-of-contents)**

#### `no-duplicate-enum-values`

**Disallow enum members from sharing identical string or numeric values to reduce confusion and bugs.**

```ts
// ❌ Bad: duplicate enum values
enum Status {
  Start = 0,
  Init = 0,
}

enum Color {
  Red = 'red',
  Crimson = 'red',
  Vermilion = `red`,
}

// ✅ Good: unique enum values
enum Status {
  Start = 0,
  Init = 1,
}

enum Color {
  Red = 'red',
  Crimson = 'crimson',
  Vermilion = 'vermilion',
}
```

**Rationale**

- Prevents accidental value reuse that can cause logical errors.
- Improves enum readability and maintainability.
- Aligns with developer expectations of uniqueness within enums.

**Automations**

- ESLint: [`@typescript-eslint/no-duplicate-enum-values`](https://typescript-eslint.io/rules/no-duplicate-enum-values)

---

**[⬆ back to top](#table-of-contents)**

#### `no-duplicate-type-constituents`

**Disallow repeating types within union and intersection definitions to enhance clarity and prevent redundancy.**

```ts
// ❌ Bad: duplicate types
type T1 = string | string;
type T2 = { x: number } & { x: number };
type T3 = string | StringAlias;

type StringAlias = string;

const fn = (a?: string | undefined) => {};

// ✅ Good: distinct types
type T1 = string | number;
type T2 = { x: number } & { y: number };
type T3 = string | number;

const fn = (a?: string) => {};
```

**Rationale**

- Reduces noise in type declarations.
- Prevents misleading or unnecessary repetition.
- Promotes concise and maintainable code.

**Automations**

- ESLint: [`@typescript-eslint/no-duplicate-type-constituents`](https://typescript-eslint.io/rules/no-duplicate-type-constituents)

---

**[⬆ back to top](#table-of-contents)**

#### `no-empty-object-type`

**Disallow use of `{}` (empty object type) as it misleadingly matches all non-nullish values.**

```ts
// ❌ Bad: `{}` matches strings, numbers, arrays, functions...
let a: {};
type Empty = {};
interface AnythingGoes {}

// ✅ Good: use `object` or `unknown` for intended semantics
let a: object;
type Anything = unknown;

interface RealInterface {
  flag: boolean;
}
type RealType = { message: string };
```

**Rationale**

- `{}` allows any defined value, not just objects.
- Common source of confusion for TypeScript beginners.
- Misleading name and behavior for static type checking.

**Automations**

- ESLint: [`@typescript-eslint/no-empty-object-type`](https://typescript-eslint.io/rules/no-empty-object-type)

---

**[⬆ back to top](#table-of-contents)**

#### `no-explicit-any`

**Avoid using the `any` type to maintain type safety and improve code clarity.**

```ts
// ❌ Bad: disables type checking
let value: any;
function fn(): any {}
const list: Array<any> = [];

// ✅ Good: safer alternatives
let value: unknown;
function fn(): string {}
const list: string[] = ['item'];

// ✅ Good: function using known param types
function greet(param: string): string {
  return `Hello, ${param}`;
}
```

**Rationale**

- `any` bypasses TypeScript’s static type checking.
- Leads to runtime bugs that types could prevent.
- Promotes consistent, safe typing with `unknown` or custom types.

**Automations**

- ESLint: [`@typescript-eslint/no-explicit-any`](https://typescript-eslint.io/rules/no-explicit-any)

---

**[⬆ back to top](#table-of-contents)**

#### `no-extra-non-null-assertion`

**Avoid using multiple `!` non-null assertions on the same value to prevent unnecessary syntax and confusion.**

```ts
// ❌ Bad: redundant non-null assertions
const foo: { bar: number } | null = null;
const bar = foo!!!.bar;

function test(input: number | undefined) {
  const value: number = input!!!;
}

function access(bar?: { x: number }) {
  return bar!?.x;
}

// ✅ Good: single non-null assertion
const foo: { bar: number } | null = null;
const bar = foo!.bar;

function test(input: number | undefined) {
  const value: number = input!;
}

function access(bar?: { x: number }) {
  return bar?.x;
}
```

**Rationale**

- Prevents redundant and confusing non-null assertions.
- Improves code readability and correctness.
- Helps avoid bugs due to unnecessary assertions.

**Automations**

- ESLint: [`@typescript-eslint/no-extra-non-null-assertion`](https://typescript-eslint.io/rules/no-extra-non-null-assertion)

---

**[⬆ back to top](#table-of-contents)**

#### `no-floating-promises`

**Ensure Promises are awaited, returned, or explicitly handled to prevent untracked errors.**

```ts
// ❌ Bad: floating Promises not handled
new Promise((resolve) => resolve('done'));
returnsPromise().then(() => {});
Promise.reject('err').catch();
[1, 2, 3].map(async (x) => x + 1);

// ✅ Good: properly handled Promises
await new Promise((resolve) => resolve('done'));

void returnsPromise();

returnsPromise().then(
  () => {},
  () => {},
);

Promise.reject('err').catch(() => {});

await Promise.all([1, 2, 3].map(async (x) => x + 1));
```

**Rationale**

- Prevents missed Promise rejections and unsequenced logic.
- Promotes explicit, intentional Promise handling.
- Highlights potentially risky async operations.

**Automations**

- ESLint: [`@typescript-eslint/no-floating-promises`](https://typescript-eslint.io/rules/no-floating-promises)

---

**[⬆ back to top](#table-of-contents)**

#### `no-for-in-array`

**Avoid using `for-in` to iterate over arrays to prevent prototype and property enumeration issues.**

```ts
// ❌ Bad: `for-in` used on array
const arr = ['a', 'b', 'c'];
for (const i in arr) {
  console.log(i, arr[i]);
}

// ✅ Good: `for-of` iterates over values
for (const value of arr) {
  console.log(value);
}

// ✅ Good: indexed loop
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// ✅ Good: array methods
arr.forEach((val, i) => console.log(i, val));
for (const [i, val] of arr.entries()) {
  console.log(i, val);
}
```

**Rationale**

- `for-in` iterates over all enumerable properties, including inherited ones.
- Can skip holes in sparse arrays.
- Indexes are returned as strings, which can cause bugs.

**Automations**

- ESLint: [`@typescript-eslint/no-for-in-array`](https://typescript-eslint.io/rules/no-for-in-array)

---

**[⬆ back to top](#table-of-contents)**

#### `no-misused-new`

**Disallow `new()` methods in classes and `constructor()` methods in interfaces to avoid confusion and incorrect class definitions.**

```ts
// ❌ Bad: invalid use of `new` or `constructor`
declare class C {
  new(): C;
}

interface I {
  new (): I;
  constructor(): void;
}

// ✅ Good: correct use of `constructor` in class and `new` in interface
declare class C {
  constructor();
}

interface I {
  new (): C;
}
```

**Rationale**

- Prevents misuse of `new` in classes and `constructor` in interfaces.
- Helps developers understand correct type and class relationships.
- Reduces runtime and type confusion in codebases.

**Automations**

- ESLint: [`@typescript-eslint/no-misused-new`](https://typescript-eslint.io/rules/no-misused-new)

---

**[⬆ back to top](#table-of-contents)**

#### `no-misused-promises`

**Avoid providing Promises where non-Promise values are expected, such as conditionals or void-return functions.**

```ts
// ❌ Bad: async logic misused in conditionals or callbacks
if (someAsync()) {
}

[1, 2, 3].forEach(async (v) => {
  await fetch('/' + v);
});

document.addEventListener('click', async () => {
  await fetch('/data');
});

// ✅ Good: explicitly handle Promises
if (await someAsync()) {
}

Promise.all([1, 2, 3].map(async (v) => await fetch('/' + v)));

document.addEventListener('click', () => {
  void (async () => {
    await fetch('/data');
  })();
});
```

**Rationale**

- Prevents bugs from unhandled or misused asynchronous logic.
- Encourages clarity between sync and async flows.
- Highlights potentially unsafe Promise usage patterns.

**Automations**

- ESLint: [`@typescript-eslint/no-misused-promises`](https://typescript-eslint.io/rules/no-misused-promises)

---

**[⬆ back to top](#table-of-contents)**

#### `no-namespace`

**Disallow the use of TypeScript namespaces in favor of ES modules for clearer and modern code organization.**

```ts
// ❌ Bad: outdated namespace/module usage
module foo {}
namespace foo {}
declare module foo {}
declare namespace foo {}

// ✅ Good: ES modules or declaration of external modules
declare module 'external-lib' {}

// Good with declarations allowed
declare namespace Foo {
  export const value: number;
}
```

**Rationale**

- Namespaces are deprecated in favor of ES module syntax.
- Encourages modern `import`/`export` practices.
- Avoids confusion between internal modules and global scope declarations.

**Automations**

- ESLint: [`@typescript-eslint/no-namespace`](https://typescript-eslint.io/rules/no-namespace)

---

**[⬆ back to top](#table-of-contents)**

#### `no-non-null-asserted-optional-chain`

**Avoid using `!` after optional chaining (`?.`) to prevent unsafe assumptions about nullable values.**

```ts
// ❌ Bad: optional chaining followed by non-null assertion
foo?.bar!;
foo?.bar()!;

// ✅ Good: omit non-null assertion
foo?.bar;
foo?.bar();
```

**Rationale**

- `?.` is meant to safely return `undefined`; using `!` contradicts that intent.
- Often indicates incorrect type assumptions or misused safety mechanisms.
- Avoids holes in type checking and runtime errors.

**Automations**

- ESLint: [`@typescript-eslint/no-non-null-asserted-optional-chain`](https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain)

---

**[⬆ back to top](#table-of-contents)**

#### `no-redundant-type-constituents`

**Avoid including types in unions or intersections that are overridden or made meaningless by others.**

```ts
// ❌ Bad: redundant type constituents
type T1 = any | 'foo';
type T2 = string | 'bar';
type T3 = number & 1;
type T4 = unknown & string;
type T5 = never | boolean;

// ✅ Good: clean and effective type declarations
type T1 = any;
type T2 = string;
type T3 = 1;
type T4 = string;
type T5 = boolean;
```

**Rationale**

- Removes noise from type definitions.
- Avoids misleading types that suggest behavior they don't enable.
- Aligns with how TypeScript evaluates types internally.

**Automations**

- ESLint: [`@typescript-eslint/no-redundant-type-constituents`](https://typescript-eslint.io/rules/no-redundant-type-constituents)

---

**[⬆ back to top](#table-of-contents)**

#### `no-require-imports`

**Use ES Module `import` syntax instead of CommonJS `require()` to ensure consistency and enable static analysis.**

```ts
// ❌ Bad: CommonJS `require()` usage
const foo = require('foo');
const { bar } = require('bar');
import baz = require('baz');

// ✅ Good: ES module imports
import * as foo from 'foo';
import { bar } from 'bar';
import * as baz from 'baz';
```

**Rationale**

- Encourages consistent module syntax.
- Enables static analysis and tree-shaking.
- Promotes forward compatibility with ES Modules.

**Automations**

- ESLint: [`@typescript-eslint/no-require-imports`](https://typescript-eslint.io/rules/no-require-imports)

---

**[⬆ back to top](#table-of-contents)**

#### `no-this-alias`

**Avoid assigning `this` to a variable to encourage proper scoping with arrow functions and modern syntax.**

```ts
// ❌ Bad: aliasing `this`
const self = this;
setTimeout(function () {
  self.doWork();
});

// ✅ Good: use arrow function to preserve `this`
setTimeout(() => {
  this.doWork();
});
```

**Rationale**

- Prevents legacy `this` alias patterns.
- Encourages using lexical `this` via arrow functions.
- Reduces risk of scoping errors and increases clarity.

**Automations**

- ESLint: [`@typescript-eslint/no-this-alias`](https://typescript-eslint.io/rules/no-this-alias)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unnecessary-type-assertion`

**Avoid `as` or angle-bracket type assertions when they don’t change the type of an expression.**

```ts
// ❌ Bad: assertions that don't change the type
const foo = <number>(3 + 5);
type Foo = number;
const bar = (3 + 5) as Foo;
function example(x: number): number {
  return x!; // unnecessary non-null
}

// ✅ Good: assertion used to refine or lock the type
const precise = 3 as number;
let value = 'hello' as const;
function refine(x: number | undefined): number {
  return x!;
}
```

**Rationale**

- Reduces clutter from unnecessary `as` and `!` assertions.
- Makes code easier to read and understand.
- Promotes better type-driven development.

**Automations**

- ESLint: [`@typescript-eslint/no-unnecessary-type-assertion`](https://typescript-eslint.io/rules/no-unnecessary-type-assertion)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unnecessary-type-constraint`

**Omit `extends any` or `extends unknown` in generics, as TypeScript assumes these by default.**

```ts
// ❌ Bad: redundant constraints
function identity<T extends any>(value: T): T {
  return value;
}

type Wrapper<T extends unknown> = T;

class Example<T extends any> {}

// ✅ Good: no unnecessary constraints
function identity<T>(value: T): T {
  return value;
}

type Wrapper<T> = T;

class Example<T> {}
```

**Rationale**

- Simplifies generic definitions.
- Avoids redundant type syntax.
- Aligns with TypeScript’s default behavior for generic parameters.

**Automations**

- ESLint: [`@typescript-eslint/no-unnecessary-type-constraint`](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unsafe-argument`

**Prevent passing values typed as `any` to functions to avoid unsafe behavior and type leaks.**

```ts
// ❌ Bad: passing `any` to functions
const value: any = 1;
foo(value);
foo(...value);

const arr: any[] = [];
foo(...arr);

baz(new Set<any>(), new Map<any, string>());

// ✅ Good: arguments are properly typed
foo('a', 1, 'b');
foo(...(['a', 1, 'b'] as const));

baz(new Set<string>(), new Map<string, string>());

// Allowed: `any` to `unknown`
foo(1 as any, new Set<any>(), [] as any[]);
```

**Rationale**

- Prevents runtime errors from unsafe or incorrectly typed data.
- Encourages improving type coverage.
- Enforces safer generic type boundaries.

**Automations**

- ESLint: [`@typescript-eslint/no-unsafe-argument`](https://typescript-eslint.io/rules/no-unsafe-argument)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unsafe-assignment`

**Prevent assigning `any` values to variables, properties, or destructured arrays to maintain type safety.**

```ts
// ❌ Bad: assigns an `any` value, losing type safety
const result = getData() as any;
const [x] = data as any[];
const settings: Set<string> = new Set<any>();

// ✅ Good: assigns a known or typed-safe value
const result = getData();
const [x] = [42];
const settings: Set<string> = new Set<string>();
```

**Rationale**

- Prevents silent type safety leaks from `any` values.
- Ensures stricter and safer usage of type annotations.
- Guards against `any` propagation via generic type assignments.

**Automations**

- ESLint: [`@typescript-eslint/no-unsafe-assignment`](https://typescript-eslint.io/rules/no-unsafe-assignment)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unsafe-call`

**Prevent calling variables, properties, or templates typed as `any` to avoid unsound behavior.**

```ts
// ❌ Bad: calls a value with an `any` type
declare const fn: any;
fn();
fn.prop();
new fn();
fn`template`;

// ✅ Good: only calls values with known callable types
declare const fn: () => void;
fn();

(() => {})();
new Map();
String.raw`template`;
```

**Rationale**

- Avoids runtime errors from calling values that may not be callable.
- Prevents loss of type safety from dynamic calls on `any`.
- Helps identify code paths where function types are unclear or unchecked.

**Automations**

- ESLint: [`@typescript-eslint/no-unsafe-call`](https://typescript-eslint.io/rules/no-unsafe-call)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unsafe-declaration-merging`

**Avoid declaring a class and an interface with the same name to prevent runtime errors from uninitialized members.**

```ts
// ❌ Bad: merges a class and interface, leading to unsound behavior
interface Foo {
  nums: number[];
}
class Foo {}
new Foo().nums.push(1); // Runtime error

// ✅ Good: implements the interface instead of merging
interface Foo {
  nums: number[];
}
class Bar implements Foo {
  nums = [];
}
```

**Rationale**

- Prevents mismatches between declared and actual runtime members.
- Avoids runtime crashes due to uninitialized properties.
- Encourages safer alternatives like `implements`.

**Automations**

- ESLint: [`@typescript-eslint/no-unsafe-declaration-merging`](https://typescript-eslint.io/rules/no-unsafe-declaration-merging)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unsafe-enum-comparison`

**Always compare enum values to other enum members to maintain safety and refactorability.**

```ts
// ❌ Bad: compares an enum to a raw value
enum Vegetable {
  Asparagus = 'asparagus',
}
declare const veg: Vegetable;
veg === 'asparagus';

// ✅ Good: uses the enum member in comparison
veg === Vegetable.Asparagus;
```

**Rationale**

- Prevents accidental comparison to incorrect or outdated raw values.
- Preserves enum abstraction and enables safe refactoring.
- Supports reliable use of IDE features like "Rename Symbol".

**Automations**

- ESLint: [`@typescript-eslint/no-unsafe-enum-comparison`](https://typescript-eslint.io/rules/no-unsafe-enum-comparison)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unsafe-function-type`

**Use specific function types instead of the built-in `Function` type to enforce safety and clarity.**

```ts
// ❌ Bad: uses broad Function type, which allows any arguments and return type
let fn: Function;
fn = (value) => value;

// ✅ Good: uses a generic function type with clear parameter and return types
let fn: <T>(value: T) => T;
fn = (value) => value;
```

**Rationale**

- `Function` permits unsafe calls with any arguments and returns `any`.
- Reduces type safety and can hide bugs at compile time.
- Specific function types improve readability and refactorability.

**Automations**

- ESLint: [`@typescript-eslint/no-unsafe-function-type`](https://typescript-eslint.io/rules/no-unsafe-function-type)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unsafe-member-access`

**Disallow accessing properties or methods on values with type `any` to preserve type safety.**

```ts
// ❌ Bad: accessing a member on `any` bypasses type checking
declare const val: any;
const result = val.someProp;

// ✅ Good: uses a properly typed value to access a member safely
declare const val: { someProp: string };
const result = val.someProp;
```

**Rationale**

- `any` disables TypeScript’s type checks, hiding potential bugs.
- Member access on `any` can cause runtime errors if properties don’t exist.
- Ensures code remains safe and maintainable as the codebase grows.

**Automations**

- ESLint: [`@typescript-eslint/no-unsafe-member-access`](https://typescript-eslint.io/rules/no-unsafe-member-access)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unsafe-return`

**Prevent returning `any` values from functions to maintain type safety and enable accurate type inference.**

```ts
// ❌ Bad: returns a value with type `any`
function getUserData(): User {
  return fetchData() as any;
}

// ✅ Good: returns properly typed or validated data
function getUserData(): User {
  return parseApiResponse(fetchData());
}
```

**Rationale**

- `any` disables return type checks and hides unsafe logic.
- Returning `any` breaks caller type assumptions.
- Enforces better control of function interfaces and inference.

**Automations**

- ESLint: [`@typescript-eslint/no-unsafe-return`](https://typescript-eslint.io/rules/no-unsafe-return)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unsafe-unary-minus`

**Restrict the unary minus operator (`-`) to values explicitly typed as `number` or `bigint`.**

```ts
// ❌ Bad: applying `-` to a string or object
const s = 'hello';
const n = -s;

const obj = {};
const x = -obj;

// ✅ Good: applying `-` to numbers or bigints
const a = 42;
const b = -a;

const big = 9007199254740991n;
const negBig = -big;
```

**Rationale**

- Ensures `-` only applies to types where the operation is semantically valid.
- Prevents runtime `NaN` or unexpected coercion results.
- Makes intent clearer and improves static type safety.

**Automations**

- ESLint: [`@typescript-eslint/no-unsafe-unary-minus`](https://typescript-eslint.io/rules/no-unsafe-unary-minus)

---

**[⬆ back to top](#table-of-contents)**

#### `no-wrapper-object-types`

**Use lowercase primitive types instead of confusing object-based counterparts like `Number` or `Boolean`.**

```ts
// ❌ Bad: object wrapper types introduce unexpected behaviors
let value: Number;
let flag: Boolean;
let name: String;

// ✅ Good: primitive types are clear, efficient, and safe
let value: number;
let flag: boolean;
let name: string;
```

**Rationale**

- Avoids subtle bugs from object wrappers being always truthy.
- Prevents reference comparisons like `new String('x') !== new String('x')`.
- Ensures compatibility with arithmetic and logical operations.

**Automations**

- ESLint: [`@typescript-eslint/no-wrapper-object-types`](https://typescript-eslint.io/rules/no-wrapper-object-types)

---

**[⬆ back to top](#table-of-contents)**

#### `prefer-as-const`

**Use `as const` instead of repeating literal types in assertions.**

```ts
// ❌ Bad: manually re-typing the literal adds redundancy
let foo = 'bar' as 'bar';
let obj = { baz: 'qux' as 'qux' };

// ✅ Good: `as const` infers the literal type automatically
let foo = 'bar' as const;
let obj = { baz: 'qux' as const };
```

**Rationale**

- Reduces duplication of literal values.
- Simplifies assertions and improves clarity.
- Leverages TypeScript’s automatic inference capabilities.

**Automations**

- ESLint: [`@typescript-eslint/prefer-as-const`](https://typescript-eslint.io/rules/prefer-as-const)

---

**[⬆ back to top](#table-of-contents)**

#### `prefer-namespace-keyword`

**Use the `namespace` keyword instead of `module` for declaring custom modules in TypeScript.**

```ts
// ❌ Bad: uses outdated `module` keyword for internal declarations
module Example {}

// ✅ Good: uses modern `namespace` keyword for clarity
namespace Example {}

// ✅ Good: still valid for describing external modules
declare module 'foo' {}
```

**Rationale**

- Avoids confusion with ES modules.
- Improves clarity by using current terminology.
- Aligns with the TypeScript team’s preferred naming.

**Automations**

- ESLint: [`@typescript-eslint/prefer-namespace-keyword`](https://typescript-eslint.io/rules/prefer-namespace-keyword)

---

**[⬆ back to top](#table-of-contents)**

#### `restrict-plus-operands`

**Use the `+` operator only between values of the same type and within `string`, `number`, or `bigint`.**

```ts
// ❌ Bad: mixing bigint and number
let total = 1n + 1;

// ❌ Bad: adding string to never
let message = (msg: string, code: never) => msg + code;

// ✅ Good: both operands are string
let message = (msg: string, suffix: string) => msg + suffix;

// ✅ Good: both operands are bigint
let total = 1n + 2n;
```

**Rationale**

- Prevents confusing implicit coercion (e.g., `[object Object]`, `NaN`).
- Enforces consistent use of types in expressions.
- Promotes better readability and runtime predictability.

**Automations**

- ESLint: [`@typescript-eslint/restrict-plus-operands`](https://typescript-eslint.io/rules/restrict-plus-operands)

---

**[⬆ back to top](#table-of-contents)**

#### `restrict-template-expressions`

**Only embed values of type `string` (or explicitly allowed types) inside template literals.**

```ts
// ❌ Bad: object gets coerced to "[object Object]"
const value = { name: 'Alice' };
const msg = `User: ${value}`;

// ✅ Good: interpolated value is a string
const name = 'Alice';
const msg = `User: ${name}`;

// ✅ Good: explicit stringification for clarity
const user = { name: 'Alice' };
const msg = `User: ${JSON.stringify(user)}`;
```

**Rationale**

- Prevents accidental stringification like `"[object Object]"`.
- Ensures template literals contain meaningful, user-friendly values.
- Encourages explicit formatting and coercion of non-string values.

**Automations**

- ESLint: [`@typescript-eslint/restrict-template-expressions`](https://typescript-eslint.io/rules/restrict-template-expressions)

---

**[⬆ back to top](#table-of-contents)**

#### `triple-slash-reference`

**Use ES6-style `import` declarations instead of `/// <reference ... />` directives.**

```ts
// ❌ Bad: triple-slash reference for types
/// <reference types="jest" />

// ✅ Good: explicit type import
import type {} from 'jest';
```

**Rationale**

- Aligns code with modern module standards.
- Enables better tooling support and module resolution.
- Avoids confusion around scope and resolution of triple-slash references.

**Automations**

- ESLint: [`@typescript-eslint/triple-slash-reference`](https://typescript-eslint.io/rules/triple-slash-reference)

---

**[⬆ back to top](#table-of-contents)**

#### `unbound-method`

**Avoid extracting class methods without binding, to ensure `this` refers to the intended instance.**

```ts
// ❌ Bad: method extracted and invoked unbound
class Logger {
  log(): void {
    console.log(this);
  }
}
const logger = new Logger();
const log = logger.log;
log(); // 'this' is undefined or incorrect

// ✅ Good: method properly bound or structured
const bound = logger.log.bind(logger);
bound();

const lambda = () => logger.log();
lambda();
```

**Rationale**

- Ensures `this` binding is preserved when passing methods.
- Prevents runtime errors or unexpected behaviors from invalid `this` references.
- Encourages use of arrow functions or `.bind()` for clarity.

**Automations**

- ESLint: [`@typescript-eslint/unbound-method`](https://typescript-eslint.io/rules/unbound-method)

---

**[⬆ back to top](#table-of-contents)**

## React Guidelines

### `jsx-a11y`

#### `alt-text`

**Provide descriptive `alt`, `aria-label`, or fallback text for all relevant media elements to ensure accessibility.**

```tsx
// ❌ Bad: Missing or invalid alternative text
<img src="logo.png" />
<object {...props} />
<input type="image" {...props} />
<area {...props} />

// ✅ Good: Alt text properly provided
<img src="logo.png" alt="Company logo" />
<object aria-label="Interactive chart" />
<input type="image" alt="Submit form" />
<area alt="Map marker for New York" />
```

**Rationale**

- Ensures screen readers can describe non-text content.
- Supports WCAG 1.1.1 compliance for non-text elements.
- Encourages semantic markup for visual elements.

**Automations**

- ESLint: [`jsx-a11y/alt-text`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/alt-text.md)

---

**[⬆ back to top](#table-of-contents)**

#### `anchor-has-content`

**Ensure every `<a>` or anchor-like component has visible or assistive content for screen readers.**

```tsx
// ❌ Bad: Anchor has no readable content
<a />
<a><TextWrapper aria-hidden /></a>

// ✅ Good: Anchor includes accessible label
<a>Create Account</a>
<a aria-label="Home link" />
<a title="View profile" />
<a dangerouslySetInnerHTML={{ __html: "Click here" }} />
```

**Rationale**

- Links without accessible content confuse screen readers.
- Provides clear, navigable semantics for keyboard and assistive tech users.
- Aligns with WCAG 2.4.4 and 4.1.2 requirements.

**Automations**

- ESLint: [`jsx-a11y/anchor-has-content`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-has-content.md)

---

**[⬆ back to top](#table-of-contents)**

#### `anchor-is-valid`

**Ensure `<a>` elements include valid `href` attributes and are not misused as buttons.**

```tsx
// ❌ Bad: Anchor used as button or without valid href
<a onClick={handleClick} />
<a href="#" onClick={handleClick} />
<a href="javascript:void(0)" onClick={handleClick} />

// ✅ Good: Use <a> for links, <button> for actions
<a href="/home">Go Home</a>
<button onClick={handleClick}>Submit</button>
```

**Rationale**

- Preserves expected semantics for screen readers and keyboards.
- Prevents misuse of `<a>` as a button, avoiding accessibility confusion.
- Aligns with WCAG 2.1.1 for keyboard interaction and focus behavior.

**Automations**

- ESLint: [`jsx-a11y/anchor-is-valid`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md)

---

**[⬆ back to top](#table-of-contents)**

#### `aria-activedescendant-has-tabindex`

**Add a `tabIndex` to elements using `aria-activedescendant` to ensure they can receive keyboard focus.**

```tsx
// ❌ Bad: Element has aria-activedescendant but no tabIndex
<div aria-activedescendant="item-1" />

// ✅ Good: Element has aria-activedescendant and is tabbable
<div aria-activedescendant="item-1" tabIndex={0} />
```

**Rationale**

- Required for composite widgets that manage focus via keyboard.
- Prevents accessibility violations where a focused container can't receive focus.
- Aligns with WAI-ARIA guidelines for managing descendant focus.

**Automations**

- ESLint: [`jsx-a11y/aria-activedescendant-has-tabindex`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-activedescendant-has-tabindex.md)

---

**[⬆ back to top](#table-of-contents)**

#### `aria-props`

**Use only ARIA attributes that are valid per the WAI-ARIA spec to ensure compatibility with assistive technologies.**

```tsx
// ❌ Bad: Typo in aria attribute name
<input aria-labeledby="address_label" />

// ✅ Good: Valid ARIA attribute name
<input aria-labelledby="address_label" />
```

**Rationale**

- Ensures ARIA attributes conform to the official specification.
- Prevents silent accessibility failures due to misspelled attributes.
- Improves support for screen readers and other assistive tech.

**Automations**

- ESLint: [`jsx-a11y/aria-props`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-props.md)

---

**[⬆ back to top](#table-of-contents)**

#### `aria-proptypes`

**Ensure ARIA attributes use correct value types to avoid broken or misleading accessibility metadata.**

```tsx
// ❌ Bad: Invalid ARIA property value
<span aria-hidden="yes">foo</span>

// ✅ Good: Valid ARIA property value
<span aria-hidden="true">foo</span>
```

**Rationale**

- Enforces proper ARIA value types per spec.
- Avoids accessibility issues caused by invalid attributes.
- Supports accurate screen reader interpretation.

**Automations**

- ESLint: [`jsx-a11y/aria-proptypes`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-proptypes.md)

---

**[⬆ back to top](#table-of-contents)**

#### `aria-role`

**Use only valid, non-abstract ARIA roles to ensure accurate semantics for assistive technologies.**

```tsx
// ❌ Bad: Invalid or abstract ARIA roles
<div role="datepicker"></div>
<div role="range"></div>
<div role=""></div>

// ✅ Good: Valid ARIA roles or omitting unknown roles
<div role="button"></div>
<div></div>
```

**Rationale**

- Ensures roles match the ARIA specification.
- Prevents misleading or broken semantics in the accessibility tree.
- Enhances screen reader and assistive tool behavior.

**Automations**

- ESLint: [`jsx-a11y/aria-role`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-role.md)

---

**[⬆ back to top](#table-of-contents)**

#### `aria-unsupported-elements`

**Remove `role` or `aria-*` attributes from elements that cannot expose ARIA semantics.**

```tsx
// ❌ Bad: meta tag with an ARIA attribute
<meta charset="UTF-8" aria-hidden="false" />

// ✅ Good: meta tag without ARIA attributes
<meta charset="UTF-8" />
```

**Rationale**

- Prevents misleading accessibility metadata on non-visible elements.
- Avoids noise for assistive technologies.
- Aligns with ARIA specification restrictions.

**Automations**

- ESLint: [`jsx-a11y/aria-unsupported-elements`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/aria-unsupported-elements.md)

---

**[⬆ back to top](#table-of-contents)**

#### `autocomplete-valid`

**Ensure `autocomplete` has valid values and matches the input’s type and purpose.**

```tsx
// ❌ Bad: autocomplete value is invalid
<input type="text" autocomplete="incorrect" />

// ✅ Good: valid autocomplete value matching input type
<input type="text" autocomplete="name" />
```

**Rationale**

- Enables accessible autofill for users with cognitive and motor impairments.
- Aligns with HTML spec and WCAG 2.1 guidelines.
- Prevents incorrect or ignored autofill behavior by browsers.

**Automations**

- ESLint: [`jsx-a11y/autocomplete-valid`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/autocomplete-valid.md)

---

**[⬆ back to top](#table-of-contents)**

#### `click-events-have-key-events`

**Pair `onClick` with a keyboard handler (`onKeyDown`, `onKeyUp`, or `onKeyPress`) to maintain keyboard accessibility.**

```tsx
// ❌ Bad: clickable element without keyboard support
<div onClick={() => alert('Clicked!')} />

// ✅ Good: adds keyboard handler for accessibility
<div onClick={() => alert('Clicked!')} onKeyDown={() => alert('Key pressed!')} />
```

**Rationale**

- Supports users relying on keyboards and assistive technologies.
- Prevents inaccessible UI that excludes non-mouse users.
- Aligns with WCAG keyboard accessibility principles.

**Automations**

- ESLint: [`jsx-a11y/click-events-have-key-events`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/click-events-have-key-events.md)

---

**[⬆ back to top](#table-of-contents)**

#### `heading-has-content`

**Provide readable and accessible content within all heading tags (`<h1>`-`<h6>`) to support screen readers.**

```tsx
// ❌ Bad: empty heading without accessible content
<h1 />

// ✅ Good: heading includes text content
<h1>Dashboard</h1>
```

**Rationale**

- Headings help screen reader users navigate content.
- Avoids silent or meaningless headers.
- Encourages semantic, navigable document structure.

**Automations**

- ESLint: [`jsx-a11y/heading-has-content`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/heading-has-content.md)

---

**[⬆ back to top](#table-of-contents)**

#### `html-has-lang`

**Set a `lang` attribute on the `<html>` element to ensure screen readers can announce content correctly.**

```tsx
// ❌ Bad: missing lang attribute on html
<html>

// ✅ Good: lang explicitly defined for localization
<html lang="en">
```

**Rationale**

- Screen readers use `lang` to select correct pronunciation.
- Helps tools determine reading direction and voice.
- Meets WCAG requirements for language identification.

**Automations**

- ESLint: [`jsx-a11y/html-has-lang`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/html-has-lang.md)

---

**[⬆ back to top](#table-of-contents)**

#### `iframe-has-title`

**Add a meaningful `title` to every `<iframe>` to describe its embedded content.**

```tsx
// ❌ Bad: missing or empty title makes content inaccessible
<iframe />

// ✅ Good: descriptive title allows screen reader users to understand content
<iframe title="Map of downtown San Francisco" />
```

**Rationale**

- Screen readers rely on `title` to announce iframe purpose.
- Avoids generic or unclear descriptions of embedded content.
- Satisfies accessibility compliance standards.

**Automations**

- ESLint: [`jsx-a11y/iframe-has-title`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/iframe-has-title.md)

---

**[⬆ back to top](#table-of-contents)**

#### `img-redundant-alt`

**Write `alt` text that excludes words like "image", "photo", or "picture" to improve clarity for screen readers.**

```ts
// ❌ Bad: screen readers already announce it as an image
<img src="cat.jpg" alt="Photo of a sleeping cat" />

// ✅ Good: concise and informative description
<img src="cat.jpg" alt="A sleeping cat on a windowsill" />
```

**Rationale**

- Screen readers already announce images as such.
- Redundant words clutter the experience without adding value.
- Clear descriptions improve accessibility and user experience.

**Automations**

- ESLint: [`jsx-a11y/img-redundant-alt`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/img-redundant-alt.md)

---

**[⬆ back to top](#table-of-contents)**

#### `interactive-supports-focus`

**Ensure elements with interactive ARIA roles and event handlers are focusable using `tabIndex`.**

```tsx
// ❌ Bad: interactive role without tab support
<span onClick={submitForm} role="button">Submit</span>

// ✅ Good: makes the interactive element tabbable
<span onClick={submitForm} role="button" tabIndex={0}>Submit</span>
```

**Rationale**

- Focusability ensures keyboard users can interact with UI controls.
- Maintains compliance with ARIA patterns and WCAG guidelines.
- Prevents traps where non-focusable controls are unreachable.

**Automations**

- ESLint: [`jsx-a11y/interactive-supports-focus`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/interactive-supports-focus.md)

---

**[⬆ back to top](#table-of-contents)**

#### `label-has-associated-control`

**Ensure every `<label>` either wraps a form control or references one via `htmlFor`.**

```tsx
// ❌ Bad: no input inside or associated with label
<label>Surname</label>
<input type="text" />

// ✅ Good: label wraps input
<label>
  Surname
  <input type="text" />
</label>

// ✅ Good: label references input by id
<label htmlFor="surname">Surname</label>
<input id="surname" type="text" />
```

**Rationale**

- Screen readers rely on the association for context.
- Improves form usability for all users.
- Avoids orphaned labels and ambiguous UX.

**Automations**

- ESLint: [`jsx-a11y/label-has-associated-control`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/label-has-associated-control.md)

---

**[⬆ back to top](#table-of-contents)**

#### `media-has-caption`

**Ensure `<audio>` and `<video>` elements include a `<track kind="captions">` or are muted.**

```tsx
// ❌ Bad: video with no captions or mute
<video src="interview.mp4" />

// ✅ Good: captions provided for video
<video src="interview.mp4">
  <track kind="captions" src="interview.vtt" />
</video>

// ✅ Good: muted video doesn't require captions
<video src="background.mp4" muted />
```

**Rationale**

- Captions are essential for deaf and hard-of-hearing users.
- Ensures critical audio information is accessible.
- Prevents media content from being inaccessible or ambiguous.

**Automations**

- ESLint: [`jsx-a11y/media-has-caption`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/media-has-caption.md)

---

**[⬆ back to top](#table-of-contents)**

#### `mouse-events-have-key-events`

**Add `onFocus`/`onBlur` to elements with `onMouseOver`/`onMouseOut` for keyboard accessibility.**

```tsx
// ❌ Bad: mouse event only
<div onMouseOver={() => void 0} />

// ✅ Good: mouse and keyboard events
<div onMouseOver={() => void 0} onFocus={() => void 0} />

// ❌ Bad: mouse out event only
<div onMouseOut={() => void 0} />

// ✅ Good: mouse out and blur paired
<div onMouseOut={() => void 0} onBlur={() => void 0} />
```

**Rationale**

- Ensures keyboard-only users receive the same feedback as mouse users.
- Prevents hover-only behaviors from excluding non-mouse users.
- Supports screen readers and assistive technology.

**Automations**

- ESLint: [`jsx-a11y/mouse-events-have-key-events`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/mouse-events-have-key-events.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-access-key`

**Avoid using the `accessKey` attribute to prevent keyboard and screen reader conflicts.**

```tsx
// ❌ Bad: accessKey creates shortcut conflicts
<button accessKey="s">Save</button>

// ✅ Good: no accessKey used
<button>Save</button>
```

**Rationale**

- Prevents unexpected behavior for keyboard and screen reader users.
- Avoids conflicts with browser and assistive tech shortcuts.
- Encourages accessible and predictable navigation patterns.

**Automations**

- ESLint: [`jsx-a11y/no-access-key`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-access-key.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-autofocus`

**Prevent setting `autoFocus` on elements to avoid disorienting or hijacking user focus.**

```tsx
// ❌ Bad: autoFocus forces focus unexpectedly
<input type="text" autoFocus />

// ✅ Good: input does not hijack user focus
<input type="text" />
```

**Rationale**

- Avoids disrupting expected focus behavior for screen reader and keyboard users.
- Prevents accidental context switching or missed content.
- Supports more predictable and user-driven navigation.

**Automations**

- ESLint: [`jsx-a11y/no-autofocus`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-autofocus.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-distracting-elements`

**Avoid using `<marquee>` or `<blink>` tags that impair accessibility for visually impaired users.**

```tsx
// ❌ Bad: <marquee> causes motion distractions
<marquee>Breaking News</marquee>

// ✅ Good: uses standard text with animation managed via CSS
<div className="scrolling-banner">Breaking News</div>
```

**Rationale**

- Prevents visual distractions for users with motion sensitivity or cognitive impairments.
- Eliminates usage of deprecated and obsolete HTML tags.
- Promotes more accessible and maintainable design practices.

**Automations**

- ESLint: [`jsx-a11y/no-distracting-elements`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-distracting-elements.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-interactive-element-to-noninteractive-role`

**Prevent assigning non-interactive ARIA roles to inherently interactive HTML elements.**

```tsx
// ❌ Bad: turns a button into a non-interactive region
<button role="region">Submit</button>

// ✅ Good: preserves the interactive semantics of the button
<button>Submit</button>

// ✅ Good: wraps a button inside a non-interactive container
<div role="region">
  <button>Submit</button>
</div>
```

**Rationale**

- Maintains semantic meaning of interactive HTML elements.
- Prevents confusion for assistive technologies and users relying on keyboard navigation.
- Aligns with ARIA design patterns and HTML accessibility best practices.

**Automations**

- ESLint: [`jsx-a11y/no-interactive-element-to-noninteractive-role`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-noninteractive-element-interactions`

**Prevent assigning mouse or keyboard event handlers to elements that are not inherently interactive.**

```tsx
// ❌ Bad: non-interactive list item with click handler
<li onClick={handleClick}>Click me</li>

// ✅ Good: add role to indicate interactivity
<li onClick={handleClick} role="button" tabIndex={0}>Click me</li>

// ✅ Good: use a semantically interactive element
<button onClick={handleClick}>Click me</button>
```

**Rationale**

- Preserves semantic clarity for assistive technologies.
- Ensures expected keyboard interactions are supported.
- Prevents misuse of content elements for control behaviors.

**Automations**

- ESLint: [`jsx-a11y/no-noninteractive-element-interactions`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-element-interactions.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-noninteractive-element-to-interactive-role`

**Prevent assigning interactive ARIA roles to elements that are semantically non-interactive.**

```tsx
// ❌ Bad: non-interactive element used with interactive role
<li role="button" onClick={handleClick}>Click me</li>

// ✅ Good: wrap interactive behavior in a proper interactive element
<li>
  <div role="button" onClick={handleClick} tabIndex={0}>Click me</div>
</li>

// ✅ Good: replace with a semantically correct element
<button onClick={handleClick}>Click me</button>
```

**Rationale**

- Maintains semantic integrity between HTML and ARIA.
- Ensures accessible role-behavior alignment for screen readers.
- Prevents UI confusion from inconsistent control usage.

**Automations**

- ESLint: [`jsx-a11y/no-noninteractive-element-to-interactive-role`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-noninteractive-tabindex`

**Avoid setting `tabIndex` on elements that are not interactive or focusable by default.**

```tsx
// ❌ Bad: non-interactive element in tab order
<div tabIndex="0" />
<article tabIndex={0} />
<div role="article" tabIndex="0" />

// ✅ Good: interactive element with appropriate tabIndex
<button tabIndex="0" />
<div role="button" tabIndex="0" />
<div tabIndex="-1" /> // not tabbable, only programmatically focusable
```

**Rationale**

- Preserves the user's expected tab order and avoids unnecessary focus targets.
- Reduces tab ring clutter and improves navigability for keyboard users.
- Enforces alignment between HTML semantics and AX (accessibility) behavior.

**Automations**

- ESLint: [`jsx-a11y/no-noninteractive-tabindex`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-noninteractive-tabindex.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-redundant-roles`

**Do not assign ARIA roles that are already implicit in the HTML element’s semantics.**

```tsx
// ❌ Bad: role is already the implicit default for the element
<button role="button" />
<img role="img" src="foo.jpg" />

// ✅ Good: only override role if semantics are explicitly changing
<button />
<img src="foo.jpg" />
<div role="presentation" />
```

**Rationale**

- Ensures semantic clarity by avoiding unnecessary ARIA attributes.
- Helps assistive technologies interpret the DOM without conflicting roles.
- Reduces noise in code and potential confusion for maintainers.

**Automations**

- ESLint: [`jsx-a11y/no-redundant-roles`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-redundant-roles.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-static-element-interactions`

**Apply an appropriate ARIA `role` when adding keyboard or mouse events to static elements.**

```tsx
// ❌ Bad: div has interactive behavior but no semantic role
<div onClick={() => console.log('clicked')} />

// ✅ Good: div is given a role to match its interaction
<div onClick={() => console.log('clicked')} role="button" tabIndex={0} />
```

**Rationale**

- Improves accessibility by making the intended interaction clear to assistive tech.
- Prevents misuse of static elements as pseudo-controls.
- Promotes use of proper semantics through ARIA roles.

**Automations**

- ESLint: [`jsx-a11y/no-static-element-interactions`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/no-static-element-interactions.md)

---

**[⬆ back to top](#table-of-contents)**

#### `role-has-required-aria-props`

**Ensure every element with an ARIA `role` includes its required `aria-*` attributes.**

```tsx
// ❌ Bad: missing `aria-checked` on a role="checkbox"
<span role="checkbox" aria-labelledby="foo" tabIndex={0}></span>

// ✅ Good: includes the required `aria-checked` attribute
<span role="checkbox" aria-checked="false" aria-labelledby="foo" tabIndex={0}></span>
```

**Rationale**

- Required ARIA props are essential for assistive technologies to interpret roles correctly.
- Prevents misleading semantics and broken accessibility trees.
- Enforces completeness when using custom or ARIA roles.

**Automations**

- ESLint: [`jsx-a11y/role-has-required-aria-props`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-has-required-aria-props.md)

---

**[⬆ back to top](#table-of-contents)**

#### `role-supports-aria-props`

**Use `aria-*` attributes only on elements whose roles support them.**

```tsx
// ❌ Bad: `aria-required` is invalid for role="radio"
<li role="radio" aria-required tabIndex={0} aria-checked="true">Option</li>

// ✅ Good: `aria-required` is applied to the parent radiogroup, not each radio
<ul role="radiogroup" aria-required aria-labelledby="group-label">
  <li role="radio" aria-checked="false" tabIndex={-1}>Option A</li>
  <li role="radio" aria-checked="true" tabIndex={0}>Option B</li>
</ul>
```

**Rationale**

- Prevents misuse of ARIA properties on unsupported roles.
- Avoids misleading or broken semantic interpretations for assistive technologies.
- Encourages correct structural hierarchy for composite widgets.

**Automations**

- ESLint: [`jsx-a11y/role-supports-aria-props`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/role-supports-aria-props.md)

---

**[⬆ back to top](#table-of-contents)**

#### `scope`

**Apply the `scope` attribute exclusively to `<th>` elements to ensure proper table semantics.**

```tsx
// ❌ Bad: `scope` used on a non-table element
<div scope="row">Name</div>

// ✅ Good: `scope` correctly used on a `<th>` element
<th scope="row">Name</th>
```

**Rationale**

- Maintains valid HTML structure by confining `scope` to headers.
- Ensures accessible table navigation for assistive technologies.
- Prevents unintended or invalid semantic interpretations.

**Automations**

- ESLint: [`jsx-a11y/scope`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/scope.md)

---

**[⬆ back to top](#table-of-contents)**

#### `tabindex-no-positive`

**Avoid using positive `tabIndex` to preserve natural keyboard navigation flow.**

```tsx
// ❌ Bad: Disrupts tab order with positive tabIndex
<span tabIndex="3">Next</span>

// ✅ Good: Maintains sequential keyboard focus
<span tabIndex="0">Next</span>
```

**Rationale**

- Enforces predictable tab order.
- Reduces cognitive load for keyboard users.
- Prevents inconsistencies in focus behavior.

**Automations**

- ESLint: [`jsx-a11y/tabindex-no-positive`](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/tabindex-no-positive.md)

---

**[⬆ back to top](#table-of-contents)**

### `react`

#### `display-name`

**Ensure all React components have a `displayName` for better debugging and developer tooling.**

```tsx
// ❌ Bad: anonymous default export
export default ({ name }) => <div>Hello {name}</div>;

// ✅ Good: displayName assigned explicitly
const Hello = ({ name }) => <div>Hello {name}</div>;
Hello.displayName = 'Hello';
export default Hello;
```

**Rationale**

- Helps React DevTools display readable component names.
- Makes debugging and profiling easier.
- Clarifies intent in anonymous or wrapped components.

**Automations**

- ESLint: [`react/display-name`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/display-name.md)

---

**[⬆ back to top](#table-of-contents)**

#### `jsx-key`

**Always include a unique `key` prop for elements in arrays or iterables to help React optimize rendering.**

```tsx
// ❌ Bad: key missing in map
items.map((item) => <Item value={item} />);

// ✅ Good: key included
items.map((item) => (
  <Item
    key={item.id}
    value={item}
  />
));
```

**Rationale**

- React uses `key` to identify which items have changed, added, or removed.
- Missing `key` can lead to inefficient updates or incorrect rendering.
- Explicit `key` improves readability and tooling support.

**Automations**

- ESLint: [`react/jsx-key`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-key.md)

---

**[⬆ back to top](#table-of-contents)**

#### `jsx-no-comment-textnodes`

**Wrap comments in JSX with `{/* */}` to avoid rendering them as literal strings.**

```tsx
// ❌ Bad: comment becomes visible text
<div>// placeholder</div>

// ✅ Good: comment is treated correctly
<div>{/* placeholder */}</div>
```

**Rationale**

- Avoids rendering unintended comment strings in the DOM.
- Prevents misleading visual output and ensures developer intent is respected.
- Maintains consistency with React’s expectations for JSX comment syntax.

**Automations**

- ESLint: [`react/jsx-no-comment-textnodes`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-comment-textnodes.md)

---

**[⬆ back to top](#table-of-contents)**

#### `jsx-no-duplicate-props`

**Avoid specifying the same prop more than once in JSX to prevent unintended overrides.**

```tsx
// ❌ Bad: duplicate 'name' props
<Hello name="John" name="John" />

// ✅ Good: each prop is unique
<Hello firstName="John" lastName="Doe" />
```

**Rationale**

- Prevents accidental prop shadowing and unexpected behavior.
- Enhances code clarity and maintainability.
- Helps identify copy-paste errors in JSX attributes.

**Automations**

- ESLint: [`react/jsx-no-duplicate-props`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-duplicate-props.md)

---

**[⬆ back to top](#table-of-contents)**

#### `jsx-no-target-blank`

**Ensure external links opened with `target="_blank"` include `rel="noreferrer"` for security.**

```tsx
// ❌ Bad: target without rel
<a href="https://example.com" target="_blank">Visit</a>

// ✅ Good: target includes rel="noreferrer"
<a href="https://example.com" target="_blank" rel="noreferrer">Visit</a>
```

**Rationale**

- Prevents tabnabbing attacks from malicious linked pages.
- Avoids leaking the `Referer` header to external sites.
- Ensures safe use of `target="_blank"` in anchor and form elements.

**Automations**

- ESLint: [`react/jsx-no-target-blank`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-target-blank.md)

---

**[⬆ back to top](#table-of-contents)**

#### `jsx-no-undef`

**Disallow usage of JSX components that haven't been imported or declared.**

```tsx
// ❌ Bad: undeclared component used
<Hello name='John' />;

// ✅ Good: component is declared
import Hello from './Hello';
<Hello name='John' />;
```

**Rationale**

- Prevents `ReferenceError` from using undefined JSX identifiers.
- Catches typos and missing imports in JSX.
- Helps ensure all components are traceable and maintainable.

**Automations**

- ESLint: [`react/jsx-no-undef`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-undef.md)

---

**[⬆ back to top](#table-of-contents)**

#### `jsx-uses-vars`

**Ensure variables used in JSX are marked as used for linting.**

```tsx
// ❌ Bad: Hello is flagged as unused
import Hello from './Hello';

<Hello name='World' />;

// ✅ Good: JSX marks Hello as used
import Hello from './Hello';

const App = () => <Hello name='World' />;
```

**Rationale**

- Prevents `no-unused-vars` from incorrectly flagging JSX-used components.
- Ensures code isn't refactored or removed incorrectly by linters or IDEs.

**Automations**

- ESLint: [`react/jsx-uses-vars`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-vars.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-children-prop`

**Nest children in JSX instead of passing them as the `children` prop.**

```tsx
// ❌ Bad: children passed explicitly as prop
<MyComponent children={<div>Hello</div>} />

// ✅ Good: children nested inside component
<MyComponent>
  <div>Hello</div>
</MyComponent>
```

**Rationale**

- Aligns with idiomatic React and JSX usage.
- Prevents unexpected rendering behavior and enhances readability.
- Reduces misuse of `children` as a configurable prop.

**Automations**

- ESLint: [`react/no-children-prop`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-children-prop.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-danger-with-children`

**Avoid using both `children` and `dangerouslySetInnerHTML` on the same element.**

```tsx
// ❌ Bad: both children and dangerouslySetInnerHTML used
<div dangerouslySetInnerHTML={{ __html: 'HTML' }}>
  Ignored content
</div>

// ✅ Good: only dangerouslySetInnerHTML used
<div dangerouslySetInnerHTML={{ __html: 'HTML' }} />

// ✅ Good: only children used
<div>
  Regular content
</div>
```

**Rationale**

- Prevents silent overwriting of children by `dangerouslySetInnerHTML`.
- Matches React's built-in runtime warning.
- Promotes safer, clearer content rendering.

**Automations**

- ESLint: [`react/no-danger-with-children`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-danger-with-children.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-deprecated`

**Avoid using deprecated React methods or APIs to ensure forward compatibility.**

```tsx
// ❌ Bad: deprecated lifecycle method
componentWillReceiveProps(nextProps) {
  // ...
}

// ✅ Good: safe lifecycle replacement
UNSAFE_componentWillReceiveProps(nextProps) {
  // or refactor with getDerivedStateFromProps
}

// ❌ Bad: deprecated rendering method in React 18+
ReactDOM.render(<App />, container);

// ✅ Good: modern root API
import { createRoot } from 'react-dom/client';
createRoot(container).render(<App />);
```

**Rationale**

- Prevents use of APIs removed in newer React versions.
- Encourages safer alternatives and future-proofing.
- Aligns with React’s maintenance and upgrade practices.

**Automations**

- ESLint: [`react/no-deprecated`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-deprecated.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-direct-mutation-state`

**Always use `setState` instead of mutating `this.state` directly, except in constructors.**

```tsx
// ❌ Bad: mutating state directly after mount
componentDidMount() {
  this.state.count = 5;
}

// ✅ Good: use setState to trigger updates properly
componentDidMount() {
  this.setState({ count: 5 });
}

// ✅ Good: safe assignment in constructor
constructor(props) {
  super(props);
  this.state = { count: 0 };
}
```

**Rationale**

- Ensures React’s update lifecycle is respected.
- Avoids bugs caused by state being overwritten by `setState`.
- Maintains consistency and predictability in components.

**Automations**

- ESLint: [`react/no-direct-mutation-state`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-direct-mutation-state.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-find-dom-node`

**Use callback refs instead of `findDOMNode` to access DOM nodes.**

```tsx
// ❌ Bad: uses deprecated findDOMNode
componentDidMount() {
  findDOMNode(this).scrollIntoView();
}

// ✅ Good: uses callback ref for direct DOM access
componentDidMount() {
  this.node.scrollIntoView();
}
render() {
  return <div ref={node => this.node = node} />;
}
```

**Rationale**

- `findDOMNode` is deprecated and blocks future React optimizations.
- Callback refs are more explicit and safer with component updates.
- Encourages modern, forward-compatible patterns.

**Automations**

- ESLint: [`react/no-find-dom-node`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-find-dom-node.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-is-mounted`

**Do not use `isMounted`; track component state with flags or logic instead.**

```tsx
// ❌ Bad: uses deprecated isMounted
handleClick() {
  setTimeout(() => {
    if (this.isMounted()) return;
  });
}

// ✅ Good: uses a mounted flag
componentDidMount() {
  this._isMounted = true;
}
componentWillUnmount() {
  this._isMounted = false;
}
handleClick() {
  setTimeout(() => {
    if (!this._isMounted) return;
  });
}
```

**Rationale**

- `isMounted` is deprecated and unsupported in ES6 class components.
- Encourages predictable lifecycle tracking.
- Prevents false assumptions about render safety.

**Automations**

- ESLint: [`react/no-is-mounted`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-is-mounted.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-render-return-value`

**Do not rely on the return value of `ReactDOM.render`; use refs or callbacks instead.**

```tsx
// ❌ Bad: uses return value from render
const app = ReactDOM.render(<App />, root);
doSomething(app);

// ✅ Good: uses ref to access the instance
ReactDOM.render(<App ref={doSomething} />, root);

// ✅ Good: uses render callback
ReactDOM.render(<App />, root, doSomething);
```

**Rationale**

- The return value of `render()` is legacy and may break in future React versions.
- Promotes use of supported patterns like callback refs.
- Avoids issues with async rendering in concurrent mode.

**Automations**

- ESLint: [`react/no-render-return-value`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-render-return-value.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-string-refs`

**Use callback refs instead of string identifiers for `ref` attributes in React.**

```tsx
// ❌ Bad: uses legacy string ref
<div ref='myDiv' />;

// ✅ Good: uses callback ref
<div
  ref={(el) => {
    this.myDiv = el;
  }}
/>;
```

**Rationale**

- String refs are legacy and will be deprecated.
- Callback refs provide more flexibility and are fully supported.
- Aligns with current React best practices.

**Automations**

- ESLint: [`react/no-string-refs`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-string-refs.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unescaped-entities`

**Escape special characters like `>`, `"`, `'`, and `}` in JSX to avoid rendering issues or unintended text.**

```tsx
// ❌ Bad: unescaped special characters
<div> > </div>
<div> "quote" </div>
<div> {'Text'}}</div>

// ✅ Good: escaped or safely embedded characters
<div> &gt; </div>
<div> &quot;quote&quot; </div>
<div> {'Text}'} </div>
```

**Rationale**

- Prevents misrendered output due to misplaced characters.
- Ensures JSX integrity and correct visual output.
- Avoids subtle bugs caused by syntactic ambiguity.

**Automations**

- ESLint: [`react/no-unescaped-entities`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-unescaped-entities.md)

---

**[⬆ back to top](#table-of-contents)**

#### `no-unknown-property`

**Use camelCased standard DOM property names in JSX to avoid rendering issues and React warnings.**

```tsx
// ❌ Bad: non-standard or incorrect DOM attributes
<div class='hello'>Hello World</div>;
<div abc='something'>Invalid attribute</div>;
<div aria-foo='bar' />;

// ✅ Good: correct property casing and valid attributes
<div className='hello'>Hello World</div>;
<div aria-label='Description' />;
<div data-index={12}>Data item</div>;
```

**Rationale**

- Aligns JSX with React’s DOM property mapping.
- Avoids silent bugs and warning messages in the console.
- Supports future compatibility with React’s validation system.

**Automations**

- ESLint: [`react/no-unknown-property`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-unknown-property.md)

---

**[⬆ back to top](#table-of-contents)**

#### `prop-types`

**Define `propTypes` in React components to validate received props and catch incorrect usage early.**

```tsx
// ❌ Bad: props used without validation
function Hello({ name }) {
  return <div>Hello {name}</div>;
}

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
Hello.propTypes = {
  firstname: PropTypes.string.isRequired,
  // Missing 'name' prop type
};

// ✅ Good: props declared and validated
function Hello({ name }) {
  return <div>Hello {name}</div>;
}
Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

class Hello extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
Hello.propTypes = {
  name: PropTypes.string.isRequired,
};
```

**Rationale**

- Improves component reusability and reliability.
- Enables runtime type checking of props for early error detection.
- Provides better tooling and documentation for developers using your component.

**Automations**

- ESLint: [`react/prop-types`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/prop-types.md)

---

**[⬆ back to top](#table-of-contents)**

#### `require-render-return`

**Always return a JSX element or value from the `render()` method in class components.**

```tsx
// ❌ Bad: render method missing a return
class Hello extends React.Component {
  render() {
    <div>Hello</div>;
  }
}

// ✅ Good: render method explicitly returns JSX
class Hello extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}
```

**Rationale**

- Prevents silent failures where `render()` doesn't return a value.
- Ensures consistent rendering behavior across components.
- Aligns with React expectations for `render()` semantics.

**Automations**

- ESLint: [`react/require-render-return`](https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/require-render-return.md)

---

**[⬆ back to top](#table-of-contents)**

### `react-hooks`

#### `exhaustive-deps`

**Include all referenced variables in the dependency array of useEffect and similar hooks to avoid stale closures.**

```tsx
// ❌ Bad: Missing dependency causes stale value
function MyComponent({ value }) {
  useEffect(() => {
    console.log(value); // might log stale value
  }, []); // should include `value`
}

// ✅ Good: Dependency array is complete
function MyComponent({ value }) {
  useEffect(() => {
    console.log(value);
  }, [value]); // correctly tracks dependency
}
```

**Rationale**

- Prevents bugs caused by stale closures inside effects.
- Helps React and tools like React DevTools reason about when effects should run.
- Encourages developers to handle reactivity explicitly.

**Automations**

- ESLint: [`react-hooks/exhaustive-deps`](https://www.npmjs.com/package/eslint-plugin-react-hooks)

---

**[⬆ back to top](#table-of-contents)**

#### `rules-of-hooks`

**Ensure React Hooks are called in valid contexts and consistent order to preserve state and behavior.**

```tsx
// ❌ Bad: Hook called inside a condition
function MyComponent() {
  if (someCondition) {
    useEffect(() => {
      console.log('This is invalid');
    }, []);
  }
  return null;
}

// ✅ Good: Hook called unconditionally at the top level
function MyComponent() {
  useEffect(() => {
    console.log('Valid use of hook');
  }, []);
  return null;
}
```

**Rationale**

- React relies on the order of hooks to associate state and effects correctly.
- Violating hook rules can cause inconsistent behavior or runtime errors.
- Ensures readability and predictability of hook-based components.

**Automations**

- ESLint: [`react-hooks/rules-of-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)

---

**[⬆ back to top](#table-of-contents)**

## Style Guidelines

### `prettier`

#### `arrow-parens`

**Wrap all arrow function parameters in parentheses, even single params.**

```ts
// ❌ Bad: No parens
const double = x => x * 2;

// ✅ Good: Always use parens for consistency and editability
const double = (x) => x * 2;
```

**Rationale**

- Easier to add types or defaults (`(x: number) => x`).
- Reduces churn in version control when editing.
- Avoids inconsistent formatting in larger teams.

**Automations**

- Prettier: [`arrowParens`](https://prettier.io/docs/en/options.html#arrow-function-parentheses)

---

**[⬆ back to top](#table-of-contents)**

#### `bracket-same-line`

**Place the closing `>` of a multiline JSX tag on its own line.**

```tsx
// ❌ Bad: `>` with last prop
<button
  className="prettier-class"
  onClick={handleClick}>
  Click Me
</button>

// ✅ Good: `>` on its own line
<button
  className="prettier-class"
  onClick={handleClick}
>
  Click Me
</button>
```

**Rationale**

- Matches HTML-like formatting.
- Improves visual separation between tag structure and content.
- Reduces visual clutter in multi-line elements.

**Automations**

- Prettier: [`bracketSameLine`](https://prettier.io/docs/en/options.html#bracket-line)

---

**[⬆ back to top](#table-of-contents)**

#### `bracket-spacing`

**Add spaces between brackets in object literals for readability.**

```ts
// ❌ Bad: No space after the opening or before the closing brace
const obj = {foo: 'bar'};

// ✅ Good: Space between brackets enhances readability
const obj = { foo: 'bar' };
```

**Rationale**

- Increases visual separation of properties.
- Matches common community standards (e.g., Airbnb).
- Makes objects easier to scan quickly.

**Automations**

- Prettier: [`bracketSpacing`](https://prettier.io/docs/en/options.html#bracket-spacing)

---

**[⬆ back to top](#table-of-contents)**

#### `embedded-language-formatting`

**Format recognized code blocks inside templates, markdown, or tagged strings.**

````md
<!-- ❌ Bad: Raw HTML block not formatted -->

```html
<div><span>hi</span></div>
```

<!-- ✅ Good: HTML block formatted -->

```html
<div>
  <span>hi</span>
</div>
```
````

**Rationale**

- Ensures embedded snippets follow same style rules.
- Improves readability and consistency across mixed-language documents.

**Automations**

- Prettier: [`embeddedLanguageFormatting`](https://prettier.io/docs/en/options.html#embedded-language-formatting)

---

**[⬆ back to top](#table-of-contents)**

#### `end-of-line`

**Use consistent line endings (`\n`) across all files to avoid cross-platform diffs.**

```ts
// ❌ Bad: Mixed line endings
const a = 1;\r\n
const b = 2;\n

// ✅ Good: Uniform line endings
const a = 1;
const b = 2;
```

**Rationale**

- Reduces Git diffs caused by accidental CRLF commits.
- Improves collaboration across Windows, macOS, and Linux.
- Fixes broken blame/annotate views caused by hidden line ending changes.

**Automations**

- Prettier: [`endOfLine`](https://prettier.io/docs/en/options.html#end-of-line)

---

**[⬆ back to top](#table-of-contents)**

#### `html-whitespace-sensitivity`

**Follow CSS `display` rules to determine if spaces between tags matter.**

```html
<!-- ❌ Bad: Unexpected whitespace collapse -->
<div><span>First</span> <span>Second</span></div>

<!-- ✅ Good: Maintains visual whitespace -->
<div><span>First</span>&nbsp;<span>Second</span></div>
```

**Rationale**

- Matches how browsers interpret space in HTML.
- Prevents accidental layout changes from template formatting.
- Critical in whitespace-sensitive contexts like templates.

**Automations**

- Prettier: [`htmlWhitespaceSensitivity`](https://prettier.io/docs/en/options.html#html-whitespace-sensitivity)

---

**[⬆ back to top](#table-of-contents)**

#### `jsx-single-quote`

**Use single quotes in JSX attributes unless double quotes avoid escaping.**

```tsx
// ❌ Bad: Uses double quotes
const component = <Greeting message='Hello' />;

// ✅ Good: Uses single quotes
const component = <Greeting message='Hello' />;
```

**Rationale**

- Aligns with JavaScript string quote preferences.
- Reduces quote-style context switching between JS and JSX.
- Improves consistency across the codebase.

**Automations**

- Prettier: [`jsxSingleQuote`](https://prettier.io/docs/en/options.html#jsx-quotes)

---

**[⬆ back to top](#table-of-contents)**

#### `object-wrap`

**Preserve multiline formatting for objects if they are started multiline.**

```ts
// ❌ Bad: Forcibly collapses multiline object to one line
const config = { foo: 'bar', baz: 'qux' };

// ✅ Good: Respects the newline to signal multiline preference
const config = {
  foo: 'bar',
  baz: 'qux',
};
```

**Rationale**

- Preserves formatting choices for clarity.
- Enables manual control of object shape without full disables.
- Avoids premature collapsing of semantically-grouped properties.

**Automations**

- Prettier: [`objectWrap`](https://prettier.io/docs/en/options.html#object-wrap)

---

**[⬆ back to top](#table-of-contents)**

#### `print-width`

**Use a consistent line width of 100 characters to improve code readability and diff clarity.**

```ts
// ❌ Bad: Line runs far beyond recommended width
const example = 'This line is extremely long and extends well past any reasonable print width settings for readability';

// ✅ Good: Line is wrapped for readability within 100 characters
const example =
  'This line is broken up to respect the print width limit and improve code readability';
```

**Rationale**

- Improves readability, especially on smaller screens or side-by-side diffs.
- Reduces horizontal scrolling and visual clutter.
- Encourages thoughtful code layout and decomposition.

**Automations**

- Prettier: [`printWidth`](https://prettier.io/docs/en/options.html#print-width)

---

**[⬆ back to top](#table-of-contents)**

#### `prose-wrap`

**Leave markdown prose line breaks untouched for compatibility with linebreak-sensitive renderers.**

```md
<!-- ❌ Bad: Lines rewrapped and hard to diff -->

Markdown is an incredibly flexible writing tool that wraps every paragraph
at the print width, which causes commit noise.

<!-- ✅ Good: Line breaks are preserved -->

Markdown is an incredibly flexible writing tool  
that respects manual line breaks.
```

**Rationale**

- Maintains intentional line breaks.
- Prevents GitHub, Bitbucket, and other platforms from mis-rendering content.
- Reduces churn in prose diffs.

**Automations**

- Prettier: [`proseWrap`](https://prettier.io/docs/en/options.html#prose-wrap)

---

**[⬆ back to top](#table-of-contents)**

#### `quote-props`

**Only quote object property names when required by syntax.**

```ts
// ❌ Bad: Quotes all property names needlessly
const obj = { 'valid': true, 'example': false };

// ✅ Good: Quotes only where necessary
const obj = { valid: true, 'not-valid!': false };
```

**Rationale**

- Reduces visual clutter in object literals.
- Avoids misleading cues that all properties are strings.
- Follows modern JS best practices for property notation.

**Automations**

- Prettier: [`quoteProps`](https://prettier.io/docs/en/options.html#quote-props)

---

**[⬆ back to top](#table-of-contents)**

#### `semi`

**Insert semicolons at the end of all statements to avoid ambiguity and ASI pitfalls.**

```ts
// ❌ Bad: Omits semicolons, relying on automatic insertion
const name = 'Ada'
const age = 42

// ✅ Good: Uses explicit semicolons
const name = 'Ada';
const age = 42;
```

**Rationale**

- Avoids edge cases and bugs from Automatic Semicolon Insertion (ASI).
- Ensures consistency and reduces cognitive load in code reviews.
- Works well with minifiers and concatenators.

**Automations**

- Prettier: [`semi`](https://prettier.io/docs/en/options.html#semicolons)

---

**[⬆ back to top](#table-of-contents)**

#### `single-attribute-per-line`

**Allow multiple props or attributes on the same line when short enough.**

```tsx
// ✅ Good: Compact tag
<Component foo="1" bar="2" baz="3" />

// ✅ Also acceptable: Split only if long
<Component
  foo="1"
  bar="2"
  baz="3"
/>
```

**Rationale**

- Keep lines compact unless they exceed line length limits.
- Reduces vertical space usage.
- Easier to scan for small, simple components.

**Automations**

- Prettier: [`singleAttributePerLine`](https://prettier.io/docs/en/options.html#single-attribute-per-line)

---

**[⬆ back to top](#table-of-contents)**

#### `single-quote`

**Use single quotes for string literals unless double quotes avoid escaping.**

```ts
// ❌ Bad: Uses double quotes unnecessarily
const message = "Hello, world";

// ✅ Good: Uses single quotes
const message = 'Hello, world';

// ✅ Good: Keeps double quotes to avoid escaping
const quote = "I'm fine with this.";
```

**Rationale**

- Enhances consistency and visual distinction from HTML/JSX.
- Reduces the need to escape quotes in most string literals.
- Aligns with popular JavaScript style guides (e.g., Airbnb, StandardJS).

**Automations**

- Prettier: [`singleQuote`](https://prettier.io/docs/en/options.html#quotes)

---

**[⬆ back to top](#table-of-contents)**

#### `tab-width`

**Use a consistent 2 spaces for each indentation level for better readability.**

```ts
// ❌ Bad: Inconsistent and too-wide indentation
function greet() {
        console.log('Hi');
}

// ✅ Good: Indented using 2 spaces per level
function greet() {
  console.log('Hi');
}
```

**Rationale**

- Maintains visual consistency across the codebase.
- Enhances readability and makes nested structures easier to follow.
- Avoids accidental misalignment from mixed-width spaces.

**Automations**

- Prettier: [`tabWidth`](https://prettier.io/docs/en/options.html#tab-width)

---

**[⬆ back to top](#table-of-contents)**

#### `trailing-commas`

**Add trailing commas to multiline arrays, objects, and parameters for cleaner diffs.**

```ts
// ❌ Bad: No trailing commas in multiline structure
const arr = [
  'one',
  'two'
];

// ✅ Good: Trailing comma makes future diffs cleaner
const arr = [
  'one',
  'two',
];

function callMe(
  first: string,
  second: number
) {}
```

**Rationale**

- Reduces diff noise when adding new lines.
- Improves version control history clarity.
- Aligns with modern JavaScript and TypeScript practices.

**Automations**

- Prettier: [`trailingComma`](https://prettier.io/docs/en/options.html#trailing-commas)

---

**[⬆ back to top](#table-of-contents)**

#### `use-tabs`

**Indent code using spaces instead of tabs to ensure consistent rendering across environments.**

```ts
// ❌ Bad: Indented using tabs (invisible differences)
function greet() {
  console.log('Hello');
}

// ✅ Good: Indented using spaces
function greet() {
  console.log('Hello');
}
```

**Rationale**

- Spaces render uniformly across different editors and platforms.
- Avoids rendering discrepancies and diff noise caused by mixed indentation styles.
- Encourages consistency when collaborating across teams.

**Automations**

- Prettier: [`useTabs`](https://prettier.io/docs/en/options.html#tabs)

---

**[⬆ back to top](#table-of-contents)**

## Setup

Mozayk ESLint and Prettier configurations. This packages provides a set of rules for maintaining consistent code quality across projects following this guide.

**Installation**

```bash
npm install --save-dev \
  @mozayk/eslint-config-base \
  @mozayk/eslint-config-typescript \
  @mozayk/eslint-config-react \
  @mozayk/prettier-config \
  @typescript-eslint/eslint-plugin@^8 \
  @typescript-eslint/parser@^8 \
  eslint@^9.7 \
  eslint-import-resolver-typescript@^4 \
  eslint-plugin-import@^2.31 \
  eslint-plugin-jsx-a11y@^6.10 \
  eslint-plugin-react@^7.35 \
  eslint-plugin-react-hooks@^5 \
  prettier@^3 \
  typescript@^5.8
```

or

```bash
yarn add --dev \
  @mozayk/eslint-config-base \
  @mozayk/eslint-config-typescript \
  @mozayk/eslint-config-react \
  @mozayk/prettier-config \
  @typescript-eslint/eslint-plugin@^8 \
  @typescript-eslint/parser@^8 \
  eslint@^9.7 \
  eslint-import-resolver-typescript@^4 \
  eslint-plugin-import@^2.31 \
  eslint-plugin-jsx-a11y@^6.10 \
  eslint-plugin-react@^7.35 \
  eslint-plugin-react-hooks@^5 \
  prettier@^3 \
  typescript@^5.8
```

**Usage**

1. Create or update your `eslint.config.js`:

```javascript
import mozaykBaseConfig from '@mozayk/eslint-config-base';
import mozaykTypeScriptConfig from '@mozayk/eslint-config-typescript';
import mozaykReactConfig from '@mozayk/eslint-config-react';
import * as typescriptParser from '@typescript-eslint/parser';
import globals from 'globals';

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...mozaykBaseConfig,
  ...mozaykTypeScriptConfig,
  ...mozaykReactConfig,
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

2. Create or update your `prettier.config.js`:

```javascript
import mozaykPrettierConfig from '@mozayk/prettier-config';

/** @type {import("prettier").Config} */
export default {
  ...mozaykPrettierConfig,
  // Your custom rules here
};
```

3. Add scripts to your `package.json`:

```json
{
  "scripts": {
    "lint": "eslint . --max-warnings 0",
    "format": "prettier . --write"
  }
}
```

**Packages**

- [`@mozayk/eslint-config-base`](https://www.npmjs.com/package/@mozayk/eslint-config-base) for JavaScript projects.
- [`@mozayk/eslint-config-typescript`](https://www.npmjs.com/package/@mozayk/eslint-config-typescript) for TypeScript support.
- [`@mozayk/eslint-config-react`](https://www.npmjs.com/package/@mozayk/eslint-config-react) adds React and JSX rules.
- [`@mozayk/prettier-config`](https://www.npmjs.com/package/@mozayk/prettier-config) for Prettier configuration.

---

**[⬆ back to top](#table-of-contents)**

## Extract Rules for AI Agents

Clone [this](https://github.com/mozayk/typescript-style-guide) repository and use the following commands to extract rules for AI agents:

- [**Cursor**](https://docs.cursor.com/context/rules): `npm run extract-rules:cursor` or `yarn extract-rules:cursor`
- [**GitHub Copilot**](https://code.visualstudio.com/docs/copilot/copilot-customization#_custom-instructions): `npm run extract-rules:copilot` or `yarn extract-rules:copilot`
- [**Windsurf**](https://docs.windsurf.com/windsurf/cascade/memories#rules): `npm run extract-rules:windsurf` or `yarn extract-rules:windsurf`

**AI Agents**

You can try the [Mozayk Engineer](https://chatgpt.com/g/g-683e17e073688191a16e615d6bd60832-mozayk-engineer) agent on **OpenAI ChatGPT**.

**MCP Servers**

Setup [ESLint MCP Server](https://eslint.org/docs/latest/use/mcp) to integrate ESLint with your IDE agent.

---

**[⬆ back to top](#table-of-contents)**

## In the Wild

This is a list of organizations using this style guide. Send us a pull request and we'll add you!

- **Mozayk**: [mozayk/typescript-style-guide](https://github.com/mozayk/typescript-style-guide)

---

**[⬆ back to top](#table-of-contents)**

## Contributors

- [View Contributors](https://github.com/mozayk/typescript-style-guide/graphs/contributors)

---

**[⬆ back to top](#table-of-contents)**

## Acknowledgments

This guide includes adapted content from the following open-source projects, primarily licensed under the MIT License, with noted exceptions:

- **Airbnb and contributors**: [airbnb/javascript](https://github.com/airbnb/javascript)
- **Alex Gorbatchev and contributors**: [import-js/eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript) _(licensed under the ISC License)_
- **Ben Mosher and contributors**: [import-js/eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- **Ethan Cohen and contributors**: [jsx-eslint/eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- **James Long and contributors**: [prettier/prettier](https://github.com/prettier/prettier)
- **Meta Platforms and contributors**: [facebook/react](https://github.com/facebook/react)
- **OpenJS Foundation and contributors**: [eslint/eslint](https://github.com/eslint/eslint)
- **typescript-eslint and contributors**: [typescript-eslint/typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)
- **Yannick Croissant and contributors**: [jsx-eslint/eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)

> See [Third-Party Licenses](./THIRD_PARTY_LICENSES.md) for full details.

---

**[⬆ back to top](#table-of-contents)**

## License

MIT License

Copyright (c) 2025 Mozayk and contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

**[⬆ back to top](#table-of-contents)**

## Amendments

We encourage you to fork this guide and change the guidelines to fit your team’s style guide. Below, you may list some amendments to the style guide. This allows you to periodically update your style guide without having to deal with merge conflicts.
