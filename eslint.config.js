import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import tseslint from "typescript-eslint";
import globals from "globals";
import json from "@eslint/json";
import css from "@eslint/css";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {ignores: ["dist", "node_modules"]},

  // JS
  js.configs.recommended,

  // TS
  ...tseslint.configs.recommended,

  // Vue
  ...vue.configs["flat/recommended"],

  // Vue files
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
      globals: {...globals.browser, ...globals.es2021},
    },
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/attributes-order": ["error", {alphabetical: true}],
      "vue/max-attributes-per-line": ["error", {singleline: 1, multiline: 1}],
    },
  },

  // TS files
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {ecmaVersion: "latest", sourceType: "module"},
      globals: {...globals.browser, ...globals.es2021},
    },
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", {argsIgnorePattern: "^_"}],
    },
  },

  // JSON
  {files: ["**/*.json"], ...json.configs.recommended},

  // CSS
  {files: ["**/*.css"], ...css.configs.recommended},

  // 🔥 Prettier (в связке с ESLint)
  {
    files: ["**/*.{js,ts,vue,json,css}"],
    plugins: {prettier},
    rules: {
      ...prettierConfig.rules,
      "prettier/prettier": "error",
    },
  },
];
