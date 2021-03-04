module.exports = {
  // extends: ["prettier"],
  // plugins: ["prettier"],
  // rules: {
  //   "prettier/prettier": ["error", {"singleQuote": true, "parser": "flow"}]
  // },
  trailingComma: "all",
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  printWidth: 100,
  // quoteProps: "as-needed",
  arrowParens: "always",
  overrides: [
    {
        files: "*.component.html",
        options: {
            parser: "angular"
        }
    },
    {
        files: "*.html",
        options: {
            parser: "html"
        }
    }
]
};