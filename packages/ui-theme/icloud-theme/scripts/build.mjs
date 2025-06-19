import path from 'path';
import fs from 'fs';
import {fileURLToPath} from 'url';
import pkg from '../lib/index.js';
import formatToCSS from './jsToCssVars.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateCSSVars = scoped => {
    const cssFileName = scoped ? 'scoped-vars.css' : 'vars.css';
    const content = formatToCSS(pkg.acud, scoped);
    fs.writeFileSync(path.join(path.join(__dirname, '../lib'), cssFileName), content);
    fs.writeFileSync(path.join(path.join(__dirname, '../es'), cssFileName), content);
};

generateCSSVars();
