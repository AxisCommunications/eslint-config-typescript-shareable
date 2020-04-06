# eslint-config-typescript-shareable

Typescript ESLint shareable config

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
