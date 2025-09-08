import path from 'path';
import fs from 'fs';
import {fileURLToPath} from 'url';
import defaultVars, {acud} from '../vars/index.js';
import formatToCSS from './jsToCssVars.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const destination = path.join(__dirname, '../vars');

const generateCSSVars = scoped => {
    const cssFileName = scoped ? 'scoped-vars.css' : 'vars.css';
    fs.writeFileSync(path.join(destination, cssFileName), formatToCSS(defaultVars.default, scoped));
};

const generateDifferentCSSVars = () => {
    fs.writeFileSync(path.join(destination, 'acud.vars.css'), formatToCSS(acud, false));
};

generateCSSVars();
generateDifferentCSSVars();
