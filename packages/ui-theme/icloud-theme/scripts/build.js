const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const colors = require('../src/colors.js');

// const formatToVariables = (colors, prefix) => {
//     const variables = {
//         ...colors.tagColors,
//         ...colors.uiColors,
//     };
//     const content = Object.entries(variables).map(
//         ([name, value]) => `${prefix}${name.slice(2)}: ${value};`).join('\n'
//     );
//     return content + '\n';
// };

const formatToCSS = (colors, scoped) => {
    const variables = {
        ...colors.tagColors,
        ...colors.rotatingColors,
        ...colors.uiColors,
        ...colors.presetColors,
    };
    const content = Object.entries(variables).map(([name, value]) => `    ${name}: ${value};`).join('\n');
    return scoped ? `${scoped} {\n${content}\n}\n` : `:root {\n${content}\n}\n`;
};

const destination = path.join(__dirname, '../vars');

const clean = () => {
    rimraf.sync(destination);
    mkdirp.sync(destination);
};

const generateStyles = scoped => {
    // fs.writeFileSync(path.join(destination, 'vars.less'), formatToVariables(colors, '@'));
    // fs.writeFileSync(path.join(destination, 'vars.scss'), formatToVariables(colors, '$'));
    const cssFileName = scoped ? 'scoped-vars.css' : 'vars.css';
    fs.writeFileSync(path.join(destination, cssFileName), formatToCSS(colors, scoped));
};

clean();
generateStyles();
generateStyles('[data-theme="icloud"]');
