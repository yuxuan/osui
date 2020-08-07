module.exports = {
    extends: [
        require.resolve('@reskript/config-lint/config/eslint'),
    ],
    rules: {
        'react/jsx-uses-react': 'error',
    },
    overrides: [
        {
            'files': ['*.stories.tsx', '*.stories.jsx', '*.stories.mdx'],
            'rules': {
                'react/jsx-no-bind': 'off',
                'no-console': 'off',
            },
        },
    ],
};
