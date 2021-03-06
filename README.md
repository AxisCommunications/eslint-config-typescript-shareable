# eslint-config-typescript-shareable

Typescript ESLint shareable config

This config provides an explicit list of linting rules so you can use the same rules across different projects.
The rules that are provided in this config are mostly best practices for the React and JavaScript and TypeScript code.

This configuration presumes that at least ES2015, TypeScript and [React strict mode](https://reactjs.org/docs/strict-mode.html)
are used in the project that uses this config.

The rules we have should:

- not enforce any visual style (use prettier for that)
- not enforce any particular coding style (functional, React hooks)
- be well-behaved (e.g. forcing use of nullish coalescing can lead to worse looking code)
- be allowed or error, not just warn

If you want to add a new rule or change an existing rule, please create an issue or pull request.

## Install

```bash
yarn add -D eslint-config-typescript-shareable
```

## Usage

1. ESLint
   Add to your `eslintrc.yaml` configuration file:

   ```yml
   extends:
     - 'typescript-shareable'

   parserOptions:
     project: './tsconfig.json'

   env:
     browser: true
     es6: true
     node: true

   overrides:
     ###
     # Test file overrides
     ###
     - files: ['**/*.test.tsx', '**/*.test.ts']
       env:
         jest: true
   ```

2. stylelint
   Add to your `.stylelintrc` configuration file:

   ```json
   {
     "extends": ["eslint-config-typescript-shareable/.stylelintrc"]
   }
   ```

3. Prettier
   Add to your `.prettierrc.js` configuration file:

   ```js
   module.exports = {
     ...require('eslint-config-typescript-shareable/.prettierrc.js'),
   }
   ```
