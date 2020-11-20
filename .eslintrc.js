module.exports = {
    extends: require.resolve('@reskript/config-lint/config/eslint'),
    rules: {
        'react/jsx-uses-react': 'error',
        'linebreak-style': [0, 'error', 'windows'],
        'no-use-before-define': 'off',
    },
    overrides: [{
        'files': ['*.stories.tsx', '*.stories.jsx', '*.stories.mdx'],
        'rules': {
            'react/jsx-no-bind': 'off',
            'no-console': 'off',
        },
    }],
    root: true,
    ignorePatterns: ['examples/**/*'],
};
