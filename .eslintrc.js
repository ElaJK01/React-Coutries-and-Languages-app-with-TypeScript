// eslint-disable-next-line @typescript-eslint/no-var-requires
const typescriptEslintRecommended = require("@typescript-eslint/eslint-plugin")
  .configs.recommended;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  plugins: ["react", "prettier", "@typescript-eslint"],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
      },
      plugins: ["@typescript-eslint"],
      rules: Object.assign(typescriptEslintRecommended.rules, {
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/member-delimiter-style": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "react/prop-types": "off",
      }),
    },
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/no-unstable-nested-components": [1, { allowAsProps: true }],
    "react/function-component-definition": "off",
    "react/prop-types": "off",
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
    "consistent-return": 0,
    "no-unused-expressions": 0,
    "no-nested-ternary": 0,
    "import/no-import-module-exports": "off",
    "import/extensions": "off",
  },
  parser: "@babel/eslint-parser",
  ignorePatterns: ["graphql.tsx"],
};
