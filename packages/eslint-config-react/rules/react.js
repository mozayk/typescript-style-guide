/** @type {import("eslint").Linter.Config} */
export default {
  rules: {
    // Name All React Components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/display-name.md
    'react/display-name': 'error',

    // Add `key` Prop to JSX in Lists
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-key.md
    'react/jsx-key': 'error',

    // Disallow JSX Comments as Text Nodes
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-comment-textnodes.md
    'react/jsx-no-comment-textnodes': 'error',

    // Disallow Duplicate Props in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-duplicate-props': 'error',

    // Require `rel="noreferrer"` with `target="_blank"
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-target-blank.md
    'react/jsx-no-target-blank': 'error',

    // Disallow undefined JSX components
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-no-undef.md
    'react/jsx-no-undef': 'error',

    // Prevent false unused React import warnings
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': 'error',

    // Prevent false unused variable warnings from JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-vars.md
    'react/jsx-uses-vars': 'error',

    // Avoid passing children via props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-children-prop.md
    'react/no-children-prop': 'error',

    // Don’t combine children and `dangerouslySetInnerHTML`
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-danger-with-children.md
    'react/no-danger-with-children': 'error',

    // Avoid deprecated React APIs
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-deprecated.md
    'react/no-deprecated': 'error',

    // Avoid direct state mutation
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-direct-mutation-state.md
    'react/no-direct-mutation-state': 'error',

    // Avoid `findDOMNode` usage
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-find-dom-node.md
    'react/no-find-dom-node': 'error',

    // Avoid `isMounted` usage
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-is-mounted.md
    'react/no-is-mounted': 'error',

    // Avoid using return value of `ReactDOM.render`
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-render-return-value.md
    'react/no-render-return-value': 'error',

    // Avoid using string refs
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-string-refs.md
    'react/no-string-refs': 'error',

    // Escape special characters in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-unescaped-entities.md
    'react/no-unescaped-entities': 'error',

    // Use valid DOM properties in JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/no-unknown-property.md
    'react/no-unknown-property': 'error',

    // Validate component props
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/prop-types.md
    'react/prop-types': 'error',

    // Import React when using JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/react-in-jsx-scope.md
    'react/react-in-jsx-scope': 'error',

    // Return JSX from render methods
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/require-render-return.md
    'react/require-render-return': 'error',
  },
};
