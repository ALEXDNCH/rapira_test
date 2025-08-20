import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tseslint from "typescript-eslint";
import globals from "globals";
import json from "@eslint/json";
import css from "@eslint/css";
import prettierConfig from "eslint-config-prettier";

export default [
  { ignores: ["dist", "node_modules"] },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs["flat/recommended"],

  {
    files: ["**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
      globals: { ...globals.browser, ...globals.es2021 },
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/attributes-order": ["error", { alphabetical: true }],
      "vue/max-attributes-per-line": ["error", { singleline: 1, multiline: 1 }],
    },
  },

  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { ecmaVersion: "latest", sourceType: "module" },
      globals: { ...globals.browser, ...globals.es2021 },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  },

  { files: ["**/*.json"], ...json.configs.recommended },
  { files: ["**/*.css"], ...css.configs.recommended },
  {
    rules: {
      ...prettierConfig.rules,
    },
  },
];
