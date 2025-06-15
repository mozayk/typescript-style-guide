/** @type {import("eslint").Linter.Config} */
export default {
  rules: {
    // Prevent false unused React import warnings
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-react.md
    'react/jsx-uses-react': 'off',

    // Import React when using JSX
    // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/jsx-uses-react.md
    'react/react-in-jsx-scope': 'off',
  },
};
