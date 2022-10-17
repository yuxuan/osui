import path from 'path';
import fs from 'fs';
import {fileURLToPath} from 'url';
import defaultVars, {v1, v2, acud, dark} from '../vars/index.js';
import formatToCSS from './jsToCssVars.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destination = path.join(__dirname, '../vars');

const generateCSSVars = scoped => {
    const cssFileName = scoped ? 'scoped-vars.css' : 'vars.css';
    fs.writeFileSync(path.join(destination, cssFileName), formatToCSS(defaultVars.default, scoped));
};

const generateDifferentCSSVars = () => {
    fs.writeFileSync(path.join(destination, 'v1.vars.css'), formatToCSS(v1, false));
    fs.writeFileSync(path.join(destination, 'acud.vars.css'), formatToCSS(acud, false));
    fs.writeFileSync(path.join(destination, 'dark.vars.css'), formatToCSS(dark, '[data-theme="dark"]'));
};

generateCSSVars();
generateDifferentCSSVars();
