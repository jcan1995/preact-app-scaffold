module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: './',
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        es2021: true
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'jsx-a11y'
    ],
    extends: [
        'eslint:recommended',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:react/jsx-runtime',
        'prettier'
    ],
    rules: {
        'import/no-duplicates': 'error',
        'import/no-unresolved': 'off',
        'no-await-in-loop': 'error',
        'no-promise-executor-return': 'error',
        eqeqeq: ['error', 'always'],
        'no-implied-eval': 'error',
        'no-useless-concat': 'error',
        'no-useless-return': 'error',
        'object-shorthand': ['error', 'always'],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-type-arguments': 'error',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
        '@typescript-eslint/consistent-type-exports': ['error', { fixMixedExportsWithInlineTypeSpecifier: true }],
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/ban-types': 'error',
        'react/no-unused-prop-types': 'error',
        'react/void-dom-elements-no-children': 'error',
        'react/jsx-no-useless-fragment': ['error', {"allowExpressions": true}],
        'react/no-array-index-key': 'error',
        'no-console': 'warn',
        'no-inline-comments': 'off'
    }
}
