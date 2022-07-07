module.exports = {
    extends: require.resolve('@reskript/config-lint/config/eslint'),
    plugins: [
        'import',
    ],
    rules: {
        'react/jsx-uses-react': 'error',
        'linebreak-style': [0, 'error', 'windows'],
        'no-use-before-define': 'off',
        'import/no-extraneous-dependencies': 'error',
    },
    overrides: [{
        'files': ['*.stories.tsx', '*.stories.jsx', '*.stories.mdx', '**/icloud-demo/*.tsx'],
        'rules': {
            'react/jsx-no-bind': 'off',
            'no-console': 'off',
            'import/no-extraneous-dependencies': 'off',
        },
    }],
    root: true,
    ignorePatterns: ['examples/**/*'],
};
