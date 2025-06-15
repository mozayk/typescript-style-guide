/** @type {import("eslint").Linter.Config} */
export default {
  rules: {
    // Enforce Hook Rules Consistently
    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/rules-of-hooks': 'error',

    // Track Hook Dependencies Explicitly
    // https://www.npmjs.com/package/eslint-plugin-react-hooks
    'react-hooks/exhaustive-deps': 'warn',
  },
};
