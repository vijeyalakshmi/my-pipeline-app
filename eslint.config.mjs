import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser },
},
pluginVue.configs["flat/essential"],

// Add Jest globals
{
  files: ["**/*.test.js", "**/*.spec.js"],  // Target test files
  languageOptions: {
    globals: {
      ...globals.browser, // Include browser globals
      jest: true,          // Enable Jest globals
      describe: true,      // Jest's 'describe' function
      it: true,            // Jest's 'it' function
      expect: true,        // Jest's 'expect' function
      beforeAll: true,     // Jest's 'beforeAll' hook
      afterAll: true,      // Jest's 'afterAll' hook
      beforeEach: true,    // Jest's 'beforeEach' hook
      afterEach: true,     // Jest's 'afterEach' hook
    },
  },
},
]);