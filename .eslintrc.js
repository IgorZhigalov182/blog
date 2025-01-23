module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'fsd-arch-path',
    'unused-imports',
  ],
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react/require-default-props': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'role',
          'data-testid',
          'to',
          'target',
          'align',
          'direction',
          'as',
          'justify',
          'border',
          'feature',
          'color',
          'variant',
        ],
      },
    ],
    'max-len': ['error', { ignoreComments: true, code: 120 }],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'linebreak-style': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'implicit-arrow-linebreak': 'off',
    'prefer-regex-literals': 'off',
    'object-curly-newline': 'off',
    'no-multiple-empty-lines': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'arrow-parens': 'off',
    'arrow-body-style': 'off',
    'react/no-array-index-key': 'off',
    'operator-linebreak': 'off',
    'react/jsx-no-useless-fragment': 'warn',
    'no-return-assign': 'off',
    'react/button-has-type': 'off',
    'fsd-arch-path/path-checker': ['warn', { alias: '@' }],
    'fsd-arch-path/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.stories.*',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
    'fsd-arch-path/layer-imports': [
      'error',
      { alias: '@', testFilesPatterns: ['**/StoreDecorator'] },
    ],
    'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    'react/no-unstable-nested-components': 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
};
