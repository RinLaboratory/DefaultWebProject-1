module.exports = {
  extends: ['eslint:recommended', 'next', 'prettier'],
  ignorePatterns: ['*.config.js'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es6: true,
  },
  plugins: ['import'],
  rules: {
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'import/newline-after-import': [
      'warn',
      {
        count: 1,
      },
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'jsx-a11y/alt-text': 'off',
    '@next/next/no-img-element': 'off',
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignoreConditionalTests: true }],
        '@typescript-eslint/no-misused-promises': [
          2,
          {
            checksVoidReturn: {
              attributes: false,
            },
          },
        ],
      },
    },
  ],
}
