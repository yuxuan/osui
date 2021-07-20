module.exports = {
    verbose: true,
    preset: 'ts-jest/presets/js-with-ts',
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
    setupFiles: ['../../tests/setup.js'],

};
