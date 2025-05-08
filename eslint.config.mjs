import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" },
  },
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser, // Keep browser globals
        ...globals.node,    // Add Node.js globals (e.g., `require`, `module`, `process`)
        ...globals.jest,    // Add Jest globals (e.g., `describe`, `it`, `expect`)
      },
    },
  },
  pluginVue.configs["flat/essential"],
]);
