const path = require('path');
const fs = require('fs');
const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const colors = require('../src/colors.js');

const formatToVariables = (colors, prefix) => {
    const variables = {
        ...colors.tagColors,
        ...colors.uiColors,
    };
    const content = Object.entries(variables).map(([name, value]) => `${prefix}${name.slice(2)}: ${value};`).join('\n');
    return content + '\n';
};

const formatToCSS = colors => {
    const variables = {
        ...colors.tagColors,
        ...colors.rotatingColors,
        ...colors.uiColors,
        ...colors.presetColors,
    };
    const content = Object.entries(variables).map(([name, value]) => `    ${name}: ${value};`).join('\n');
    return `:root {\n${content}\n}\n`;
};

const generateStyles = () => {
    const destination = path.join(__dirname, '../vars');
    rimraf.sync(destination);
    mkdirp.sync(destination);
    fs.writeFileSync(path.join(destination, 'vars.less'), formatToVariables(colors, '@'));
    fs.writeFileSync(path.join(destination, 'vars.scss'), formatToVariables(colors, '$'));
    fs.writeFileSync(path.join(destination, 'vars.css'), formatToCSS(colors));
};

generateStyles();
