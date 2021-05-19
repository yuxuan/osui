const path = require('path');
const fs = require('fs');
const variables = require('../vars').default;
const formatToCSS = require('./jsToCssVars').default;
// part
// const themeVars = require('../vars/theme').default;
// const colorsVars = require('../vars/colors').default;
// const buttonVars = require('../vars/components/button').default;

const destination = path.join(__dirname, '../vars');

const generateCSSVars = scoped => {
    const cssFileName = scoped ? 'scoped-vars.css' : 'vars.css';
    fs.writeFileSync(path.join(destination, cssFileName), formatToCSS(variables, scoped));
};

// const generateComponentCSSVars = (scoped, componentName, vars) => {
//     const cssFileName = scoped ? `${componentName}-scoped-vars.css` : `${componentName}-vars.css`;
//     fs.writeFileSync(path.join(destination, cssFileName), formatToCSS(vars, scoped));
// };

generateCSSVars();
generateCSSVars('[data-theme="icloud"]');

// generateComponentCSSVars(null, 'button', buttonVars);
// generateComponentCSSVars(null, 'colors', colorsVars);
// generateComponentCSSVars(null, 'theme', themeVars);
