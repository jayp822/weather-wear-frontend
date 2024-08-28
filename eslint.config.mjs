// eslint.config.mjs
import { defineConfig } from 'eslint';

export default defineConfig({
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // Add any custom rules or overrides here
  },
});
