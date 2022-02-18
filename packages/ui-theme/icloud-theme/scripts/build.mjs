import path from 'path';
import fs from 'fs';
import {fileURLToPath} from 'url';
import {light, dark} from '../vars/index.js';
import formatToCSS from './jsToCssVars.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destination = path.join(__dirname, '../vars');

const generateCSSVars = scoped => {
    const cssFileName = scoped ? 'scoped-vars.css' : 'vars.css';
    fs.writeFileSync(path.join(destination, cssFileName), formatToCSS(light, scoped));
};

const generateDarkCSSVars = scoped => {
    fs.writeFileSync(path.join(destination, 'dark-vars.css'), formatToCSS(dark, scoped));
};

generateCSSVars();
generateCSSVars('[data-theme="icloud"]');
generateDarkCSSVars('[data-theme="dark"]');
