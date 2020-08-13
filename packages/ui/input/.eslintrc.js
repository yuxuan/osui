module.exports = {
    extends: require.resolve('@reskript/config-lint/config/eslint'),
    rules: {
        'react/jsx-uses-react': 'error',
    },
    root: true,
};
