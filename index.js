module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react-hooks',
    'functional',
    'react',
    'import',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/all',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  rules: {
    /**
     * eslint customization
     * https://eslint.org/docs/rules/
     */
    'guard-for-in': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-implied-eval': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-script-url': 'error',
    'no-throw-literal': 'error',
    'no-shadow': 'error',
    'prefer-object-spread': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'no-unexpected-multiline': 'off',
    'array-callback-return': ['error', { allowImplicit: true }],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    /** already covered by @typescript-eslint/no-unused-vars */
    'no-unused-vars': 'off',
    'no-duplicate-imports': 'error',

    /**
     * @typescript-eslint customization
     * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/docs/rules
     */
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': [
      'error',
      { prefixWithI: 'always' },
    ],
    '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-magic-numbers': 'off',
    '@typescript-eslint/no-type-alias': 'off',
    '@typescript-eslint/generic-type-naming': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/default-param-last': 'off',
    '@typescript-eslint/typedef': 'off', // unnecessary as we are using noImplicitAny
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        varsIgnorePattern: '_',
        ignoreRestSiblings: true,
      },
    ],

    '@typescript-eslint/space-before-function-paren': 'off', // prettier handles formatting
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
      },
    ],
    '@typescript-eslint/naming-convention': 'off',

    /**
        /* react customization
        /* https://github.com/yannickcr/eslint-plugin-react
        */
    'react/prop-types': 'off',
    'react/jsx-no-bind': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],

    /**
        /* react hooks customization
        /* https://github.com/facebook/react
        */
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    /**
        /* functional customization
        /* https://github.com/jonaskello/eslint-plugin-functional
        */
    'functional/prefer-readonly-type': [
      'error',
      { allowLocalMutation: true, ignoreClass: true },
    ],
    'functional/no-method-signature': 'error',
    'functional/immutable-data': 'off',

    /**
     * import rules
     * https://github.com/benmosher/eslint-plugin-import/tree/master/docs/rules
     */
    'import/no-default-export': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-cycle': 'error',
    'import/no-named-default': 'error',
    'no-duplicate-imports': 'error',
  },
}
