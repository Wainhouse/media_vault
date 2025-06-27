module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['dist', 'node_modules'],
    rules: {
        '@typescript-eslint/no-unused-vars': ['warn']
    }
};