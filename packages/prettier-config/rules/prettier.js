/** @type {import("prettier").Config} */
export default {
  // Always use parentheses in arrow functions
  // https://prettier.io/docs/en/options.html#arrow-function-parentheses
  arrowParens: 'always',

  // Place closing bracket on its own line
  // https://prettier.io/docs/en/options.html#bracket-line
  bracketSameLine: false,

  // Include spaces inside braces
  // https://prettier.io/docs/en/options.html#bracket-spacing
  bracketSpacing: true,

  // Format embedded code
  // https://prettier.io/docs/en/options.html#embedded-language-formatting
  embeddedLanguageFormatting: 'auto',

  // Normalize line endings to LF
  // https://prettier.io/docs/en/options.html#end-of-line
  endOfLine: 'lf',

  // Respect whitespace sensitivity in HTML-like templates
  // https://prettier.io/docs/en/options.html#html-whitespace-sensitivity
  htmlWhitespaceSensitivity: 'css',

  // Use single quotes in JSX attributes
  // https://prettier.io/docs/en/options.html#jsx-quotes
  jsxSingleQuote: true,

  // Preserve object formatting intent
  // https://prettier.io/docs/en/options.html#object-wrap
  objectWrap: 'preserve',

  // Limit line length for readability
  // https://prettier.io/docs/en/options.html#print-width
  printWidth: 100,

  // Preserve prose line breaks in Markdown
  // https://prettier.io/docs/en/options.html#prose-wrap
  proseWrap: 'preserve',

  // Quote object properties only when necessary
  // https://prettier.io/docs/en/options.html#quote-props
  quoteProps: 'as-needed',

  // Always use semicolons to terminate statements
  // https://prettier.io/docs/en/options.html#semicolons
  semi: true,

  // Allow multiple attributes per line in markup
  // https://prettier.io/docs/en/options.html#single-attribute-per-line
  singleAttributePerLine: false,

  // Use single quotes for strings
  // https://prettier.io/docs/en/options.html#quotes
  singleQuote: true,

  // Use consistent indentation width
  // https://prettier.io/docs/en/options.html#tab-width
  tabWidth: 2,

  // Use trailing commas in multiline structures
  // https://prettier.io/docs/en/options.html#trailing-commas
  trailingComma: 'all',

  // Prefer spaces over tabs for indentation
  // https://prettier.io/docs/en/options.html#tabs
  useTabs: false,
};
