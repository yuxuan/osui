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
    transform: {
        '\\.tsx?$': path.resolve(__dirname, '../../', './node_modules/@ant-design/tools/lib/jest/codePreprocessor'),
        '\\.(m?)js$': path.resolve(__dirname, '../../', './node_modules/@ant-design/tools/lib/jest/codePreprocessor'),
        '\\.md$': path.resolve(__dirname, '../../', './node_modules/@ant-design/tools/lib/jest/demoPreprocessor'),
        '\\.(jpg|png|gif|svg)$': path.resolve(
            __dirname, '../../', './node_modules/@ant-design/tools/lib/jest/imagePreprocessor'
        ),
    },
};
