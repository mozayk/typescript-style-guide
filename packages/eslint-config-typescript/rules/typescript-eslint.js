/** @type {import("eslint").Linter.Config} */
export default {
  rules: {
    // TypeScript Compiler: `ts(2335)` `ts(2377)`
    // https://eslint.org/docs/latest/rules/constructor-super
    'constructor-super': 'off',

    // TypeScript Compiler: `ts(2378)`
    // https://eslint.org/docs/latest/rules/getter-return
    'getter-return': 'off',

    // TypeScript Compiler: `ts(2629)`
    // https://eslint.org/docs/latest/rules/no-class-assign
    'no-class-assign': 'off',

    // TypeScript Compiler: `ts(2588)`
    // https://eslint.org/docs/latest/rules/no-const-assign
    'no-const-assign': 'off',

    // TypeScript Compiler: `ts(2300)`
    // https://eslint.org/docs/latest/rules/no-dupe-args
    'no-dupe-args': 'off',

    // TypeScript Compiler: `ts(2300)` `ts(2393)`
    // https://eslint.org/docs/latest/rules/no-dupe-class-members
    'no-dupe-class-members': 'off',

    // TypeScript Compiler: `ts(1117)`
    // https://eslint.org/docs/latest/rules/no-dupe-keys
    'no-dupe-keys': 'off',

    // TypeScript Compiler: `ts(2630)`
    // https://eslint.org/docs/latest/rules/no-func-assign
    'no-func-assign': 'off',

    // TypeScript Compiler: `ts(2540)` `ts(2632)`
    // https://eslint.org/docs/latest/rules/no-import-assign
    'no-import-assign': 'off',

    // TypeScript Compiler: `ts(7009)`
    // https://eslint.org/docs/latest/rules/no-new-native-nonconstructor
    'no-new-native-nonconstructor': 'off',

    // TypeScript Compiler: `ts(2349)`
    // https://eslint.org/docs/latest/rules/no-obj-calls
    'no-obj-calls': 'off',

    // TypeScript Compiler: `ts(2451)`
    // https://eslint.org/docs/latest/rules/no-redeclare
    'no-redeclare': 'off',

    // TypeScript Compiler: `ts(2408)`
    // https://eslint.org/docs/latest/rules/no-setter-return
    'no-setter-return': 'off',

    // TypeScript Compiler: `ts(2376)` `ts(17009)`
    // https://eslint.org/docs/latest/rules/no-this-before-super
    'no-this-before-super': 'off',

    // TypeScript Compiler: `ts(2304)` `ts(2552)`
    // https://eslint.org/docs/latest/rules/no-undef
    'no-undef': 'off',

    // TypeScript Compiler: `ts(7027)`
    // https://eslint.org/docs/latest/rules/no-unreachable
    'no-unreachable': 'off',

    // TypeScript Compiler: `ts(2322)` `ts(2358)` `ts(2365)`
    // https://eslint.org/docs/latest/rules/no-unsafe-negation
    'no-unsafe-negation': 'off',

    // TypeScript Compiler: `ts(1101)` `ts(2410)`
    // https://eslint.org/docs/latest/rules/no-with
    'no-with': 'off',
  },
};
