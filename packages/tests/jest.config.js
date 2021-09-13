const path = require('path');

module.exports = {
    verbose: true,
    bail: true,
    testEnvironment: 'jsdom',
    preset: 'ts-jest/presets/js-with-ts',
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    setupFiles: [path.resolve(__dirname, 'setup.js')],
    setupFilesAfterEnv: [path.resolve(__dirname, 'setupAfterEnv.ts')],
    snapshotSerializers: ['enzyme-to-json/serializer'],
};
